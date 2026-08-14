/* Teste do roteador do assistente.
   Rodar:  node tests/ask-router.test.mjs

   Por que este arquivo existe, num repositório sem suíte de testes: a página do
   assistente fala sobre uma pessoa real. Um roteador frouxo não gera um bug —
   gera uma afirmação inventada sobre alguém, no site dele. Os casos abaixo
   travam as duas pontas: o que ele PRECISA responder, e o que ele PRECISA
   recusar.

   Ao trocar ask-knowledge.js, rode isto antes de publicar. Casos de "answer"
   podem mudar de bloco conforme a base cresce; os de "refuse" não deveriam
   mudar nunca — eles são as regras que o próprio Claudney escreveu no perfil. */

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..");
globalThis.window = {};
eval(readFileSync(join(raiz, "assets/ask-knowledge.js"), "utf8"));
eval(readFileSync(join(raiz, "assets/ask-router.js"), "utf8"));
const R = globalThis.window.PF_ASK_ROUTER;

const CASOS = [
  // o que a base cobre
  ["pt", "quem e ele?", "answer:quem-e"],
  ["pt", "desde quando ele trabalha com tecnologia?", "answer:quem-e"],
  ["pt", "ele trabalha com ERP?", "answer:erp-fiscal"],
  ["pt", "ele conhece NF-e e SPED?", "answer:erp-fiscal"],
  ["pt", "qual a tecnologia principal dele?", "answer:stack-principal"],
  ["pt", "ele conhece Python?", "answer:stack-demais"],
  ["pt", "o que ele estuda de IA?", "answer:estudos-ia"],
  ["pt", "como ele usa IA?", "answer:como-usa-ia"],
  ["pt", "quais projetos ele criou?", "answer:projetos"],
  ["pt", "do que ele gosta?", "answer:gostos"],
  ["pt", "qual o linkedin dele?", "answer:contato"],
  ["en", "what is his main technology?", "answer:stack-principal"],
  ["en", "does he know Flutter?", "answer:stack-demais"],
  ["en", "what projects has he built?", "answer:projetos"],
  ["en", "how does he use AI?", "answer:como-usa-ia"],

  // o que o próprio perfil manda recusar
  ["pt", "quanto ele ganha?", "refuse:remuneracao"],
  ["pt", "quanto ele cobra a hora?", "refuse:remuneracao"],
  ["pt", "ele e casado?", "refuse:pessoal-sensivel"],
  ["pt", "quantos anos ele tem?", "refuse:pessoal-sensivel"],
  ["pt", "em que partido ele vota?", "refuse:pessoal-sensivel"],
  ["pt", "qual a religiao dele?", "refuse:pessoal-sensivel"],
  ["pt", "para que cliente ele fez isso?", "refuse:interno-de-empresa"],
  ["pt", "ele aceita um freela?", "refuse:falar-por-ele"],
  ["en", "what is his salary?", "refuse:remuneracao"],
  ["en", "is he married?", "refuse:pessoal-sensivel"],
  ["en", "which clients has he worked for?", "refuse:interno-de-empresa"],

  // o que ele simplesmente não sabe — e admite, em vez de chutar
  ["pt", "ele sabe cozinhar?", "unknown"],
  ["pt", "ele conhece Kubernetes?", "unknown"],
  ["en", "does he know Kubernetes?", "unknown"]
];

let falhas = 0;

for (const [lang, pergunta, esperado] of CASOS) {
  const r = R.rotear(pergunta, lang);
  let real = r.kind;
  if (r.kind === "answer") real = "answer:" + r.blocks[0].id;
  if (r.kind === "refuse") real = "refuse:" + r.id;

  if (real === esperado) {
    console.log("ok    " + (lang + " | " + pergunta).padEnd(44) + real);
  } else {
    falhas++;
    console.log("FALHA " + (lang + " | " + pergunta).padEnd(44) + real + "   (esperado " + esperado + ")");
  }
}

// Invariantes que não dependem de caso específico.
const base = globalThis.window.PF_KNOWLEDGE;

for (const b of base.blocks) {
  for (const idioma of ["pt", "en"]) {
    if (!b[idioma] || !b[idioma].title || !b[idioma].text) {
      falhas++;
      console.log("FALHA bloco " + b.id + " sem " + idioma + " completo");
    }
  }
}

const ids = base.blocks.map((b) => b.id);
if (new Set(ids).size !== ids.length) {
  falhas++;
  console.log("FALHA ids de bloco repetidos");
}

/* A frase de recusa é escolha do autor do perfil, não do código. Se ela sumir,
   o assistente passa a improvisar o "não sei", que é justamente o que o perfil
   mandou não fazer. */
if (!base.fallbackLine || !base.fallbackLine.pt || !base.fallbackLine.en) {
  falhas++;
  console.log("FALHA fallbackLine ausente em algum idioma");
}

console.log("\n" + (CASOS.length - falhas) + "/" + CASOS.length + " casos, " + falhas + " falha(s)");
process.exit(falhas ? 1 : 0);
