/* Textos do portfólio + montagem do conteúdo final.
   Os PROJETOS ficam em projects.js (gerado pelo Editor.dc.html).
   Aqui só moram os textos de perfil/rótulos, em pt e en. */

(function () {
  var DATA = window.PF_PROJECTS || { projects: {}, groups: [] };
  var PROJECTS = DATA.projects;
  var GROUPS = DATA.groups;

  /* Links de contato. Ficam aqui, e não no HTML, para que trocar ou acrescentar
     um seja edição de dados. Mesma regra dos projetos: nada de mexer em markup. */
  var LINKS = [
    { short: "github", label: "github.com/claudneysessa", href: "https://github.com/claudneysessa" },
    { short: "linkedin", label: "linkedin.com/in/claudneysessa", href: "https://www.linkedin.com/in/claudneysessa/" },
    { short: "medium", label: "medium.com/@claudneysartisessa", href: "https://medium.com/@claudneysartisessa" },
    { short: "e-mail", label: "claudneysartisessa@gmail.com", href: "mailto:claudneysartisessa@gmail.com" }
  ];

  var TEXT = {
    pt: {
      profileTitle: "Perfil",
      animatedBtn: "versao animada",
      plainBtn: "SAIR DO CRT",
      crumbProfile: "perfil",
      cmd: "claudney_sarti_sessa --profile",
      loading: "carregando profile.md ...",
      replay: "REPLAY",
      roleBadges: ["Analista de Sistemas", "Sistemas corporativos", "IA aplicada"],
      bio1a: "Bacharel em Sistemas de Informação, com ",
      bio1b: "mais de 20 anos de experiência",
      bio1c: " em desenvolvimento de ",
      bio1d: "sistemas corporativos",
      bio1e: ". Sistemas que rodam em produção, com gente dependendo deles todos os dias.",
      bio2a: "Sou ",
      bio2b: "desenvolvedor sênior",
      bio2c: " e programo em ",
      bio2d: "Delphi, .NET, Flutter e JavaScript",
      bio2e: ", e atuo com ",
      bio2f: "IA aplicada e engenharia de prompts",
      bio2g: ". Os projetos ao lado são onde eu levo essa prática para o navegador — e onde mostro o raciocínio por trás da solução, não só o resultado.",
      skillsTitle: "Especialidades",
      skills: ["Sistemas corporativos", "Delphi", ".NET", "Flutter", "JavaScript", "IA aplicada", "Engenharia de prompts"],
      eduTitle: "Formação",
      education: [
        { course: "Eng. de Software com IA Aplicada", level: "pós · ", note: "em andamento" },
        { course: "Engenharia de Software", level: "pós", note: "" },
        { course: "Big Data e Analytics", level: "pós", note: "" },
        { course: "Sistemas de Informação", level: "bacharelado, FAESA", note: "" }
      ],
      linksTitle: "Onde me encontrar",
      portfolioTitle: "Portfólio",
      introA: "{n} projetos. Nos experimentos, o fio condutor é que ",
      introB: "nada passa por servidor meu",
      introC: " — o processamento acontece no seu dispositivo, ou você fala direto com o serviço usando a sua própria chave. A maioria tem código aberto e roda no navegador, com demonstração ao vivo. As exceções estão ditas no próprio card: um sistema entregue a cliente, de código fechado, e dois projetos que não nasceram meus — forks que voltei a manter, com o autor original nomeado.",
      codeLabel: "codigo",
      ctaTitle: "Quer conversar sobre tecnologias, sistemas e IA aplicada?",
      ctaSub: "Respondo por e-mail e LinkedIn em até um dia útil.",
      ctaBtn: "Enviar e-mail",
      openBtn: "abrir_portfolio",
      ctaHint: "{n} projetos, do experimento ao sistema entregue",
      countOne: "projeto",
      countMany: "projetos",
      altPrefix: "Captura de tela do projeto",
      logoAltPrefix: "Logotipo do projeto",
      pageTitle:
        "claudney_sarti_sessa — Desenvolvedor sênior · .NET, Flutter e JavaScript · IA aplicada"
    },
    en: {
      profileTitle: "Profile",
      animatedBtn: "animated version",
      plainBtn: "EXIT CRT",
      crumbProfile: "profile",
      cmd: "claudney_sarti_sessa --profile",
      loading: "loading profile.md ...",
      replay: "REPLAY",
      roleBadges: ["Systems Analyst", "Enterprise systems", "Applied AI"],
      bio1a: "Bachelor's in Information Systems, with ",
      bio1b: "over 20 years of experience",
      bio1c: " building ",
      bio1d: "enterprise systems",
      bio1e: ". Systems that run in production, with people depending on them every day.",
      bio2a: "I am ",
      bio2b: "a senior developer",
      bio2c: " and I program in ",
      bio2d: "Delphi, .NET, Flutter and JavaScript",
      bio2e: ", and I work with ",
      bio2f: "applied AI and prompt engineering",
      bio2g: ". The projects beside this are where I take that practice into the browser — and where I show the reasoning behind the solution, not just the result.",
      skillsTitle: "Specialties",
      skills: ["Enterprise systems", "Delphi", ".NET", "Flutter", "JavaScript", "Applied AI", "Prompt engineering"],
      eduTitle: "Education",
      education: [
        { course: "Software Eng. with Applied AI", level: "postgrad · ", note: "in progress" },
        { course: "Software Engineering", level: "postgrad", note: "" },
        { course: "Big Data and Analytics", level: "postgrad", note: "" },
        { course: "Information Systems", level: "BSc, FAESA", note: "" }
      ],
      linksTitle: "Where to find me",
      portfolioTitle: "Portfolio",
      introA: "{n} projects. Across the experiments, the common thread is that ",
      introB: "nothing goes through a server of mine",
      introC: " — the processing happens on your own device, or you talk straight to the service with your own key. Most are open source and run in the browser, with a live demo. The exceptions are stated on their own cards: a system delivered to a client, closed source, and two projects that did not start as mine — forks I brought back to life, with the original author named.",
      codeLabel: "code",
      ctaTitle: "Want to talk about technology, systems and applied AI?",
      ctaSub: "I reply by email and LinkedIn within one business day.",
      ctaBtn: "Send email",
      openBtn: "open_portfolio",
      ctaHint: "{n} projects, from experiment to delivered system",
      countOne: "project",
      countMany: "projects",
      altPrefix: "Screenshot of the",
      logoAltPrefix: "Logo of the",
      pageTitle:
        "claudney_sarti_sessa — Senior developer · .NET, Flutter, JavaScript · applied AI"
    }
  };

  function build(lang) {
    var t = {};
    for (var k in TEXT[lang]) t[k] = TEXT[lang][k];

    // bios em texto corrido, derivadas das mesmas partes usadas na versão com destaques
    t.bio1 = t.bio1a + t.bio1b + t.bio1c + t.bio1d + t.bio1e;
    t.bio2 = t.bio2a + t.bio2b + t.bio2c + t.bio2d + t.bio2e + t.bio2f + t.bio2g;

    // Contagens sempre derivadas da lista de projetos. Slugs DISTINTOS: um
    // projeto pode estar em mais de um grupo (os grupos são recortes de leitura,
    // não uma partição), e somar g.slugs.length inflaria o total.
    var seen = {};
    GROUPS.forEach(function (g) {
      g.slugs.forEach(function (slug) { seen[slug] = true; });
    });
    var total = Object.keys(seen).length;
    t.total = total;
    t.introA = t.introA.replace("{n}", total);
    t.ctaHint = t.ctaHint.replace("{n}", total);
    t.intro = t.introA + t.introB + t.introC;
    t.portfolioCount = total + " " + (total === 1 ? t.countOne : t.countMany);

    t.links = LINKS;
    t.email = "claudneysartisessa@gmail.com";

    t.groups = GROUPS.map(function (g) {
      var items = g.slugs.map(function (slug) {
        var p = PROJECTS[slug];
        var loc = p[lang];
        return {
          slug: slug,
          name: loc.name,
          desc: loc.desc,
          note: loc.note,
          // demoUrl null = projeto sem demo por natureza (biblioteca, ferramenta
          // local). Nesse caso não há rótulo de demo para renderizar.
          demoLabel: loc.demoLabel || null,
          tags: p.tags[lang],
          shot: p.shot,
          // "shot" (captura real) ou "logo" (projeto sem tela própria a mostrar).
          media: p.media === "logo" ? "logo" : "shot",
          // Placa do logotipo: clara por padrão, escura quando a marca tem
          // partes brancas que desapareceriam na clara.
          plate: p.plate === "dark" ? "dark" : "light",
          // Alternativa textual do print: o handoff pedia alt descritivo, que o
          // background-image do protótipo não permitia. Aqui o print é <img>.
          // Logotipo não é captura de tela — o alt tem que dizer o que é.
          shotAlt: (p.media === "logo" ? t.logoAltPrefix : t.altPrefix) + " " + loc.name,
          demoUrl: p.demoUrl || null,
          // codeUrl null = código não público (trabalho de cliente). Mesma
          // regra do demoUrl: a chave existe sempre, null é opt-out declarado.
          codeUrl: p.codeUrl || null
        };
      });
      return {
        title: g[lang],
        count: items.length + " " + (items.length === 1 ? t.countOne : t.countMany),
        items: items
      };
    });
    return t;
  }

  window.PF_TEXT = TEXT;
  window.PF_CONTENT = { pt: build("pt"), en: build("en") };
  window.PF_REBUILD = function () {
    DATA = window.PF_PROJECTS || { projects: {}, groups: [] };
    PROJECTS = DATA.projects;
    GROUPS = DATA.groups;
    window.PF_CONTENT = { pt: build("pt"), en: build("en") };
    window.dispatchEvent(new Event("pf-content"));
    return window.PF_CONTENT;
  };
  window.dispatchEvent(new Event("pf-content"));
})();
