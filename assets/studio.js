/* Render do Studio.

   Mesma regra do resto do site: conteúdo é dado, nunca HTML. Projeto, texto de
   perfil, formação e contagem saem de projects.js e content.js — os mesmos
   arquivos que a página terminal lê, para as duas nunca discordarem.

   O que mora aqui é só o que existe no Studio e em lugar nenhum mais: a frase
   do herói, os rótulos dos painéis de número e os campos da ficha. */

(function () {
  "use strict";

  /* ------------------------------------------------------------------
     Textos exclusivos do Studio, nos dois idiomas.

     Os números NÃO ficam escritos aqui. Eles são derivados dos dados logo
     abaixo, para não existir a possibilidade de a página dizer "12 projetos"
     depois que o décimo sétimo entrar.
     ------------------------------------------------------------------ */
  var STUDIO = {
    pt: {
      navRole: "Dev sênior · sistemas corporativos e IA aplicada",
      terminalBtn: "versão terminal",
      available: "Disponível para novos projetos",
      headline:
        "Vinte anos construindo o que não pode falhar — e, agora, IA que roda no navegador de quem visita.",
      workTitle: "Trabalho selecionado",
      dossierTitle: "Ficha de identificação",
      craftTitle: "Como eu trabalho",
      clearance: "Status · ativo",
      ctaLine: "Vamos conversar →",
      statYears: "anos de experiência",
      statProjects: "projetos no portfólio",
      statOpen: "com código aberto",
      statEdu: "formações",
      fieldName: "Nome",
      fieldRole: "Função",
      fieldDomain: "Domínio",
      roleValue: "Desenvolvedor sênior",
      domainValue: "Sistemas corporativos · IA aplicada"
    },
    en: {
      navRole: "Senior dev · enterprise systems and applied AI",
      terminalBtn: "terminal version",
      available: "Available for new projects",
      headline:
        "Twenty years building what cannot fail — and, now, AI that runs in the visitor's own browser.",
      workTitle: "Selected work",
      dossierTitle: "Identification record",
      craftTitle: "How I work",
      clearance: "Status · active",
      ctaLine: "Let's talk →",
      statYears: "years of experience",
      statProjects: "projects in the portfolio",
      statOpen: "with open source code",
      statEdu: "degrees",
      fieldName: "Name",
      fieldRole: "Role",
      fieldDomain: "Domain",
      roleValue: "Senior developer",
      domainValue: "Enterprise systems · applied AI"
    }
  };

  var $ = function (sel) { return document.querySelector(sel); };

  function el(tag, cls, txt) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (txt != null) n.textContent = txt;
    return n;
  }

  /* Um projeto pode não ter demo (biblioteca, app de desktop) ou não ter código
     aberto (trabalho de cliente). A linha leva para o que existir, e o
     verificador já garante que ao menos um dos dois existe. */
  function destino(p) {
    return p.demoUrl || p.codeUrl || "#";
  }

  function montarPrint(p, t, cls) {
    var box = el("div", cls);
    if (p.media === "logo") {
      box.className += " " + cls + "--logo";
      if (p.plate === "dark") box.className += " " + cls + "--logo-dark";
    }
    var img = el("img");
    img.src = p.shot;
    img.loading = "lazy";
    img.decoding = "async";
    img.alt = (p.media === "logo" ? t.logoAltPrefix : t.altPrefix) + " " + p.name;
    box.appendChild(img);
    return box;
  }

  function render(t, lang) {
    var x = STUDIO[lang] || STUDIO.en;
    var dados = window.PF_PROJECTS || { projects: {} };

    /* --- topo e herói --- */
    $("#navRole").textContent = x.navRole;
    $("#terminalBtn").textContent = x.terminalBtn;
    $("#available").textContent = x.available;
    $("#headline").textContent = x.headline;
    $("#heroBio").textContent = t.bio1;

    /* --- painéis de número, todos derivados --- */
    var abertos = 0;
    Object.keys(dados.projects || {}).forEach(function (slug) {
      if (dados.projects[slug].codeUrl) abertos++;
    });

    var stats = [
      { v: "20+", k: x.statYears },
      { v: String(t.total), k: x.statProjects },
      { v: String(abertos), k: x.statOpen },
      { v: String(t.education.length), k: x.statEdu }
    ];

    var alvoStats = $("#stats");
    alvoStats.textContent = "";
    stats.forEach(function (s) {
      var box = el("div", "stat");
      box.appendChild(el("b", null, s.k));
      box.appendChild(el("span", null, s.v));
      alvoStats.appendChild(box);
    });

    /* --- trabalho --- */
    $("#workTitle").textContent = x.workTitle;
    $("#workCount").textContent = t.portfolioCount;
    $("#workIntro").textContent = t.intro;

    var alvoWork = $("#work");
    alvoWork.textContent = "";

    /* Numeração por projeto DISTINTO, e não por linha. Os grupos são recortes
       de leitura, não uma partição: o Local Token Monitor aparece em
       Ferramentas e em Open Source. Contando linha, o último número passava de
       17 e desmentia o painel que diz "17 projetos" logo acima. Reencontrar o
       mesmo projeto agora repete o número dele — o que também avisa o leitor
       de que aquele card já passou. */
    var numeros = {};
    var n = 0;

    t.groups.forEach(function (g) {
      var grupo = el("div", "group");
      var cab = el("div", "group-head");
      cab.appendChild(el("h3", null, g.title));
      cab.appendChild(el("i"));
      grupo.appendChild(cab);

      g.items.forEach(function (p) {
        if (!numeros[p.slug]) numeros[p.slug] = ++n;
        var a = el("a", "row");
        a.href = destino(p);
        a.dataset.shot = p.shot;
        a.dataset.media = p.media || "shot";
        a.dataset.plate = p.plate || "";
        if (/^https?:/.test(a.href)) {
          a.target = "_blank";
          a.rel = "noopener";
        }

        a.appendChild(el("span", "row-num", String(numeros[p.slug]).padStart(2, "0")));

        var corpo = el("div", "row-body");
        var titulo = el("div", "row-title");
        titulo.appendChild(el("h4", null, p.name));
        if (p.tags && p.tags.length) titulo.appendChild(el("span", "row-tag", p.tags[0]));
        corpo.appendChild(titulo);
        corpo.appendChild(el("p", "row-desc", p.desc));
        if (p.note) corpo.appendChild(el("p", "row-note", "// " + p.note));
        corpo.appendChild(montarPrint(p, t, "row-shot"));
        a.appendChild(corpo);

        a.appendChild(el("span", "row-arrow", "↗"));
        grupo.appendChild(a);
      });

      alvoWork.appendChild(grupo);
    });

    /* --- ficha --- */
    $("#dossierTitle").textContent = x.dossierTitle;
    $("#craftTitle").textContent = x.craftTitle;
    $("#eduTitle").textContent = t.eduTitle;
    $("#clearance").textContent = x.clearance;
    $("#craft").textContent = t.bio2;

    var campos = [
      { k: x.fieldName, v: "Claudney Sarti Sessa" },
      { k: x.fieldRole, v: x.roleValue },
      { k: x.fieldDomain, v: x.domainValue }
    ];
    var alvoCampos = $("#fields");
    alvoCampos.textContent = "";
    campos.forEach(function (c) {
      var linha = el("div", "field");
      linha.appendChild(el("b", null, c.k));
      linha.appendChild(el("span", null, c.v));
      alvoCampos.appendChild(linha);
    });

    var alvoChips = $("#chips");
    alvoChips.textContent = "";
    t.skills.forEach(function (s) { alvoChips.appendChild(el("li", null, s)); });

    var alvoEdu = $("#edu");
    alvoEdu.textContent = "";
    t.education.forEach(function (e) {
      var li = el("li");
      li.appendChild(el("b", null, e.course));
      var meta = el("span", null, e.level);
      if (e.note) meta.appendChild(el("i", null, e.note));
      li.appendChild(meta);
      alvoEdu.appendChild(li);
    });

    var alvoLinks = $("#cardLinks");
    alvoLinks.textContent = "";
    t.links.forEach(function (l) {
      if (l.short === "e-mail") return;               // o e-mail é a chamada final
      var a = el("a", null, l.short + " ↗");
      a.href = l.href;
      a.target = "_blank";
      a.rel = "noopener";
      alvoLinks.appendChild(a);
    });

    /* --- chamada final --- */
    $("#ctaLabel").textContent = t.ctaSub;
    $("#ctaLine").textContent = x.ctaLine;
    $("#ctaLine").href = "mailto:" + t.email;
    $("#footMail").textContent = t.email;
  }

  /* ------------------------------------------------------------------
     Print seguindo o cursor.

     Atualiza o transform direto no DOM, sem re-render e sem entrar no fluxo do
     React que aqui não existe: é uma linha por mousemove. Só liga onde há
     ponteiro fino — no toque não existe hover, e o print inline já resolve.
     ------------------------------------------------------------------ */
  function ligarHoverShot() {
    if (!window.matchMedia("(min-width: 900px) and (pointer: fine)").matches) return;

    var caixa = $("#hoverShot");
    var img = caixa.querySelector("img");
    var visivel = false;

    document.addEventListener("mouseover", function (ev) {
      var linha = ev.target.closest(".row");
      if (!linha) return;
      img.src = linha.dataset.shot;
      caixa.classList.toggle("row-shot--logo", linha.dataset.media === "logo");
      caixa.classList.add("is-on");
      visivel = true;
    });

    document.addEventListener("mouseout", function (ev) {
      var linha = ev.target.closest(".row");
      if (!linha) return;
      if (linha.contains(ev.relatedTarget)) return;
      caixa.classList.remove("is-on");
      visivel = false;
    });

    document.addEventListener("mousemove", function (ev) {
      if (!visivel) return;
      var x = Math.min(ev.clientX + 26, window.innerWidth - 340);
      var y = Math.min(ev.clientY + 20, window.innerHeight - 220);
      caixa.style.transform = "translate(" + x + "px," + y + "px)";
    });
  }

  function iniciar() {
    window.PF_LANG.onChange(render);
    window.PF_LANG.start();
    ligarHoverShot();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();
