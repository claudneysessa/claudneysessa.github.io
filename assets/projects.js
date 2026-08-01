/* ==========================================================================
   DADOS DO PORTFÓLIO — único arquivo que você edita para publicar projetos.
   Nada de HTML. As duas páginas (Portfolio e Monitor) leem daqui.

   COMO ADICIONAR UM PROJETO
   1. copie o modelo abaixo para dentro de "projects", trocando a chave
      "meu-projeto" pelo slug (o nome do repositório);
   2. coloque o print em assets/ e aponte "shot" para ele;
   3. inclua o slug em "slugs" de uma das categorias em "groups"
      (ou crie uma categoria nova com id/pt/en).
   As contagens ("3 projetos") e a introdução se ajustam sozinhas.

   MODELO — copie, cole e preencha:

    "meu-projeto": {
      "shot": "./assets/shot-meu-projeto.png",
      "media": "shot",  // "shot" (padrão, captura real) ou "logo" (biblioteca,
                        // que não tem tela): logo ganha placa clara e não é cortado
      "demoUrl": "#",   // null quando não há demo (biblioteca, ferramenta local);
                        // nesse caso apague "demoLabel" dos blocos pt/en
      "codeUrl": "#",
      "tags": {
        "pt": [".NET", "Integração"],
        "en": [".NET", "Integration"]
      },
      "pt": {
        "name": "Nome do projeto",
        "desc": "O que ele resolve, em uma ou duas frases.",
        "note": "Ressalva ou detalhe honesto (aparece como comentário).",
        "demoLabel": "demo"
      },
      "en": {
        "name": "Project name",
        "desc": "What it solves, in one or two sentences.",
        "note": "Caveat or honest detail (shown as a comment).",
        "demoLabel": "demo"
      }
    }

   Vírgula entre projetos, sem vírgula depois do último.
   ========================================================================== */

window.PF_PROJECTS = {
  "projects": {
    "in-browser-ai-chat": {
      "shot": "./assets/shots/shot-chat.webp",
      "demoUrl": "https://claudneysessa.github.io/in-browser-ai-chat/",
      "codeUrl": "https://github.com/claudneysessa/in-browser-ai-chat",
      "tags": {
        "pt": ["WebLLM", "WebGPU", "Qwen2.5 0.5B", "Next.js", "React"],
        "en": ["WebLLM", "WebGPU", "Qwen2.5 0.5B", "Next.js", "React"]
      },
      "pt": {
        "name": "IAí?",
        "desc": "Chat com um modelo de linguagem executado inteiramente no navegador. Conversas persistentes, pesquisa com citação de fontes e limpeza independente de histórico e de cache do modelo.",
        "note": "A versão completa do experimento.",
        "demoLabel": "demo"
      },
      "en": {
        "name": "IAí?",
        "desc": "Chat with a language model running entirely in the browser. Persistent conversations, search with source citation, and independent clearing of history and model cache.",
        "note": "The full version of the experiment.",
        "demoLabel": "demo"
      }
    },
    "pocket-browser-ai": {
      "shot": "./assets/shots/shot-pocket.webp",
      "demoUrl": "https://claudneysessa.github.io/pocket-browser-ai/",
      "codeUrl": "https://github.com/claudneysessa/pocket-browser-ai",
      "tags": {
        "pt": ["WebLLM", "WebGPU", "JavaScript puro", "Sem build"],
        "en": ["WebLLM", "WebGPU", "Vanilla JavaScript", "No build"]
      },
      "pt": {
        "name": "IA de Bolso",
        "desc": "O mesmo modelo e os mesmos parâmetros do IAí?, no mínimo irredutível: três arquivos estáticos, zero dependências instaláveis e nenhuma etapa de build.",
        "note": "O contraponto mínimo, para comparar o que a complexidade extra entrega.",
        "demoLabel": "demo"
      },
      "en": {
        "name": "IA de Bolso",
        "desc": "The same model and parameters as IAí?, reduced to the minimum: three static files, zero installable dependencies, no build step.",
        "note": "The minimal counterpoint, to compare what the extra complexity actually delivers.",
        "demoLabel": "demo"
      }
    },
    "libras-lab": {
      "shot": "./assets/shots/shot-libras.webp",
      "demoUrl": "https://claudneysessa.github.io/libras-lab/",
      "codeUrl": "https://github.com/claudneysessa/libras-lab",
      "tags": {
        "pt": ["Teachable Machine", "Classificação de imagem", "Processamento local", "Model Card"],
        "en": ["Teachable Machine", "Image classification", "Local processing", "Model Card"]
      },
      "pt": {
        "name": "Libras Lab",
        "desc": "Experimento que reconhece imagens estáticas de letras do alfabeto manual de Libras, com modelo treinado por mim no Teachable Machine sobre dataset público.",
        "note": "Baseline v0.1 — não é um tradutor de Libras. Libras envolve movimento, espaço, expressão facial e gramática própria.",
        "demoLabel": "demo"
      },
      "en": {
        "name": "Libras Lab",
        "desc": "Experiment that recognizes static images of Libras manual alphabet letters, with a model I trained in Teachable Machine on a public dataset.",
        "note": "Baseline v0.1 — not a Libras translator. Libras involves movement, space, facial expression and its own grammar.",
        "demoLabel": "demo"
      }
    },
    "cratebound": {
      "shot": "./assets/shots/shot-cratebound.webp",
      "demoUrl": "https://claudneysessa.github.io/cratebound/",
      "codeUrl": "https://github.com/claudneysessa/cratebound",
      "tags": {
        "pt": ["TensorFlow.js", "Webcam", "Controle por gestos", "Jogo"],
        "en": ["TensorFlow.js", "Webcam", "Gesture control", "Game"]
      },
      "pt": {
        "name": "Cratebound",
        "desc": "Jogo autoral de quebra-cabeça controlado por gestos captados pela webcam. Um experimento de Engenharia de Software com IA em que a visão computacional é a interface.",
        "note": "Controle sem teclado: a mão é o joystick.",
        "demoLabel": "jogar"
      },
      "en": {
        "name": "Cratebound",
        "desc": "Original puzzle game controlled by hand gestures captured through the webcam. A software engineering experiment where computer vision is the interface.",
        "note": "No keyboard: your hand is the joystick.",
        "demoLabel": "play"
      }
    },
    "vincupet": {
      "shot": "./assets/shots/shot-vincupet.webp",
      "demoUrl": "https://claudneysessa.github.io/vincupet/",
      "codeUrl": "https://github.com/claudneysessa/vincupet",
      "tags": {
        "pt": ["TensorFlow.js", "Recomendação", "Treino no navegador"],
        "en": ["TensorFlow.js", "Recommender", "In-browser training"]
      },
      "pt": {
        "name": "VincuPet",
        "desc": "Sistema de recomendação que cruza rotina, espaço e necessidades da família com o perfil de cada pet para apoiar uma adoção responsável, com compatibilidade explicável.",
        "note": "Evolução de uma base acadêmica de sistema de recomendação.",
        "demoLabel": "demo"
      },
      "en": {
        "name": "VincuPet",
        "desc": "Recommender system that matches family routine, space and real needs against each pet's profile to support responsible adoption, with explainable compatibility.",
        "note": "An evolution of an academic recommender-system baseline.",
        "demoLabel": "demo"
      }
    },
    "snakeia": {
      "shot": "./assets/shots/shot-snakeia.webp",
      "demoUrl": "https://claudneysessa.github.io/snakeia/",
      "codeUrl": "https://github.com/claudneysessa/snakeia",
      "tags": {
        "pt": ["TensorFlow.js", "Behavior cloning", "Web Worker", "Sem build"],
        "en": ["TensorFlow.js", "Behavior cloning", "Web Worker", "No build"]
      },
      "pt": {
        "name": "SnakeAI",
        "desc": "Snake escrito do zero em JavaScript, com uma rede neural que aprende a jogar imitando as suas partidas. Você joga, cada decisão vira dado, a rede treina em segundos e assume o controle.",
        "note": "A rede é treinada no seu navegador, não vem pronta: clique numa célula para mover a fruta e veja as três probabilidades mudarem antes de a cobra virar.",
        "demoLabel": "jogar"
      },
      "en": {
        "name": "SnakeAI",
        "desc": "Snake written from scratch in JavaScript, plus a neural network that learns to play by imitating your own matches. You play, every decision becomes data, the network trains in seconds and takes the controls.",
        "note": "The network is trained in your browser, not shipped pretrained: click a cell to move the fruit and watch the three probabilities change before the snake turns.",
        "demoLabel": "play"
      }
    },
    "local-token-monitor": {
      "shot": "./assets/shots/shot-tokenmonitor.webp",
      "demoUrl": null,
      "codeUrl": "https://github.com/claudneysessa/local-token-monitor",
      "tags": {
        "pt": ["Python", "Só biblioteca padrão", "Leitura local", "Claude Code"],
        "en": ["Python", "Standard library only", "Local-only", "Claude Code"]
      },
      "pt": {
        "name": "Local Token Monitor",
        "desc": "Painel que responde quando e em qual tarefa o consumo de tokens do Claude Code acontece, lendo os arquivos de sessão da própria máquina. Só biblioteca padrão: baixar um arquivo e rodar.",
        "note": "Sem demonstração pública, e de propósito: o painel lê o histórico de quem executa, então uma instância hospedada não teria dado nenhum."
      },
      "en": {
        "name": "Local Token Monitor",
        "desc": "Dashboard that answers when and on which task your Claude Code token usage happens, by reading the session files on your own machine. Standard library only: download one file and run it.",
        "note": "No public demo, by design: the dashboard reads the history of whoever runs it, so a hosted instance would have no data at all."
      }
    },
    "paygo_sdk": {
      "shot": "./assets/shots/logo-paygo.webp",
      "media": "logo",
      "demoUrl": null,
      "codeUrl": "https://github.com/claudneysessa/paygo_sdk",
      "tags": {
        "pt": ["Flutter", "Dart", "Android Intent", "MIT"],
        "en": ["Flutter", "Dart", "Android Intent", "MIT"]
      },
      "pt": {
        "name": "PayGO SDK",
        "desc": "Biblioteca Flutter que abstrai a comunicação por URI e Android Intent com o aplicativo PayGO Integrado. Quem integra trabalha com objetos e operações em Dart, em vez de montar cada mensagem do protocolo à mão.",
        "note": "Coautoria com Daniel Oliveira Souza, em parceria com a PayGo — o único da lista que não é solo. Biblioteca não tem tela: no lugar do print, a marca do projeto."
      },
      "en": {
        "name": "PayGO SDK",
        "desc": "Flutter library that abstracts URI and Android Intent communication with the PayGO Integrado app. You work with Dart objects and operations instead of assembling each protocol message by hand.",
        "note": "Co-authored with Daniel Oliveira Souza, in partnership with PayGo — the only one here that is not solo. A library has no screen: the project mark stands in for a screenshot."
      }
    }
  },
  "groups": [
    { "id": "llm", "slugs": ["in-browser-ai-chat", "pocket-browser-ai"], "pt": "Modelos de linguagem no navegador", "en": "Language models in the browser" },
    { "id": "cv", "slugs": ["libras-lab", "cratebound"], "pt": "Visão computacional no navegador", "en": "Computer vision in the browser" },
    { "id": "learn", "slugs": ["snakeia"], "pt": "Redes que aprendem no navegador", "en": "Networks that learn in the browser" },
    { "id": "rec", "slugs": ["vincupet"], "pt": "Recomendação e dados", "en": "Recommendation and data" },
    { "id": "tools", "slugs": ["local-token-monitor", "paygo_sdk"], "pt": "Ferramentas e bibliotecas", "en": "Tools and libraries" },
    { "id": "oss", "slugs": ["local-token-monitor"], "pt": "Open Source", "en": "Open Source" },
    { "id": "contrib", "slugs": ["paygo_sdk"], "pt": "Contribuições em Projetos", "en": "Project Contributions" }
  ]
  /* Um projeto pode aparecer em mais de um grupo — os grupos são recortes de
     leitura, não uma partição. Por isso o total conta slugs distintos: somar
     g.slugs.length contaria o repetido duas vezes. Ver content.js. */
};
