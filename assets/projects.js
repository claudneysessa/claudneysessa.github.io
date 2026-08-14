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
    "swapi-ia": {
      "shot": "./assets/shots/shot-swapi.webp",
      "demoUrl": "https://claudneysessa.github.io/swapi-ia/",
      "codeUrl": "https://github.com/claudneysessa/swapi-ia",
      "tags": {
        "pt": ["WebLLM", "WebGPU", "SWAPI", "Sem build"],
        "en": ["WebLLM", "WebGPU", "SWAPI", "No build"]
      },
      "pt": {
        "name": "swapi-ia",
        "desc": "O mesmo modelo da IA de Bolso, agora com uma ferramenta: um roteador determinístico consulta a SWAPI, o código desenha os valores exatos e o modelo só escreve a frase em volta.",
        "note": "Quando a API não guarda a relação pedida, ele recusa e diz o que existe no lugar.",
        "demoLabel": "demo"
      },
      "en": {
        "name": "swapi-ia",
        "desc": "The same model as IA de Bolso, now with a tool: a deterministic router queries SWAPI, the code renders the exact values, and the model only writes the sentence around them.",
        "note": "When the API does not hold the requested relation, it refuses and says what exists instead.",
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
        "pt": ["Python", "Só biblioteca padrão", "Leitura local", "Docker", "Claude Code"],
        "en": ["Python", "Standard library only", "Local-only", "Docker", "Claude Code"]
      },
      "pt": {
        "name": "Local Token Monitor",
        "desc": "Painel que responde quando e em qual tarefa o consumo de tokens do Claude Code acontece, lendo os arquivos de sessão da própria máquina. Duas telas na mesma porta: um HUD escuro de cockpit que atualiza a cada dois segundos, e o painel de trabalho com calendário do mês e atribuição por tarefa pelo título real da sessão. Só biblioteca padrão: baixar um arquivo e rodar, ou subir em Docker e acompanhar do tablet pelo IP da rede local.",
        "note": "Sem demonstração pública, e de propósito: o painel lê o histórico de quem executa, então uma instância hospedada não teria dado nenhum. Nada sai do disco — sem proxy, sem chave de API, sem conta, sem uma única requisição de rede."
      },
      "en": {
        "name": "Local Token Monitor",
        "desc": "Dashboard that answers when and on which task your Claude Code token usage happens, by reading the session files on your own machine. Two screens on the same port: a dark cockpit HUD that refreshes every two seconds, and the working dashboard with a monthly calendar and per-task attribution by the session's real title. Standard library only: download one file and run it, or bring it up in Docker and watch from a tablet over your local network.",
        "note": "No public demo, by design: the dashboard reads the history of whoever runs it, so a hosted instance would have no data at all. Nothing leaves your disk — no proxy, no API key, no account, not a single network request."
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
    },
    "mcp-gemini-video": {
      "shot": "./assets/shots/logo-gemini.webp",
      "media": "logo",
      "demoUrl": null,
      "codeUrl": "https://github.com/claudneysessa/mcp-gemini-video",
      "tags": {
        "pt": ["MCP", "Python", "Google Gemini", "Docker", "Claude Code"],
        "en": ["MCP", "Python", "Google Gemini", "Docker", "Claude Code"]
      },
      "pt": {
        "name": "Gemini Video",
        "desc": "Três formas independentes de transformar um vídeo do seu disco em relatório escrito: servidor MCP em stdio, servidor MCP em container por SSE e uma skill autocontida do Claude Code. Escolhe-se uma, e as três gravam o mesmo .md ao lado do vídeo, com transcrição do áudio, descrição das telas e resumo funcional.",
        "note": "Sem demonstração: são dois servidores MCP e um comando, sem tela para capturar — no lugar do print, a marca do Gemini. É também o único projeto daqui que depende de serviço externo: o vídeo sobe para a API do Google com a sua chave, e o README diz isso na primeira seção."
      },
      "en": {
        "name": "Gemini Video",
        "desc": "Three independent ways to turn a video on your disk into a written report: an MCP server over stdio, an MCP server in a container over SSE, and a self-contained Claude Code skill. You pick one, and all three write the same .md next to the video, with the audio transcript, a description of the screens and a functional summary.",
        "note": "No demo: two MCP servers and a command, with no screen to capture — the Gemini mark stands in for a screenshot. It is also the only project here that depends on an external service: the video is uploaded to Google's API with your own key, and the README says so in its first section."
      }
    },
    "ctx404": {
      "shot": "./assets/shots/shot-ctx404.webp",
      "demoUrl": "https://claudneysessa.github.io/ctx404/",
      "codeUrl": "https://github.com/claudneysessa/ctx404",
      "tags": {
        "pt": ["Claude Code", "Skill", "Python", "Git", "Open Source"],
        "en": ["Claude Code", "Skill", "Python", "Git", "Open Source"]
      },
      "pt": {
        "name": "CTX404",
        "desc": "Skill open source que prepara repositórios novos com governança local e um sistema de contexto compacto, indexado e versionável, projetado para sobreviver à troca de chats e máquinas.",
        "note": "Beta público: orienta a delegação de tarefas triviais para modelos mais baratos, mas não promete roteamento perfeito nem economia automática de tokens. Sem mágica. Ainda.",
        "demoLabel": "entenda"
      },
      "en": {
        "name": "CTX404",
        "desc": "Open-source skill that bootstraps new repositories with project-local governance and a compact, indexed, versionable context system designed to survive changing chats and machines.",
        "note": "Public beta: it guides delegation of trivial work to cheaper models, but does not promise perfect routing or automatic token savings. No magic. Yet.",
        "demoLabel": "explore"
      }
    },
    "bomber-hero": {
      "shot": "./assets/shots/shot-bomber-hero.webp",
      "demoUrl": "https://claudneysessa.github.io/bomber-hero/",
      "codeUrl": "https://github.com/claudneysessa/bomber-hero",
      "tags": {
        "pt": ["HTML5 Canvas", "JavaScript puro", "Godot 4", "GDScript", "Sem build"],
        "en": ["HTML5 Canvas", "Vanilla JavaScript", "Godot 4", "GDScript", "No build"]
      },
      "pt": {
        "name": "BomberHero",
        "desc": "Releitura do jogo de bombas do SNES em que a arma escolhida muda a fase: faca, espada e pistola ferem monstros mas não quebram blocos, e só a bomba faz as duas coisas — de quebra queimando o item que você ia pegar. Fases procedurais infinitas, e o chefe a cada três fases é também o checkpoint. Existe duas vezes, em Canvas e em Godot, sem nenhuma dependência: cada sprite é desenhado por código e cada som é sintetizado na hora.",
        "note": "Código, documentação e commits gerados inteiramente com o OpenCode e o modelo DeepSeek v4 Flash (FREE). O texto do jogo só existe em português.",
        "demoLabel": "jogar"
      },
      "en": {
        "name": "BomberHero",
        "desc": "A reinterpretation of the SNES bomb game where the weapon you pick changes the level: knife, sword and pistol hurt monsters but never break blocks, and only the bomb does both — while burning the power-up you were about to collect. Levels are procedural and endless, and the boss every three levels is also the checkpoint. It exists twice, in Canvas and in Godot, with no dependency at all: every sprite is drawn by code and every sound is synthesized at runtime.",
        "note": "Code, documentation and commits generated entirely with OpenCode and the DeepSeek v4 Flash (FREE) model. The in-game text is Portuguese only.",
        "demoLabel": "play"
      }
    },
    "one-shot-bird": {
      "shot": "./assets/shots/shot-one-shot-bird.webp",
      "demoUrl": null,
      "codeUrl": "https://github.com/claudneysessa/one-shot-bird",
      "tags": {
        "pt": ["Godot 4.7", "GDScript", "Física 2D", "Pixel art procedural"],
        "en": ["Godot 4.7", "GDScript", "2D physics", "Procedural pixel art"]
      },
      "pt": {
        "name": "One Shot Bird",
        "desc": "Jogo de estilingue em que nada é roteirizado: os pontos brancos da mira são a trajetória calculada pela mesma equação que o motor vai integrar, e derrubar a torre em cima do porco é uma forma legítima de vencer. Não há uma única imagem no repositório — cada sprite nasce de um mapa em texto convertido em textura quando o jogo abre.",
        "note": "Sem demonstração: o Godot exporta para HTML5, mas essa exportação ainda não está configurada, então roda com o Godot instalado. Feito inteiramente com o OpenCode e o modelo DeepSeek v4 Flash (FREE)."
      },
      "en": {
        "name": "One Shot Bird",
        "desc": "A slingshot game where nothing is scripted: the white aiming dots are the trajectory computed from the same equation the engine will integrate, and dropping the tower onto the pig is a legitimate way to win. There is not a single image in the repository — every sprite comes from a text map turned into a texture when the game starts.",
        "note": "No demo: Godot can export to HTML5, but that export is not set up yet, so it runs with Godot installed. Built entirely with OpenCode and the DeepSeek v4 Flash (FREE) model."
      }
    },
    "my-open-pins": {
      "shot": "./assets/shots/shot-my-open-pins.webp",
      "demoUrl": null,
      "codeUrl": "https://github.com/claudneysessa/my-open-pins",
      "tags": {
        "pt": ["C#", "WPF", ".NET 10", "SQLite", "Windows"],
        "en": ["C#", "WPF", ".NET 10", "SQLite", "Windows"]
      },
      "pt": {
        "name": "MyOpenPins",
        "desc": "Notas adesivas que ficam soltas na área de trabalho do Windows, controladas só pelo ícone na bandeja — não há janela principal. Portátil de verdade: o banco SQLite e as preferências vivem ao lado do executável, então copiar a pasta para um pendrive leva as notas junto, com cor, formatação, posição e tamanho intactos.",
        "note": "Sem demonstração: é um aplicativo de desktop Windows, não roda no navegador. Feito com o OpenCode e o modelo DeepSeek v4 Flash (FREE), e a interface só existe em português."
      },
      "en": {
        "name": "MyOpenPins",
        "desc": "Sticky notes floating on the Windows desktop, driven entirely from the tray icon — there is no main window. Genuinely portable: the SQLite database and the preferences live next to the executable, so copying the folder to a USB stick takes your notes with it, colors, formatting, position and size intact.",
        "note": "No demo: this is a Windows desktop application, it does not run in a browser. Built with OpenCode and the DeepSeek v4 Flash (FREE) model, and the interface is Portuguese only."
      }
    },
    "flutter-ui-challenges": {
      "shot": "./assets/shots/shot-flutter-ui-challenges.webp",
      "demoUrl": "https://claudneysessa.github.io/flutter-ui-challenges/",
      "codeUrl": "https://github.com/claudneysessa/flutter-ui-challenges",
      "tags": {
        "pt": ["Flutter 3.44", "Dart 3", "134 telas", "Fork mantido"],
        "en": ["Flutter 3.44", "Dart 3", "134 screens", "Maintained fork"]
      },
      "pt": {
        "name": "Flutter UI Challenges",
        "desc": "Catálogo de 134 telas de aplicativo reconstruídas em Flutter, navegáveis a partir de um app só, que também mostra o código-fonte da tela que você está olhando. O projeto original foi arquivado pelo autor em 2024 e não compilava mais; este fork o traz de volta para o Flutter 3.44 e o Dart 3.",
        "note": "Fork mantido do projeto de Damodar Lohani, com licença MIT e autoria originais preservadas. O trabalho aqui é a revivência: migração de toolchain, correções e testes.",
        "demoLabel": "demo"
      },
      "en": {
        "name": "Flutter UI Challenges",
        "desc": "A catalogue of 134 app screens rebuilt in Flutter, browsable from a single app that also shows you the source of whichever screen you are looking at. The original project was archived by its author in 2024 and no longer compiled; this fork brings it back on Flutter 3.44 and Dart 3.",
        "note": "Maintained fork of Damodar Lohani's project, keeping the original MIT license and authorship. The work here is the revival: toolchain migration, fixes and tests.",
        "demoLabel": "demo"
      }
    },
    "flutter-playground": {
      "shot": "./assets/shots/shot-flutter-playground.webp",
      "demoUrl": "https://claudneysessa.github.io/flutter-playground/",
      "codeUrl": "https://github.com/claudneysessa/flutter-playground",
      "tags": {
        "pt": ["Flutter 3.44", "Dart 3", "BSD-2", "Fork mantido"],
        "en": ["Flutter 3.44", "Dart 3", "BSD-2", "Maintained fork"]
      },
      "pt": {
        "name": "Flutter Playground",
        "desc": "Aplicativo-laboratório com exemplos isolados dos recursos do Flutter — barras, gavetas, animações, listas e transições — para experimentar cada um sem montar um projeto do zero. Parou de receber atualizações em 2021 e não compilava mais; este fork o traz de volta para o Flutter 3.44 e o Dart 3.",
        "note": "Fork mantido do projeto de Bhavik Makwana, com licença BSD 2-Clause e autoria originais preservadas. O trabalho aqui é a revivência, não a autoria original.",
        "demoLabel": "demo"
      },
      "en": {
        "name": "Flutter Playground",
        "desc": "A laboratory app with isolated examples of Flutter features — bars, drawers, animations, lists and transitions — so you can try each one without wiring up a project first. It stopped receiving updates in 2021 and no longer compiled; this fork brings it back on Flutter 3.44 and Dart 3.",
        "note": "Maintained fork of Bhavik Makwana's project, keeping the original BSD 2-Clause license and authorship. The work here is the revival, not the original authorship.",
        "demoLabel": "demo"
      }
    },
    "flutter_catalog": {
      "shot": "./assets/shots/shot-flutter-catalog.webp",
      "demoUrl": null,
      "codeUrl": "https://github.com/claudneysessa/flutter_catalog",
      "tags": {
        "pt": ["Flutter 3.44", "Dart 3", "115 exemplos", "Fork mantido"],
        "en": ["Flutter 3.44", "Dart 3", "115 examples", "Maintained fork"]
      },
      "pt": {
        "name": "Flutter Catalog",
        "desc": "Catálogo com 115 exemplos executáveis do Flutter em 20 grupos — widgets, layouts, listas, navegação, animações, gráficos, gerenciamento de estado, persistência, rede e Firebase. Cada tela tem uma aba Código que mostra o arquivo-fonte exato por trás dela, com realce de sintaxe e link para o arquivo no GitHub.",
        "note": "Fork mantido do projeto de X.Wei, com licença MIT e autoria originais preservadas. O trabalho aqui é a revivência para Flutter 3.44 e Dart 3. Sem demonstração: o app é Android e iOS, não tem versão web."
      },
      "en": {
        "name": "Flutter Catalog",
        "desc": "A catalogue of 115 runnable Flutter examples across 20 groups — widgets, layouts, lists, navigation, animations, charts, state management, persistence, networking and Firebase. Every screen has a Code tab showing the exact source file behind it, with syntax highlighting and a link to the file on GitHub.",
        "note": "Maintained fork of X.Wei's project, keeping the original MIT license and authorship. The work here is the revival on Flutter 3.44 and Dart 3. No demo: the app targets Android and iOS, with no web build."
      }
    },
    "medina-trainer": {
      "shot": "./assets/shots/logo-medina.webp",
      "media": "logo",
      "plate": "dark",
      "demoUrl": "https://medinatrainer.com.br/",
      "codeUrl": null,
      "tags": {
        "pt": ["PHP 8", "API REST", "JWT", "Docker", "MariaDB"],
        "en": ["PHP 8", "REST API", "JWT", "Docker", "MariaDB"]
      },
      "pt": {
        "name": "Medina Trainer",
        "desc": "Site e plataforma de gestão para um personal trainer: landing pública que o próprio professor edita, painel de administração com agenda, modalidades, matrículas e cobranças, e área do aluno com auto-agendamento que respeita vagas e conflitos de horário. Uma API PHP única atende as três áreas.",
        "note": "Trabalho entregue a cliente, publicado com autorização. O código é fechado: o card leva ao site no ar, não a um repositório — e a marca é do cliente, não uma captura.",
        "demoLabel": "site"
      },
      "en": {
        "name": "Medina Trainer",
        "desc": "Website and management platform for a personal trainer: a public landing page the trainer edits himself, an admin panel with schedule, class types, enrollments and billing, and a student area with self-booking that respects capacity and schedule conflicts. A single PHP API serves all three.",
        "note": "Client work, published with permission. The source is closed: the card links to the live site, not to a repository — and the image is the client's mark, not a screenshot.",
        "demoLabel": "site"
      }
    }
  },
  "groups": [
    { "id": "llm", "slugs": ["in-browser-ai-chat", "pocket-browser-ai", "swapi-ia"], "pt": "Modelos de linguagem no navegador", "en": "Language models in the browser" },
    { "id": "cv", "slugs": ["libras-lab", "cratebound"], "pt": "Visão computacional no navegador", "en": "Computer vision in the browser" },
    { "id": "learn", "slugs": ["snakeia"], "pt": "Redes que aprendem no navegador", "en": "Networks that learn in the browser" },
    { "id": "rec", "slugs": ["vincupet"], "pt": "Recomendação e dados", "en": "Recommendation and data" },
    { "id": "mcp", "slugs": ["mcp-gemini-video"], "pt": "MCP e skills para agentes", "en": "MCP servers and agent skills" },
    { "id": "ai-skills", "slugs": ["ctx404"], "pt": "Skills de IA", "en": "AI skills" },
    { "id": "games", "slugs": ["bomber-hero", "one-shot-bird"], "pt": "Jogos", "en": "Games" },
    { "id": "tools", "slugs": ["local-token-monitor", "my-open-pins", "paygo_sdk"], "pt": "Ferramentas e bibliotecas", "en": "Tools and libraries" },
    { "id": "client", "slugs": ["medina-trainer"], "pt": "Trabalho para clientes", "en": "Client work" },
    { "id": "oss", "slugs": ["local-token-monitor", "ctx404", "bomber-hero", "one-shot-bird", "my-open-pins"], "pt": "Open Source", "en": "Open Source" },
    { "id": "contrib", "slugs": ["paygo_sdk", "flutter-ui-challenges", "flutter-playground", "flutter_catalog"], "pt": "Contribuições em Projetos", "en": "Project Contributions" }
  ]
  /* Um projeto pode aparecer em mais de um grupo — os grupos são recortes de
     leitura, não uma partição. Por isso o total conta slugs distintos: somar
     g.slugs.length contaria o repetido duas vezes. Ver content.js. */
};
