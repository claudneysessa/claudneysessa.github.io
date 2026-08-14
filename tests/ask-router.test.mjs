/* Teste do roteador do assistente.
   Rodar:  node tests/ask-router.test.mjs

   Por que este arquivo existe, num repositório sem suíte de testes: a página do
   assistente fala sobre uma pessoa real. Um roteador frouxo não gera um bug —
   gera uma afirmação inventada sobre alguém, no site dele. Os casos abaixo
   travam justamente as duas pontas: o que ele PRECISA responder, e o que ele
   PRECISA recusar.

   Ao trocar ask-knowledge.js pelo arquivo definitivo, rode isto antes de
   publicar. Casos de "answer" podem mudar de bloco conforme a base cresce; os
   de "refuse" não deveriam mudar nunca. */

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
  ["pt", "qual a stack dele?", "answer:stack"],
  ["pt", "ele programa em Delphi?", "answer:stack"],
  ["pt", "onde estudou?", "answer:formacao"],
  ["pt", "como falo com ele?", "answer:contato"],
  ["pt", "qual o email dele?", "answer:contato"],
  ["pt", "onde vejo os projetos?", "answer:portfolio"],
  ["pt", "por que o github nao mostra isso?", "answer:repositorios-privados"],
  ["en", "what is his stack?", "answer:stack"],
  ["en", "how many years of experience?", "answer:quem-e"],
  ["en", "how can I reach him?", "answer:contato"],

  // o que a base recusa, com motivo específico
  ["pt", "quanto ele ganha?", "refuse:remuneracao"],
  ["pt", "quanto ele cobra a hora?", "refuse:remuneracao"],
  ["pt", "onde ele trabalha hoje?", "refuse:empregador"],
  ["pt", "em que empresa ele esta?", "refuse:empregador"],
  ["pt", "ele e casado?", "refuse:vida-pessoal"],
  ["pt", "quantos anos ele tem?", "refuse:vida-pessoal"],
  ["pt", "qual o time de futebol dele?", "refuse:vida-pessoal"],
  ["pt", "o que ele acha de Rust?", "refuse:opiniao"],
  ["en", "what is his salary?", "refuse:remuneracao"],
  ["en", "where does he work?", "refuse:empregador"],
  ["en", "is he married?", "refuse:vida-pessoal"],

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
    console.log("ok    " + (lang + " | " + pergunta).padEnd(38) + real);
  } else {
    falhas++;
    console.log("FALHA " + (lang + " | " + pergunta).padEnd(38) + real + "   (esperado " + esperado + ")");
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

/* O domínio do empregador não pode aparecer em nenhuma superfície pública, e
   esta base é uma delas — com o agravante de alimentar um gerador de texto. */
const PROIBIDO = /\b(erp|fiscal|tribut\w*|nota\s+fiscal|documento\s+eletr[oô]nico|e-?invoic\w*|sped|nfe|nf-e)\b/i;
const serializado = JSON.stringify(base, (k, v) => (v instanceof RegExp ? v.source : v));
if (PROIBIDO.test(serializado)) {
  falhas++;
  console.log("FALHA base de conhecimento cita o dominio do empregador");
}

console.log("\n" + (CASOS.length - falhas) + "/" + CASOS.length + " casos, " + falhas + " falha(s)");
process.exit(falhas ? 1 : 0);
