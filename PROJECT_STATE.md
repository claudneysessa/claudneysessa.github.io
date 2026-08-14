# Estado atual — Site pessoal (claudneysessa.github.io)

Última revisão: 2026-08-14.

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
- **01/08/2026 — entrada do Gemini Video, em um grupo novo "MCP e skills para
  agentes"** (6 grupos, 9 projetos). Card de logotipo com a marca do Gemini: dois
  servidores MCP e um comando não têm tela para capturar. Conferido nos dois
  idiomas em Chrome headless, local e depois na URL pública.
  A intro foi reescrita nos dois idiomas outra vez: ela afirmava que **nenhum
  dado sai do dispositivo**, e o Gemini Video envia o vídeo para a API do Google.
  O fio condutor passou a ser "nada passa por servidor meu", que continua
  verdadeiro para os nove, com a ressalva de que cada projeto declara se o
  processamento é local ou se fala direto com um serviço usando a chave de quem
  usa.

- **01/08/2026 — entrada do Medina Trainer, primeiro trabalho de cliente**
  (10 projetos, 9 grupos, grupo novo "Trabalho para clientes"). Duas capacidades
  novas na camada de dados, ambas com o verificador exercitado contra os casos
  que ele **deve** reprovar (`codeUrl` com `"#"`, chave `codeUrl` ausente,
  `plate` em card de captura, `demoUrl` e `codeUrl` nulos ao mesmo tempo — todos
  reprovaram):
  - `codeUrl: null` para código fechado. O card mostra só o link do site.
  - `plate: "dark"` para logotipo com partes brancas, que somem na placa clara.
  A intro caiu pela terceira vez: "todos têm código aberto" e o alcance de "nada
  passa por servidor meu" não sobrevivem a um sistema de cliente hospedado. A
  solução foi estreitar o escopo — o fio condutor passa a valer para os
  experimentos, e a exceção é nomeada na própria intro.

- **02/08/2026 — entrada do CTX404** (11 projetos, 10 grupos). Categoria nova
  `Skills de IA` / `AI skills`, com presença adicional em `Open Source`.
  O card usa uma captura real da landing, mantém paridade PT/EN e declara com
  honestidade que a orientação de delegação não garante roteamento perfeito nem
  economia automática de tokens.

- **02/08/2026 — entrada do swapi-ia** (12 projetos, 10 grupos). Terceiro card do
  grupo `Modelos de linguagem no navegador`, depois do IAí? e da IA de Bolso: o
  mesmo modelo, agora com uma ferramenta. Captura real da abertura, feita na URL
  pública e recortada para tirar abas, favoritos e barra de tarefas. A intro **não**
  mudou: processamento no dispositivo, código aberto, demo ao vivo e conversa
  direta com um serviço público — nada que o fio condutor atual não cubra. Conferido
  nos dois idiomas nas duas páginas, local e depois na URL pública.

- **14/08/2026 — entrada de cinco projetos de uma vez** (17 projetos, 11 grupos).
  Grupo novo `Jogos` / `Games` com BomberHero e One Shot Bird; MyOpenPins em
  `Ferramentas e bibliotecas` e em `Open Source`; os dois forks Flutter em
  `Contribuições em Projetos`, ao lado do PayGO SDK.
  Três decisões que valem registro:
  - **Os três projetos gerados por IA dizem isso no card.** BomberHero, One Shot
    Bird e MyOpenPins foram feitos com OpenCode e o modelo DeepSeek v4 Flash
    (FREE), e a nota de cada um declara isso. Não é ressalva, é procedência.
  - **Fork tem dono, e o card nomeia.** Flutter UI Challenges é de Damodar Lohani
    sob MIT; Flutter Playground é de Bhavik Makwana sob BSD 2-Clause. O card diz
    o nome, a licença original, e que o trabalho aqui é a revivência.
  - **A intro caiu pela quarta vez.** Ela dizia que a única exceção ao fio
    condutor era o sistema de cliente, de código fechado. Com dois forks na
    lista isso deixou de ser verdade, e `introC` passou a nomear as duas
    exceções nos dois idiomas. O padrão se repete: a intro envelhece toda vez
    que entra projeto de natureza nova, e estreitar o escopo tem funcionado
    melhor do que procurar uma frase que caiba em tudo.

- **14/08/2026 — responsividade medida e corrigida, com o desktop intocado.**
  O layout já nascia em uma coluna abaixo de 900px, então o trabalho foi achar o
  que de fato quebrava e corrigir só isso:
  - Único overflow horizontal da página: o `.prompt` em `nowrap` estourando 11px
    a 320px. Abaixo de 359px ele agora quebra linha.
  - A captura de 260px fixos ao lado do texto deixava sobra morta no telefone.
    Abaixo de 600px ela ocupa a linha inteira.
  - **O CRT escondia o `./abrir_portfolio` no celular.** A caixa de 100vh com
    rolagem interna empurrava o botão para baixo da dobra de um scroll aninhado,
    que ninguém tenta porque nada indica que aquela região rola. Abaixo de 700px
    a página rola inteira. A 390px o conteúdo tem 1118px e aparece todo.
  - 44 links e botões tinham menos de 40px de altura. A regra usa
    `(pointer: coarse)`, não largura, para que notebook com tela sensível ao
    toque também ganhe o alvo maior. Medido de novo com ponteiro grosso
    emulado: **0 alvos abaixo de 40px** nas duas páginas.
  - Renderização em 1400px idêntica pixel a pixel antes e depois, tirando um
    quadro do cursor piscando.

## Não validado

- Comportamento em aparelho real. A largura de celular já é medível sem CDP —
  ver a receita abaixo — mas gesto, teclado virtual, barra de endereço que
  aparece e some e `100vh` no Safari do iPhone continuam não verificados.
- Comportamento em navegadores além do Chrome.

## Pendências

- `og:image` — precisa de imagem real; hoje o card de compartilhamento é texto.
- Bloco `$ cat experience.log` — só compensa com dado que a bio ainda não diz
  (empresa, período, escala).
- Migração gradual dos demais repositórios para `projects.js`.

## Receita — medir largura de celular sem CDP

O Chrome headless não desce abaixo de ~485px de layout, então
`--window-size=390` produz um **recorte** de um layout de 485: parece texto
cortado e não é. A saída é não medir a janela, e sim um `<iframe>` de 390px
dentro dela — o iframe tem o próprio viewport, sem piso.

Para **medir**, uma página descartável que abre o site em iframes de várias
larguras e compara `documentElement.clientWidth` com `scrollWidth`, lida com
`--dump-dom`. O mesmo laço já conta alvos de toque com menos de 40px de altura.

Para **ver**, um HTML de uma linha com `<iframe src="./index.html" width=390>`
e altura suficiente para a página inteira, capturado com `--screenshot`.

Para exercitar as regras de `(pointer: coarse)` sem aparelho, some ao Chrome:

```text
--touch-events=enabled
--blink-settings=primaryPointerType=2,availablePointerTypes=4
```

Sem isso o headless se declara ponteiro fino e o bloco de toque nunca entra —
a medição passa a mentir por omissão. As páginas descartáveis ficam fora do
Git: são ferramenta de medição, não conteúdo do site.

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
