/* ==========================================================================
   BASE DE CONHECIMENTO DO ASSISTENTE

   É daqui que o assistente tira tudo o que ele sabe sobre Claudney. O modelo
   não lembra nada: ou o fato está escrito abaixo, ou ele não existe para a
   página, e o roteador recusa antes de o modelo rodar.

   Esta versão é PROVISÓRIA e contém apenas o que já é público no perfil do
   GitHub (github.com/claudneysessa). Nada foi inventado, deduzido ou
   completado. Quando o arquivo definitivo chegar, ele substitui os blocos
   abaixo — o formato é o mesmo e nada mais precisa mudar.

   FORMATO DE UM BLOCO

     {
       id: "identificador-estavel",   // não repetir; usado em log e teste
       topic: "assunto",              // agrupador legível
       pt: { title, text },           // o que o assistente pode dizer, em PT
       en: { title, text },           // idem, em inglês
       keywords: {                    // o que faz a pergunta cair neste bloco
         pt: ["palavra", "outra"],
         en: ["word", "other"]
       }
     }

   REGRAS QUE VALEM PARA QUEM ESCREVER ESTE ARQUIVO

   1. Um bloco = um assunto. Bloco grande demais faz o assistente responder
      coisa que não foi perguntada; bloco pequeno demais nunca é encontrado.
   2. O texto do bloco é o teto do que pode ser dito. O modelo reescreve a
      frase, mas não pode acrescentar fato nenhum.
   3. Nada de número, empresa, data ou cliente que não esteja escrito aqui.
   4. Paridade PT/EN obrigatória. Uma versão nunca é resumo da outra.
   5. Se um fato não puder aparecer na tela, ele não entra neste arquivo.
      Não existe "contexto só para o modelo se orientar" — tudo aqui é público.
   ========================================================================== */

window.PF_KNOWLEDGE = {
  /* Origem declarada, para quem for auditar de onde veio cada afirmação. */
  source: "github.com/claudneysessa — perfil público, lido em 2026-08-14",
  provisional: true,

  blocks: [
    {
      id: "quem-e",
      topic: "identidade",
      pt: {
        title: "Quem é",
        text:
          "Claudney Sarti Sessa é desenvolvedor sênior, bacharel em Sistemas de Informação, " +
          "com mais de 20 anos de experiência construindo sistemas corporativos — do tipo que " +
          "roda em produção, com gente dependendo deles todos os dias."
      },
      en: {
        title: "Who he is",
        text:
          "Claudney Sarti Sessa is a senior developer with a Bachelor's in Information Systems " +
          "and over 20 years of experience building enterprise systems — the kind that runs in " +
          "production, with people depending on them every day."
      },
      keywords: {
        pt: ["quem", "quem e ele", "sobre", "apresenta", "experiencia", "anos", "senior", "desenvolvedor", "carreira", "bacharel"],
        en: ["who", "about", "introduce", "experience", "years", "senior", "developer", "career", "bachelor"]
      }
    },

    {
      id: "foco",
      topic: "atuacao",
      pt: {
        title: "No que atua",
        text:
          "O foco dele é .NET, Flutter e JavaScript, e ele atua com IA aplicada e engenharia " +
          "de prompts."
      },
      en: {
        title: "What he focuses on",
        text:
          "He focuses on .NET, Flutter and JavaScript, and works with applied AI and prompt " +
          "engineering."
      },
      keywords: {
        pt: ["foco", "atua", "trabalha com", "especialidade", "ia aplicada", "engenharia de prompts", "prompt"],
        en: ["focus", "works with", "specialty", "applied ai", "prompt engineering", "prompt"]
      }
    },

    {
      id: "stack",
      topic: "tecnologias",
      pt: {
        title: "Stack",
        text:
          "Delphi em sistemas legados, .NET em sistemas corporativos, Dart e Flutter no mobile, " +
          "e JavaScript e TypeScript na web — que é onde vivem os experimentos de IA."
      },
      en: {
        title: "Stack",
        text:
          "Delphi for legacy systems, .NET for enterprise systems, Dart and Flutter for mobile, " +
          "and JavaScript and TypeScript on the web — which is where the AI experiments live."
      },
      keywords: {
        pt: ["stack", "tecnologia", "linguagem", "linguagens", "delphi", "dotnet", ".net", "flutter", "dart", "javascript", "typescript", "mobile", "web", "programa em"],
        en: ["stack", "technology", "language", "languages", "delphi", "dotnet", ".net", "flutter", "dart", "javascript", "typescript", "mobile", "web", "programs in"]
      }
    },

    {
      id: "repositorios-privados",
      topic: "tecnologias",
      pt: {
        title: "Por que o GitHub não mostra essa experiência",
        text:
          "A maior parte da experiência dele está em repositórios corporativos privados, então " +
          "não aparece nas estatísticas de linguagem do perfil do GitHub."
      },
      en: {
        title: "Why GitHub does not show that experience",
        text:
          "Most of that experience lives in private corporate repositories, so it does not show " +
          "up in the language statistics of his GitHub profile."
      },
      keywords: {
        pt: ["github", "estatistica", "linguagem do perfil", "privado", "repositorio privado", "por que nao aparece"],
        en: ["github", "statistics", "profile language", "private", "private repository", "why not show"]
      }
    },

    {
      id: "formacao",
      topic: "formacao",
      pt: {
        title: "Formação",
        text:
          "Pós-graduação em Engenharia de Software com IA Aplicada, em andamento; pós-graduação " +
          "em Engenharia de Software; pós-graduação em Big Data e Analytics; e bacharelado em " +
          "Sistemas de Informação pela FAESA."
      },
      en: {
        title: "Education",
        text:
          "Postgraduate in Software Engineering with Applied AI, in progress; postgraduate in " +
          "Software Engineering; postgraduate in Big Data and Analytics; and a BSc in " +
          "Information Systems from FAESA."
      },
      keywords: {
        pt: ["formacao", "estudou", "faculdade", "pos", "pos-graduacao", "graduacao", "curso", "faesa", "big data", "analytics", "engenharia de software"],
        en: ["education", "studied", "university", "postgraduate", "degree", "course", "faesa", "big data", "analytics", "software engineering"]
      }
    },

    {
      id: "portfolio",
      topic: "projetos",
      pt: {
        title: "Portfólio",
        text:
          "Os projetos pessoais dele ficam em claudneysessa.github.io, que é o único lugar onde " +
          "a lista vive — assim ela nunca discorda de si mesma. Cada projeto declara no próprio " +
          "card se tem demonstração ao vivo e se o código é aberto."
      },
      en: {
        title: "Portfolio",
        text:
          "His personal projects live at claudneysessa.github.io, the single place where the " +
          "list exists, so it never disagrees with itself. Each project states on its own card " +
          "whether it has a live demo and whether the code is open."
      },
      keywords: {
        pt: ["portfolio", "projetos", "site", "pagina", "onde ver", "trabalhos", "demonstracao", "demo"],
        en: ["portfolio", "projects", "site", "page", "where to see", "work", "demo", "live"]
      }
    },

    {
      id: "contato",
      topic: "contato",
      pt: {
        title: "Contato",
        text:
          "Por e-mail em claudneysartisessa@gmail.com, no LinkedIn em linkedin.com/in/claudneysessa " +
          "ou no Medium em medium.com/@claudneysartisessa."
      },
      en: {
        title: "Contact",
        text:
          "By email at claudneysartisessa@gmail.com, on LinkedIn at linkedin.com/in/claudneysessa, " +
          "or on Medium at medium.com/@claudneysartisessa."
      },
      keywords: {
        pt: ["contato", "contatar", "email", "e-mail", "gmail", "falar", "falo", "fala", "conversar",
             "chamar", "linkedin", "medium", "redes", "encontrar", "encontro", "procurar"],
        en: ["contact", "email", "e-mail", "gmail", "reach", "talk", "speak", "hire", "linkedin",
             "medium", "social", "find", "get in touch"]
      }
    }
  ],

  /* ------------------------------------------------------------------------
     O QUE ESTA BASE NÃO RESPONDE

     Cada entrada casa um tipo de pergunta que o arquivo não cobre e devolve um
     motivo específico mais o que existe no lugar. Isso não é firula: "não sei"
     genérico faz o visitante achar que a página quebrou, e um modelo de 0,5B
     solto numa pergunta dessas inventa com a maior naturalidade.

     Quando o arquivo definitivo chegar, entradas daqui podem virar blocos de
     conhecimento — é só mover.
     ------------------------------------------------------------------------ */
  outOfScope: [
    /* Atenção ao escrever padrão aqui: radical truncado NÃO pode terminar em
       \b. "casad\b" nunca casa com "casado", porque o \b exige que o próximo
       caractere não seja letra. Use \w* depois do radical. */
    {
      id: "empregador",
      match: {
        pt: /\b(onde\s+(ele\s+)?trabalha|empresa\w*|empregador\w*|empregad\w*|contratad\w*|patr[aã]o|firma|emprego\s+atual)/i,
        en: /\b(where\s+does\s+he\s+work|which\s+company|employer\w*|employed|current\s+job|works?\s+at)/i
      },
      pt: {
        reason: "esta página não fala sobre o empregador atual dele",
        instead: "os mais de 20 anos em sistemas corporativos, a stack e os projetos pessoais"
      },
      en: {
        reason: "this page does not talk about his current employer",
        instead: "the 20+ years in enterprise systems, the stack and the personal projects"
      }
    },
    {
      id: "remuneracao",
      match: {
        pt: /\b(sal[aá]rio\w*|quanto\s+(ele\s+)?(ganha|custa|cobra)|remunera\w*|pretens[aã]o|valor\s+da\s+hora|pre[cç]o\w*|or[cç]amento\w*|hora\s+t[eé]cnica)/i,
        en: /\b(salary|salaries|how\s+much\s+does\s+he\s+(earn|charge|cost)|hourly\s+rate|compensation|day\s+rate|price|quote|budget)/i
      },
      pt: {
        reason: "valores e remuneração não estão nesta página",
        instead: "conversar por e-mail, que é onde esse assunto cabe"
      },
      en: {
        reason: "rates and compensation are not on this page",
        instead: "talking by email, which is where that conversation belongs"
      }
    },
    {
      id: "vida-pessoal",
      match: {
        pt: /\b(idade|quantos\s+anos\s+(ele\s+)?tem|casad\w*|solteir\w*|filho\w*|fam[ií]lia|mora\s+(onde|em)|endere[cç]o|telefone|religi\w*|pol[ií]tic\w*|namorad\w*|esposa|marido|time\s+de\s+futebol|torce)/i,
        en: /\b(how\s+old|his\s+age|married|single|children|kids|family|lives\s+(where|in)|address|phone\s+number|religio\w*|politic\w*|wife|husband|girlfriend|boyfriend)/i
      },
      pt: {
        reason: "esta página é sobre o trabalho dele, não sobre a vida pessoal",
        instead: "formação, stack, experiência e projetos"
      },
      en: {
        reason: "this page is about his work, not his personal life",
        instead: "education, stack, experience and projects"
      }
    },
    {
      id: "opiniao",
      match: {
        pt: /\b(acha\s+(de|do|da|sobre)|opini[aã]o|prefere|melhor\s+linguagem|pior\s+linguagem|odeia|detesta|o\s+que\s+pensa\s+sobre|recomenda)/i,
        en: /\b(what\s+does\s+he\s+think|opinion|prefers?|best\s+language|worst\s+language|hates|dislikes|recommends?)/i
      },
      pt: {
        reason: "não tenho opinião dele registrada aqui, e inventar uma seria colocar palavra na boca de alguém",
        instead: "o que ele usa de fato: a stack e os projetos"
      },
      en: {
        reason: "no opinion of his is recorded here, and inventing one would put words in someone's mouth",
        instead: "what he actually uses: the stack and the projects"
      }
    }
  ]
};
