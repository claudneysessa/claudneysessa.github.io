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
      "demoUrl": "#",
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
    }
  },
  "groups": [
    { "id": "llm", "slugs": ["in-browser-ai-chat", "pocket-browser-ai"], "pt": "Modelos de linguagem no navegador", "en": "Language models in the browser" },
    { "id": "cv", "slugs": ["libras-lab", "cratebound"], "pt": "Visão computacional no navegador", "en": "Computer vision in the browser" },
    { "id": "rec", "slugs": ["vincupet"], "pt": "Recomendação e dados", "en": "Recommendation and data" }
  ]
};
