/* Página principal: perfil à esquerda, projetos à direita.
   Todo o conteúdo vem de PF_CONTENT (projects.js + content.js).
   Para publicar um projeto novo, edite projects.js — nunca este arquivo. */
(function () {
  "use strict";

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (key) {
        var value = attrs[key];
        if (value === null || value === undefined) return;
        if (key === "text") node.textContent = value;
        else node.setAttribute(key, value);
      });
    }
    (children || []).forEach(function (child) {
      node.append(child);
    });
    return node;
  }

  // Trechos ímpares viram <strong>: o destaque tipo seleção da bio e da intro.
  function segments(node, parts) {
    node.textContent = "";
    parts.forEach(function (part, index) {
      if (!part) return;
      if (index % 2 === 1) node.append(el("strong", { text: part }));
      else node.append(document.createTextNode(part));
    });
  }

  function links(project, t) {
    var out = [];
    if (project.demoUrl) {
      out.push(
        el("a", {
          href: project.demoUrl,
          target: "_blank",
          rel: "noopener",
          text: "./" + project.demoLabel,
        }),
      );
    }
    out.push(
      el("a", {
        href: project.codeUrl,
        target: "_blank",
        rel: "noopener",
        text: "./" + t.codeLabel,
      }),
    );
    return out;
  }

  function card(project, t) {
    // Logotipo de biblioteca não é captura: ganha placa clara e não é cortado.
    var media = el("div", { class: project.media === "logo" ? "shot shot--logo" : "shot" }, [
      el("img", {
        src: project.shot,
        alt: project.shotAlt,
        loading: "lazy",
        decoding: "async",
      }),
    ]);

    var text = el("div", { class: "card-text" }, [
      el("h3", { text: project.name }),
      el("p", { class: "desc", text: project.desc }),
      el(
        "ul",
        { class: "tags" },
        project.tags.map(function (tag) {
          return el("li", { text: tag });
        }),
      ),
      el("p", { class: "note", text: "// " + project.note }),
      // Nem todo projeto tem demo: biblioteca e ferramenta local não têm onde
      // rodar no navegador. Quando demoUrl é null o card mostra só o código —
      // link falso ou apontando para o próprio repositório seria pior.
      el("div", { class: "card-links" }, links(project, t)),
    ]);

    return el("article", { class: "card" }, [
      el("div", { class: "card-bar" }, [
        el("i", { "aria-hidden": "true" }),
        el("span", { text: project.slug }),
      ]),
      el("div", { class: "card-body" }, [media, text]),
    ]);
  }

  function render(t) {
    document.getElementById("badges").replaceChildren(
      ...t.roleBadges.map(function (role) {
        return el("span", {}, [
          el("b", { text: "--", "aria-hidden": "true" }),
          document.createTextNode(" " + role),
        ]);
      }),
    );

    segments(document.getElementById("bio1"), [
      t.bio1a,
      t.bio1b,
      t.bio1c,
      t.bio1d,
      t.bio1e,
    ]);
    segments(document.getElementById("bio2"), [
      t.bio2a,
      t.bio2b,
      t.bio2c,
      t.bio2d,
      t.bio2e,
      t.bio2f,
      t.bio2g,
    ]);
    segments(document.getElementById("intro"), [t.introA, t.introB, t.introC]);

    document.getElementById("skills").replaceChildren(
      ...t.skills.map(function (skill) {
        return el("li", { text: skill });
      }),
    );

    document.getElementById("education").replaceChildren(
      ...t.education.map(function (item) {
        return el("li", {}, [
          document.createTextNode(item.course + " "),
          el("span", { class: "level", text: "· " + item.level }),
          el("span", { class: "note", text: item.note }),
        ]);
      }),
    );

    document.getElementById("links").replaceChildren(
      ...t.links.map(function (link) {
        var isMail = link.href.indexOf("mailto:") === 0;
        return el("a", {
          href: link.href,
          text: link.label,
          target: isMail ? null : "_blank",
          rel: isMail ? null : "noopener",
        });
      }),
    );

    document.getElementById("groups").replaceChildren(
      ...t.groups.map(function (group) {
        return el("section", { class: "group" }, [
          el("div", { class: "group-head" }, [
            el("h2", { text: group.title }),
            el("span", { text: "// " + group.count }),
          ]),
          el(
            "div",
            { class: "cards" },
            group.items.map(function (project) {
              return card(project, t);
            }),
          ),
        ]);
      }),
    );

    document.getElementById("cta-title").textContent = t.ctaTitle;
    document.getElementById("cta-sub").textContent = t.ctaSub;
    document.getElementById("cta-btn").textContent = t.ctaBtn;

    var animated = document.getElementById("animated-link");
    animated.textContent = "▶ " + t.animatedBtn;
    animated.setAttribute("href", "./monitor.html?lang=" + window.PF_LANG.get());
  }

  window.PF_LANG.onChange(render);
  window.PF_LANG.start();
})();
