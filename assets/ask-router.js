/* ==========================================================================
   ROTEADOR DO ASSISTENTE

   Decide ANTES do modelo. Ou a pergunta casa com blocos que existem de fato em
   ask-knowledge.js, ou devolve uma recusa específica — e nesse caso o modelo
   sequer roda. É aqui que mora a honestidade da página.

   A arquitetura é a mesma do router.js do swapi-ia, trocando a SWAPI pela base
   de conhecimento. A diferença de contexto importa: lá, uma invenção produzia
   um fato errado sobre Star Wars; aqui, produz um fato errado sobre uma pessoa
   real, no site dela. Por isso o limiar é deliberadamente conservador — é
   melhor recusar uma pergunta respondível do que responder uma que não é.
   ========================================================================== */

(function () {
  "use strict";

  /* Acento e caixa não podem decidir se a pergunta é entendida. */
  function normalizar(texto) {
    return String(texto || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  /* Palavras curtas e vazias não devem pontuar: "de" casando com "dedicado"
     encheria o contexto de bloco irrelevante. */
  var VAZIAS = {
    pt: ["que", "qual", "quais", "como", "onde", "quando", "quem", "por", "para", "com",
         "uma", "uns", "umas", "dos", "das", "sobre", "ele", "dele", "seu", "sua", "voce",
         "voces", "isso", "esse", "essa", "tem", "faz", "fez", "sabe", "pode", "mais", "muito"],
    en: ["what", "which", "how", "where", "when", "who", "for", "with", "the", "and", "does",
         "did", "him", "his", "her", "you", "your", "this", "that", "has", "have", "can",
         "about", "more", "very", "tell", "say"]
  };

  function termos(texto, lang) {
    var vazias = VAZIAS[lang] || VAZIAS.en;
    return normalizar(texto)
      .split(/[^a-z0-9.+#]+/)
      .filter(function (t) {
        return t.length >= 3 && vazias.indexOf(t) === -1;
      });
  }

  /* Pontuação de um bloco contra a pergunta.

     Palavra-chave declarada vale muito mais que coincidência no corpo do texto:
     a lista de keywords é curadoria, o corpo é prosa. Sem essa diferença, um
     bloco longo ganharia de um bloco preciso só por ter mais palavras. */
  function pontuar(bloco, pergunta, lang) {
    var alvo = normalizar(pergunta);
    var pontos = 0;

    var chaves = (bloco.keywords && (bloco.keywords[lang] || bloco.keywords.en)) || [];
    chaves.forEach(function (chave) {
      var c = normalizar(chave);
      if (!c) return;
      // expressão de várias palavras casa como frase; palavra solta, como palavra
      if (c.indexOf(" ") >= 0) {
        if (alvo.indexOf(c) >= 0) pontos += 4;
      } else if (new RegExp("(^|[^a-z0-9])" + c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "([^a-z0-9]|$)").test(alvo)) {
        pontos += 3;
      }
    });

    var corpo = normalizar((bloco[lang] || bloco.en).text);
    termos(pergunta, lang).forEach(function (t) {
      if (corpo.indexOf(t) >= 0) pontos += 1;
    });

    return pontos;
  }

  var LIMIAR = 3;   // abaixo disso a página prefere admitir que não sabe
  var MAX_BLOCOS = 3;

  function rotear(pergunta, lang) {
    var base = window.PF_KNOWLEDGE;
    var idioma = lang === "pt" ? "pt" : "en";

    if (!base || !base.blocks || !base.blocks.length) {
      return { kind: "unavailable" };
    }

    var texto = normalizar(pergunta);
    if (!texto) return { kind: "empty" };

    /* 1. Fora de escopo vem primeiro, e de propósito: "quanto ele ganha" tem a
       palavra "ganha" e casaria com algum bloco por acidente. A recusa
       específica tem que ganhar da coincidência. */
    var fora = base.outOfScope || [];
    for (var i = 0; i < fora.length; i++) {
      var regra = fora[i];
      var padrao = (regra.match && (regra.match[idioma] || regra.match.en)) || null;
      if (padrao && padrao.test(pergunta)) {
        var loc = regra[idioma] || regra.en;
        return {
          kind: "refuse",
          id: regra.id,
          reason: loc.reason,
          instead: loc.instead
        };
      }
    }

    /* 2. Casamento com os blocos. */
    var marcados = base.blocks
      .map(function (b) { return { bloco: b, pontos: pontuar(b, pergunta, idioma) }; })
      .filter(function (m) { return m.pontos >= LIMIAR; })
      .sort(function (a, b) { return b.pontos - a.pontos; })
      .slice(0, MAX_BLOCOS);

    if (!marcados.length) {
      return {
        kind: "unknown",
        topics: base.blocks.map(function (b) { return (b[idioma] || b.en).title; })
      };
    }

    return {
      kind: "answer",
      blocks: marcados.map(function (m) { return m.bloco; }),
      scores: marcados.map(function (m) { return m.pontos; })
    };
  }

  /* O contexto que vai para o modelo: só os blocos escolhidos, nada da base
     inteira. Contexto curto é o que impede o modelo de passear por um fato que
     ninguém perguntou. */
  function contexto(blocos, lang) {
    var idioma = lang === "pt" ? "pt" : "en";
    return blocos
      .map(function (b) {
        var loc = b[idioma] || b.en;
        return "## " + loc.title + "\n" + loc.text;
      })
      .join("\n\n");
  }

  window.PF_ASK_ROUTER = {
    rotear: rotear,
    contexto: contexto,
    normalizar: normalizar,
    LIMIAR: LIMIAR
  };
})();
