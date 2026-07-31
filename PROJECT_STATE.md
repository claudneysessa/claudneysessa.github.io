# Estado atual — Site pessoal (claudneysessa.github.io)

Última revisão: 2026-07-31.

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
- `assets/content.js` — textos de perfil, rótulos e links, em PT e EN; monta
  `PF_CONTENT` e deriva bios corridas, intro e contagens com singular/plural.
- `assets/lang.js` — idioma: `?lang=` → `localStorage` → inglês.
- `assets/portfolio.js` / `assets/monitor.js` — render de cada página.

## Estado validado

- `node .claude/skills/portfolio/scripts/check.mjs` aprovado: 5 projetos em 3
  grupos, paridade PT/EN, prints presentes, ids conferidos nas duas páginas,
  nenhuma referência quebrada.
- Camada de dados executada em Node: contagens derivadas corretas, incluindo
  singular e plural.
- As 10 URLs de demo e código verificadas com HTTP 200.
- Servidor local entregando as duas páginas e todos os assets com content-type
  correto.
- Fonte JetBrains Mono self-hosted (31 KB, um arquivo para os dois pesos).
- Prints convertidos para WebP a 800px: 1,6 MB → 132 KB.

- **Conferido no navegador por Claudney em 31/07/2026**: página principal e
  Monitor. O Monitor é alcançado pelo botão `▶ animated version` da barra, a
  sequência de boot roda e a página se comporta normalmente.

## Não validado

- Responsividade nas três larguras exigidas pelo padrão da raiz.
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
