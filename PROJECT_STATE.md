# Estado atual — Site pessoal (claudneysessa.github.io)

Última revisão: 2026-08-01.

## Identidade

- Pasta: `E:\GitHub\projects\claudneysessa.github.io`
- Repositório: `claudneysessa/claudneysessa.github.io`
- Site: https://claudneysessa.github.io/
- Branch: `main`

## O que é

Portfólio estático bilíngue com estética de terminal, em duas páginas sobre a
mesma camada de dados:

- `index.html` — página principal. Perfil à esquerda, projetos com rolagem à
  direita, rolagens independentes em telas ≥900px.
- `monitor.html` — versão animada. Monitor CRT que digita o comando, dá Enter e
  revela o perfil. Alcançada pelo botão pulsante `▶ animated version`.

Sem build, sem framework, sem dependência externa em runtime.

## Arquitetura de conteúdo

**Conteúdo é dado, nunca HTML.**

- `assets/projects.js` — projetos e grupos. Único arquivo a editar para publicar
  um projeto novo. Contagens, intro e `ctaHint` derivam daqui.
  `demoUrl: null` marca projeto sem demo por natureza — biblioteca ou ferramenta
  local. A chave tem que existir: `null` é opt-out declarado, ausência é
  esquecimento, e o verificador separa os dois casos. Nesses projetos não há
  `demoLabel` e o card renderiza só o link de código.
  `media` escolhe a mídia do card: `"shot"` (padrão, captura real, recortada com
  `object-fit: cover`) ou `"logo"` (biblioteca, que não tem tela — placa clara
  `.shot--logo` e `contain`, para a marca caber inteira e não ser recortada). O
  `alt` acompanha: `altPrefix` para captura, `logoAltPrefix` para logotipo.
- `assets/content.js` — textos de perfil, rótulos e links, em PT e EN; monta
  `PF_CONTENT` e deriva bios corridas, intro e contagens com singular/plural.
- `assets/lang.js` — idioma: `?lang=` → `localStorage` → inglês.
- `assets/portfolio.js` / `assets/monitor.js` — render de cada página.

## Estado validado

- `node .claude/skills/portfolio/scripts/check.mjs` aprovado: 8 projetos em 5
  grupos, paridade PT/EN, prints presentes, ids conferidos nas duas páginas,
  nenhuma referência quebrada.
- Verificador exercitado contra 5 casos que ele **deve** reprovar (`demoUrl` com
  `"#"`, chave `demoUrl` ausente, `demoLabel` sem `demoUrl`, `codeUrl` vazia,
  print inexistente no disco). Todos reprovaram: a folga para `null` não afrouxou
  a validação.
- Camada de dados executada em Node: contagens derivadas corretas, incluindo
  singular e plural.
- As 13 URLs de demo e código verificadas com HTTP 200.
- Servidor local entregando as duas páginas e todos os assets com content-type
  correto.
- Fonte JetBrains Mono self-hosted (31 KB, um arquivo para os dois pesos).
- Prints convertidos para WebP a 800px: 1,6 MB → 132 KB.

- **Conferido no navegador por Claudney em 31/07/2026**: página principal e
  Monitor. O Monitor é alcançado pelo botão `▶ animated version` da barra, a
  sequência de boot roda e a página se comporta normalmente.

- **01/08/2026 — entrada de SnakeAI, Local Token Monitor e PayGO SDK.** As duas
  páginas conferidas nos dois idiomas em Chrome headless: 5 grupos na ordem
  certa, mídia nova carregando, e os dois projetos sem demo mostrando só o link
  de código. A intro e o `ctaHint` foram reescritos nos dois idiomas porque
  "todos têm demonstração ao vivo" e "rodam no seu navegador" deixaram de ser
  verdade com um projeto Python local; "projetos autorais" saiu porque o PayGO
  SDK é coautoria.
- **Sem overflow horizontal**, medido em 01/08/2026: `clientWidth` igual a
  `scrollWidth` a 485px, 669px e 1384px de layout.

## Não validado

- Responsividade em largura de celular real. O Chrome headless não desce abaixo
  de ~485px de layout, então `--window-size=390` produz um **recorte** de um
  layout de 485, não um layout de 390 — captura assim engana, parece texto
  cortado. Para valer, precisa de emulação de dispositivo via CDP ou de aparelho
  real.
- Comportamento em navegadores além do Chrome.

## Pendências

- `og:image` — precisa de imagem real; hoje o card de compartilhamento é texto.
- Bloco `$ cat experience.log` — só compensa com dado que a bio ainda não diz
  (empresa, período, escala).
- Migração gradual dos demais repositórios para `projects.js`.

## Não refazer

- **O Monitor não é a porta de entrada.** Avaliado e decidido por Claudney em
  31/07/2026: esperar a digitação atrapalha quem chega com pressa, e o atrito na
  primeira dobra custa mais que o efeito rende. `index.html` segue sendo o
  portfólio; o CRT continua opcional, atrás do botão `▶ animated version`.

- Não voltar ao Jekyll: sem Ruby na máquina, não daria para pré-visualizar antes
  de publicar, e este repositório publica na hora.
- Não reintroduzir dependência externa em runtime (Google Fonts, shields.io,
  github-readme-stats).
- Não adensar o overlay CRT nem trazer de volta a vinheta radial: reprovados por
  prejudicarem a leitura.
- Não usar `background-image` para os prints: precisa de `alt`.
- `handoff/` fica fora do Git por decisão de 31/07/2026 — é material de trabalho.
  Existe apenas na máquina local.
