/* ==========================================================================
   BASE DE CONHECIMENTO DO ASSISTENTE

   É daqui que o assistente tira tudo o que ele sabe sobre Claudney. O modelo
   não lembra nada: ou o fato está escrito abaixo, ou ele não existe para a
   página, e o roteador recusa antes de o modelo rodar.

   ORIGEM: perfil escrito pelo próprio Claudney em 14/08/2026, entregue como
   "Claudney Sarti Sessa — perfil para IA local". O conteúdo dos blocos é o
   texto dele, quebrado por assunto para o roteador conseguir encontrar o
   pedaço certo. Nada foi acrescentado.

   NOTA DE DECISÃO — ERP e fiscal voltam a ser públicos.
   Em 31/07/2026 ERP, área fiscal brasileira e documentos eletrônicos foram
   retirados de todas as superfícies públicas por discrição profissional. O
   perfil entregue em 14/08/2026 os traz de volta, nomeando NF-e, NFS-e, CT-e,
   MDF-e, SPED e SINTEGRA, e Claudney confirmou a decisão. O invariante antigo
   fica revogado para esta base; o que continua valendo é a linha seguinte, que
   é dele: nada sobre informação interna de empresa, cliente ou sistema
   proprietário.

   FORMATO DE UM BLOCO

     {
       id: "identificador-estavel",
       topic: "assunto",
       pt: { title, text },
       en: { title, text },
       keywords: { pt: [...], en: [...] }
     }

   REGRAS PARA QUEM EDITAR

   1. Um bloco = um assunto. Bloco grande faz o assistente responder o que não
      foi perguntado; bloco pequeno demais nunca é encontrado.
   2. O texto do bloco é o teto do que pode ser dito.
   3. Nada de número, empresa, data ou cliente que não esteja escrito aqui.
   4. Paridade PT/EN obrigatória.
   5. Tudo aqui é público. Não existe "contexto só para o modelo se orientar".
   ========================================================================== */

window.PF_KNOWLEDGE = {
  source: "Perfil para IA local, escrito por Claudney Sarti Sessa em 2026-08-14",
  provisional: false,

  /* A frase exata que o próprio perfil manda usar quando a resposta não está
     na base. O roteador e o prompt usam esta string, e não uma paráfrase. */
  fallbackLine: {
    pt: "Essa informação não está neste perfil.",
    en: "That information is not in this profile."
  },

  blocks: [
    {
      id: "quem-e",
      topic: "identidade",
      pt: {
        title: "Quem é",
        text:
          "Claudney Sarti Sessa é Analista de Sistemas Sênior e trabalha com tecnologia desde 2000. " +
          "É formado em Sistemas de Informação, tem pós-graduações em Engenharia de Software e em " +
          "Ciência de Dados e Big Data Analytics, e atualmente estuda Engenharia de Software com IA Aplicada."
      },
      en: {
        title: "Who he is",
        text:
          "Claudney Sarti Sessa is a Senior Systems Analyst and has worked in technology since 2000. " +
          "He holds a degree in Information Systems, postgraduate degrees in Software Engineering and in " +
          "Data Science and Big Data Analytics, and is currently studying Software Engineering with Applied AI."
      },
      keywords: {
        pt: ["quem", "sobre", "apresenta", "experiencia", "anos", "desde quando", "senior", "analista", "formado", "carreira", "idade profissional"],
        en: ["who", "about", "introduce", "experience", "years", "since when", "senior", "analyst", "degree", "career"]
      }
    },

    {
      id: "perfil-pessoal-profissional",
      topic: "identidade",
      pt: {
        title: "Como ele se descreve",
        text:
          "Ele se considera apaixonado por tecnologia, curioso, autodidata e persistente. Gosta de " +
          "aprender, construir projetos e transformar problemas em soluções práticas."
      },
      en: {
        title: "How he describes himself",
        text:
          "He describes himself as passionate about technology, curious, self-taught and persistent. " +
          "He likes learning, building projects and turning problems into practical solutions."
      },
      keywords: {
        pt: ["como e ele", "personalidade", "perfil", "jeito", "autodidata", "curioso", "persistente", "apaixonado"],
        en: ["what is he like", "personality", "profile", "self-taught", "curious", "persistent", "passionate"]
      }
    },

    {
      id: "atuacao",
      topic: "trabalho",
      pt: {
        title: "Com o que ele trabalha",
        text:
          "A principal experiência profissional dele está no desenvolvimento e na manutenção de sistemas " +
          "empresariais. Trabalha com análise de requisitos, regras de negócio, bancos de dados, " +
          "integrações, aplicações desktop e aplicativos móveis."
      },
      en: {
        title: "What he works with",
        text:
          "His main professional experience is in developing and maintaining enterprise systems. He works " +
          "with requirements analysis, business rules, databases, integrations, desktop applications and " +
          "mobile apps."
      },
      keywords: {
        pt: ["faz o que", "atuacao", "sistemas empresariais", "requisitos", "regras de negocio", "integracao", "desktop", "mobile", "banco de dados"],
        en: ["what does he do", "enterprise systems", "requirements", "business rules", "integration", "desktop", "mobile", "database"]
      }
    },

    {
      id: "erp-fiscal",
      topic: "trabalho",
      pt: {
        title: "ERP e sistemas fiscais",
        text:
          "Ele tem grande experiência com ERP e sistemas fiscais brasileiros, incluindo NF-e, NFS-e, " +
          "CT-e, MDF-e, SPED e SINTEGRA."
      },
      en: {
        title: "ERP and tax systems",
        text:
          "He has extensive experience with ERP and Brazilian tax systems, including NF-e, NFS-e, CT-e, " +
          "MDF-e, SPED and SINTEGRA."
      },
      keywords: {
        pt: ["erp", "fiscal", "nota fiscal", "nfe", "nf-e", "nfse", "cte", "ct-e", "mdfe", "mdf-e", "sped", "sintegra", "tributario", "documento eletronico"],
        en: ["erp", "tax", "invoice", "e-invoicing", "nfe", "nf-e", "sped", "sintegra", "fiscal", "electronic document"]
      }
    },

    {
      id: "stack-principal",
      topic: "tecnologias",
      pt: {
        title: "Tecnologia principal",
        text: "Delphi e Object Pascal são as tecnologias com as quais ele tem mais experiência."
      },
      en: {
        title: "Main technology",
        text: "Delphi and Object Pascal are the technologies he has the most experience with."
      },
      keywords: {
        pt: ["delphi", "object pascal", "pascal", "tecnologia principal", "principal tecnologia", "tecnologia que mais", "mais experiencia", "principal"],
        en: ["delphi", "object pascal", "pascal", "main technology", "primary technology", "most experience", "main"]
      }
    },

    {
      id: "stack-demais",
      topic: "tecnologias",
      pt: {
        title: "Outras tecnologias",
        text:
          "Ao longo da carreira e dos projetos dele também usou Flutter e Dart, .NET e C#, JavaScript e " +
          "TypeScript, Python, HTML e CSS, Node.js e PHP, os bancos SQL Anywhere, SQL Server, Oracle, " +
          "PostgreSQL e MySQL, além de Docker, Git e GitHub."
      },
      en: {
        title: "Other technologies",
        text:
          "Across his career and projects he has also used Flutter and Dart, .NET and C#, JavaScript and " +
          "TypeScript, Python, HTML and CSS, Node.js and PHP, the databases SQL Anywhere, SQL Server, " +
          "Oracle, PostgreSQL and MySQL, plus Docker, Git and GitHub."
      },
      keywords: {
        pt: ["stack", "tecnologias", "linguagens", "flutter", "dart", "dotnet", ".net", "csharp", "javascript", "typescript", "python", "html", "css", "node", "php", "sql", "oracle", "postgres", "mysql", "docker", "git", "github", "banco"],
        en: ["stack", "technologies", "languages", "flutter", "dart", "dotnet", ".net", "csharp", "javascript", "typescript", "python", "html", "css", "node", "php", "sql", "oracle", "postgres", "mysql", "docker", "git", "github", "database"]
      }
    },

    {
      id: "estudos-ia",
      topic: "tecnologias",
      pt: {
        title: "O que ele estuda em IA",
        text:
          "Ele estuda inteligência artificial aplicada, modelos de linguagem locais, RAG, MCP, agentes, " +
          "WebLLM, WebGPU e TensorFlow.js."
      },
      en: {
        title: "What he studies in AI",
        text:
          "He studies applied artificial intelligence, local language models, RAG, MCP, agents, WebLLM, " +
          "WebGPU and TensorFlow.js."
      },
      keywords: {
        pt: ["estuda", "ia", "inteligencia artificial", "rag", "mcp", "agentes", "webllm", "webgpu", "tensorflow", "modelo local", "llm"],
        en: ["studies", "ai", "artificial intelligence", "rag", "mcp", "agents", "webllm", "webgpu", "tensorflow", "local model", "llm"]
      }
    },

    {
      id: "como-usa-ia",
      topic: "ia",
      pt: {
        title: "Como ele usa IA",
        text:
          "Ele usa a IA como apoio para estudar, programar, documentar, analisar problemas e experimentar " +
          "novas tecnologias. Para ele, a IA acelera o trabalho, mas a revisão e a responsabilidade " +
          "continuam sendo humanas. Uma frase que resume a visão dele: “Experiência não perde valor com a " +
          "IA — ela se multiplica.”"
      },
      en: {
        title: "How he uses AI",
        text:
          "He uses AI as support for studying, programming, documenting, analysing problems and trying out " +
          "new technologies. To him, AI speeds the work up, but review and responsibility remain human. A " +
          "sentence that sums up his view: “Experience does not lose value with AI — it multiplies.”"
      },
      keywords: {
        pt: ["como usa ia", "usa ia", "para que serve a ia", "visao sobre ia", "opiniao sobre ia", "acha da ia", "substituir", "responsabilidade"],
        en: ["how does he use ai", "uses ai", "view on ai", "opinion on ai", "think about ai", "replace", "responsibility"]
      }
    },

    {
      id: "ia-como-fonte",
      topic: "ia",
      pt: {
        title: "IA como fonte de fatos",
        text:
          "Ele acredita que um modelo de linguagem não deve ser tratado automaticamente como fonte de " +
          "fatos. Quando possível, prefere que a IA consulte informações verificáveis antes de responder."
      },
      en: {
        title: "AI as a source of facts",
        text:
          "He believes a language model should not automatically be treated as a source of facts. When " +
          "possible, he prefers that the AI look up verifiable information before answering."
      },
      keywords: {
        pt: ["fonte de fatos", "alucina", "confiar na ia", "verificavel", "consultar", "inventar"],
        en: ["source of facts", "hallucinate", "trust ai", "verifiable", "look up", "make up"]
      }
    },

    {
      id: "projetos",
      topic: "projetos",
      pt: {
        title: "Projetos",
        text:
          "Ele mantém projetos autorais, acadêmicos e experimentais no GitHub. Entre eles: SWAPI IA, uma " +
          "demonstração de IA que responde sobre Star Wars consultando dados reais; In-Browser AI Chat, " +
          "chat com modelo de linguagem executado localmente no navegador; Pocket Browser AI, experimento " +
          "compacto de IA no navegador; SnakeIA, jogo em que uma rede neural aprende observando as partidas " +
          "do usuário; Libras Lab, experimento educacional com classificação do alfabeto manual de Libras; " +
          "Cratebound, puzzle controlado por gestos no navegador; VincuPet, recomendador de compatibilidade " +
          "entre famílias e pets; Local Token Monitor, ferramenta local para visualizar o consumo de tokens; " +
          "CTX404, projeto para organizar e preservar o contexto técnico de repositórios; e PayGO SDK, " +
          "integração Flutter com o PayGO Integrado."
      },
      en: {
        title: "Projects",
        text:
          "He keeps personal, academic and experimental projects on GitHub. Among them: SWAPI IA, an AI demo " +
          "that answers Star Wars questions by querying real data; In-Browser AI Chat, a chat with a language " +
          "model running locally in the browser; Pocket Browser AI, a compact in-browser AI experiment; " +
          "SnakeIA, a game where a neural network learns by watching the player; Libras Lab, an educational " +
          "experiment classifying the Libras manual alphabet; Cratebound, a browser puzzle controlled by " +
          "gestures; VincuPet, a compatibility recommender between families and pets; Local Token Monitor, a " +
          "local tool for seeing token usage; CTX404, a project for organising and preserving the technical " +
          "context of repositories; and PayGO SDK, a Flutter integration with PayGO Integrado."
      },
      keywords: {
        pt: ["projetos", "portfolio", "github", "criou", "fez", "swapi", "snakeia", "libras", "cratebound", "vincupet", "token monitor", "ctx404", "paygo", "pocket", "in-browser"],
        en: ["projects", "portfolio", "github", "created", "built", "swapi", "snakeia", "libras", "cratebound", "vincupet", "token monitor", "ctx404", "paygo", "pocket", "in-browser"]
      }
    },

    {
      id: "natureza-dos-projetos",
      topic: "projetos",
      pt: {
        title: "O que os projetos são",
        text:
          "Alguns desses projetos são estudos ou provas de conceito. Eles demonstram aprendizado e " +
          "experimentação, não necessariamente produtos comerciais."
      },
      en: {
        title: "What the projects are",
        text:
          "Some of these projects are studies or proofs of concept. They show learning and experimentation, " +
          "not necessarily commercial products."
      },
      keywords: {
        pt: ["produto", "comercial", "prova de conceito", "estudo", "experimento", "sao profissionais"],
        en: ["product", "commercial", "proof of concept", "study", "experiment", "are they professional"]
      }
    },

    {
      id: "gostos",
      topic: "interesses",
      pt: {
        title: "Do que ele gosta",
        text:
          "Ele gosta de tecnologia, leitura, videogames, skate e música. Também gosta de Star Wars, Indiana " +
          "Jones, Harry Potter, Marvel, DC e animes. O gosto musical inclui música clássica, psytrance e " +
          "heavy metal. Esses interesses às vezes viram temas para os experimentos técnicos dele."
      },
      en: {
        title: "What he likes",
        text:
          "He likes technology, reading, video games, skateboarding and music. He is also into Star Wars, " +
          "Indiana Jones, Harry Potter, Marvel, DC and anime. His taste in music includes classical, " +
          "psytrance and heavy metal. These interests sometimes become themes for his technical experiments."
      },
      keywords: {
        pt: ["gosta", "hobby", "hobbies", "musica", "filme", "filmes", "serie", "games", "videogame", "skate", "star wars", "marvel", "anime", "leitura", "interesses"],
        en: ["likes", "hobby", "hobbies", "music", "movie", "movies", "series", "games", "video games", "skate", "star wars", "marvel", "anime", "reading", "interests"]
      }
    },

    {
      id: "contato",
      topic: "contato",
      pt: {
        title: "Onde conhecer o trabalho dele",
        text:
          "No GitHub em github.com/claudneysessa, no LinkedIn em linkedin.com/in/claudneysessa e no " +
          "portfólio em claudneysessa.github.io. Para contato profissional, o caminho é o LinkedIn, o " +
          "GitHub ou o portfólio."
      },
      en: {
        title: "Where to see his work",
        text:
          "On GitHub at github.com/claudneysessa, on LinkedIn at linkedin.com/in/claudneysessa and on his " +
          "portfolio at claudneysessa.github.io. For professional contact, the way in is LinkedIn, GitHub " +
          "or the portfolio."
      },
      keywords: {
        pt: ["contato", "contatar", "falar", "falo", "conversar", "chamar", "linkedin", "github", "portfolio", "site", "onde ver", "encontrar", "trabalho dele"],
        en: ["contact", "reach", "talk", "speak", "hire", "linkedin", "github", "portfolio", "site", "where to see", "find", "his work"]
      }
    }
  ],

  /* ------------------------------------------------------------------------
     O QUE ESTA BASE NÃO RESPONDE

     As quatro primeiras entradas são as próprias regras do perfil entregue por
     Claudney: nada de dado pessoal, família, salário, saúde, política, religião
     ou assunto jurídico, e nada de informação interna de empresa, cliente ou
     sistema proprietário.

     Cada uma devolve um motivo específico e o que existe no lugar. "Não sei"
     genérico faz o visitante achar que a página quebrou, e um modelo de 0,5B
     solto numa pergunta dessas inventa com naturalidade.
     ------------------------------------------------------------------------ */
  outOfScope: [
    {
      id: "interno-de-empresa",
      match: {
        pt: /\b(cliente\w*|empresa\s+onde|onde\s+(ele\s+)?trabalha|empregador\w*|sistema\s+propriet|c[oó]digo\s+da\s+empresa|projeto\s+interno|contrato\w*)/i,
        en: /\b(clients?|company\s+where|where\s+does\s+he\s+work|employer\w*|proprietary\s+system|company\s+code|internal\s+project|contracts?)/i
      },
      pt: {
        reason: "não falo sobre informação interna de empresa, cliente ou sistema proprietário",
        instead: "a experiência dele em ERP e sistemas fiscais, a stack e os projetos públicos"
      },
      en: {
        reason: "I do not talk about internal company, client or proprietary system information",
        instead: "his experience in ERP and tax systems, the stack and the public projects"
      }
    },
    {
      id: "remuneracao",
      match: {
        pt: /\b(sal[aá]rio\w*|quanto\s+(ele\s+)?(ganha|custa|cobra)|remunera\w*|pretens[aã]o|valor\s+da\s+hora|pre[cç]o\w*|or[cç]amento\w*|hora\s+t[eé]cnica)/i,
        en: /\b(salary|salaries|how\s+much\s+does\s+he\s+(earn|charge|cost)|hourly\s+rate|compensation|day\s+rate|price|quote|budget)/i
      },
      pt: {
        reason: "salário e valores não estão neste perfil",
        instead: "falar com ele pelo LinkedIn, pelo GitHub ou pelo portfólio"
      },
      en: {
        reason: "salary and rates are not in this profile",
        instead: "reaching him on LinkedIn, GitHub or the portfolio"
      }
    },
    {
      id: "pessoal-sensivel",
      match: {
        pt: /\b(idade|quantos\s+anos\s+(ele\s+)?tem|casad\w*|solteir\w*|filho\w*|fam[ií]lia|mora\s+(onde|em)|endere[cç]o|telefone|sa[uú]de|doen[cç]a|religi\w*|pol[ií]tic\w*|partido|vota|advogad\w*|processo\s+judicial|jur[ií]dic\w*|namorad\w*|esposa|marido)/i,
        en: /\b(how\s+old|his\s+age|married|single|children|kids|family|lives\s+(where|in)|address|phone\s+number|health|illness|religio\w*|politic\w*|votes?|lawyer|lawsuit|legal\s+matter|wife|husband|girlfriend|boyfriend)/i
      },
      pt: {
        reason: "não respondo sobre dados pessoais, família, saúde, política, religião ou assunto jurídico",
        instead: "a formação, a experiência, as tecnologias e os projetos dele"
      },
      en: {
        reason: "I do not answer about personal data, family, health, politics, religion or legal matters",
        instead: "his education, experience, technologies and projects"
      }
    },
    {
      id: "falar-por-ele",
      match: {
        pt: /\b(ele\s+(aceita|topa|pode|faria|assume|se\s+compromete)|contrat[ao]\s+ele|fecha\s+comigo|voc[eê]\s+garante|prometo|em\s+nome\s+dele)/i,
        en: /\b(will\s+he\s+(accept|do|take|commit)|can\s+i\s+hire|do\s+you\s+guarantee|on\s+his\s+behalf|promise)/i
      },
      pt: {
        reason: "não falo em nome de Claudney nem assumo compromissos por ele",
        instead: "falar direto com ele pelo LinkedIn ou pelo GitHub"
      },
      en: {
        reason: "I do not speak for Claudney or make commitments on his behalf",
        instead: "talking to him directly on LinkedIn or GitHub"
      }
    }
  ]
};
