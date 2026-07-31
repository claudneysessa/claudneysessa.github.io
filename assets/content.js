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
      roleBadges: ["Analista de Sistemas", "ERP e fiscal eletrônico", "IA aplicada"],
      bio1a: "Bacharel em Sistemas de Informação, com ",
      bio1b: "mais de 20 anos de experiência",
      bio1c: " em ERP e em sistemas voltados à área fiscal brasileira — com destaque para ",
      bio1d: "documentos eletrônicos",
      bio1e: ". É um domínio que não perdoa erro: regra fiscal errada gera contingência, autuação e prejuízo real para quem depende do sistema.",
      bio2a: "Sou ",
      bio2b: "desenvolvedor sênior",
      bio2c: " e programo em ",
      bio2d: "Delphi, Flutter e .NET",
      bio2e: ", e atuo com ",
      bio2f: "IA aplicada e engenharia de prompts",
      bio2g: ". Os projetos ao lado são onde eu levo essa prática para o navegador — e onde mostro o raciocínio por trás da solução, não só o resultado.",
      skillsTitle: "Especialidades",
      skills: ["ERP", "Fiscal brasileiro", "Documentos eletrônicos", "Delphi", "Flutter", ".NET", "IA aplicada", "Engenharia de prompts"],
      eduTitle: "Formação",
      education: [
        { course: "Eng. de Software com IA Aplicada", level: "pós · ", note: "em andamento" },
        { course: "Engenharia de Software", level: "pós", note: "" },
        { course: "Big Data e Analytics", level: "pós", note: "" },
        { course: "Sistemas de Informação", level: "bacharelado, FAESA", note: "" }
      ],
      linksTitle: "Onde me encontrar",
      portfolioTitle: "Portfólio",
      introA: "{n} projetos autorais com um fio condutor: ",
      introB: "a inferência roda no navegador de quem visita",
      introC: ". Sem servidor de IA, sem conta, sem enviar dados para fora do dispositivo. Todos têm demonstração ao vivo e código aberto.",
      codeLabel: "codigo",
      ctaTitle: "Quer conversar sobre ERP, fiscal ou IA aplicada?",
      ctaSub: "Respondo por e-mail e LinkedIn em até um dia útil.",
      ctaBtn: "Enviar e-mail",
      openBtn: "abrir_portfolio",
      ctaHint: "{n} projetos que rodam no seu navegador",
      countOne: "projeto",
      countMany: "projetos",
      altPrefix: "Captura de tela do projeto",
      pageTitle:
        "claudney_sarti_sessa — Desenvolvedor sênior · ERP, fiscal eletrônico, IA aplicada"
    },
    en: {
      profileTitle: "Profile",
      animatedBtn: "animated version",
      plainBtn: "EXIT CRT",
      crumbProfile: "profile",
      cmd: "claudney_sarti_sessa --profile",
      loading: "loading profile.md ...",
      replay: "REPLAY",
      roleBadges: ["Systems Analyst", "ERP & e-invoicing", "Applied AI"],
      bio1a: "Bachelor's in Information Systems, with ",
      bio1b: "over 20 years of experience",
      bio1c: " in ERP and systems built around Brazilian tax legislation — especially ",
      bio1d: "electronic fiscal documents",
      bio1e: ". It is a domain that does not forgive mistakes: one wrong tax rule means contingency mode, fines and real losses for whoever depends on the system.",
      bio2a: "I am ",
      bio2b: "a senior developer",
      bio2c: " and I program in ",
      bio2d: "Delphi, Flutter and .NET",
      bio2e: ", and I work with ",
      bio2f: "applied AI and prompt engineering",
      bio2g: ". The projects beside this are where I take that practice into the browser — and where I show the reasoning behind the solution, not just the result.",
      skillsTitle: "Specialties",
      skills: ["ERP", "Brazilian tax", "E-invoicing", "Delphi", "Flutter", ".NET", "Applied AI", "Prompt engineering"],
      eduTitle: "Education",
      education: [
        { course: "Software Eng. with Applied AI", level: "postgrad · ", note: "in progress" },
        { course: "Software Engineering", level: "postgrad", note: "" },
        { course: "Big Data and Analytics", level: "postgrad", note: "" },
        { course: "Information Systems", level: "BSc, FAESA", note: "" }
      ],
      linksTitle: "Where to find me",
      portfolioTitle: "Portfolio",
      introA: "{n} personal projects with one common thread: ",
      introB: "inference runs in the visitor's own browser",
      introC: ". No AI server, no account, no data leaving the device. All of them have a live demo and open source code.",
      codeLabel: "code",
      ctaTitle: "Want to talk about ERP, tax systems or applied AI?",
      ctaSub: "I reply by email and LinkedIn within one business day.",
      ctaBtn: "Send email",
      openBtn: "open_portfolio",
      ctaHint: "{n} projects that run in your own browser",
      countOne: "project",
      countMany: "projects",
      altPrefix: "Screenshot of the",
      pageTitle:
        "claudney_sarti_sessa — Senior developer · ERP, e-invoicing, applied AI"
    }
  };

  function build(lang) {
    var t = {};
    for (var k in TEXT[lang]) t[k] = TEXT[lang][k];

    // bios em texto corrido, derivadas das mesmas partes usadas na versão com destaques
    t.bio1 = t.bio1a + t.bio1b + t.bio1c + t.bio1d + t.bio1e;
    t.bio2 = t.bio2a + t.bio2b + t.bio2c + t.bio2d + t.bio2e + t.bio2f + t.bio2g;

    // contagens sempre derivadas da lista de projetos
    var total = GROUPS.reduce(function (n, g) { return n + g.slugs.length; }, 0);
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
          demoLabel: loc.demoLabel,
          tags: p.tags[lang],
          shot: p.shot,
          // Alternativa textual do print: o handoff pedia alt descritivo, que o
          // background-image do protótipo não permitia. Aqui o print é <img>.
          shotAlt: t.altPrefix + " " + loc.name,
          demoUrl: p.demoUrl,
          codeUrl: p.codeUrl
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
