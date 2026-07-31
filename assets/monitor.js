/* Monitor CRT — sequência de boot.
   O conteúdo é escrito no DOM antes de qualquer animação: quem tem movimento
   reduzido, quem está sem JS e os rastreadores recebem o perfil completo.
   A animação apenas revela o que já existe. */
(function () {
  "use strict";

  var TYPE_MS = 52; // por caractere
  var UNDERSCORE_EXTRA = 24; // pausa a mais depois de "_"
  var START_DELAY = 620;
  var LOADING_DELAY = 480;
  var STEP_MS = 320;

  var boot = document.getElementById("boot");
  var typed = document.getElementById("typed");
  var timers = [];

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

  function clearTimers() {
    timers.forEach(clearTimeout);
    timers = [];
  }

  function after(ms, fn) {
    timers.push(setTimeout(fn, ms));
  }

  function steps() {
    return Array.prototype.slice.call(boot.querySelectorAll(".reveal"));
  }

  function render(t) {
    document.getElementById("crumb").textContent = t.crumbProfile;
    document.getElementById("loading-text").textContent = t.loading;
    document.getElementById("replay").textContent = t.replay;
    document.getElementById("exit").textContent = t.plainBtn;
    document.getElementById("open-btn").textContent = "./" + t.openBtn;
    document.getElementById("hint").textContent = t.ctaHint;
    typed.textContent = t.cmd;

    document.getElementById("crt-badges").replaceChildren(
      ...t.roleBadges.map(function (role) {
        return el("span", {}, [
          el("b", { text: "--", "aria-hidden": "true" }),
          document.createTextNode(" " + role),
        ]);
      }),
    );

    // No CRT as bios são texto corrido, sem os destaques da página principal.
    document.getElementById("crt-bio1").textContent = t.bio1;
    document.getElementById("crt-bio2").textContent = t.bio2;

    document.getElementById("crt-skills").replaceChildren(
      ...t.skills.map(function (skill) {
        return el("li", { text: skill });
      }),
    );

    document.getElementById("crt-links").replaceChildren(
      ...t.links.map(function (link) {
        var isMail = link.href.indexOf("mailto:") === 0;
        return el("a", {
          href: link.href,
          text: link.short,
          target: isMail ? null : "_blank",
          rel: isMail ? null : "noopener",
        });
      }),
    );

    // O link de saída preserva o idioma escolhido.
    var lang = window.PF_LANG.get();
    document.getElementById("exit").setAttribute("href", "./index.html?lang=" + lang);
    document.getElementById("open-btn").setAttribute("href", "./index.html?lang=" + lang);
  }

  function typeCommand(text, done) {
    typed.textContent = "";
    var index = 0;
    function next() {
      if (index >= text.length) {
        done();
        return;
      }
      var char = text.charAt(index);
      typed.textContent += char;
      index += 1;
      after(TYPE_MS + (char === "_" ? UNDERSCORE_EXTRA : 0), next);
    }
    next();
  }

  function revealFrom(list, i) {
    if (i >= list.length) return;
    list[i].classList.add("shown");
    after(STEP_MS, function () {
      revealFrom(list, i + 1);
    });
  }

  function play(t) {
    clearTimers();

    if (window.PF_LANG.reduced()) {
      boot.classList.remove("booting");
      steps().forEach(function (node) {
        node.classList.remove("shown");
      });
      typed.textContent = t.cmd;
      return;
    }

    boot.classList.add("booting");
    var list = steps();
    list.forEach(function (node) {
      node.classList.remove("shown");
    });
    typed.textContent = "";

    after(START_DELAY, function () {
      typeCommand(t.cmd, function () {
        after(LOADING_DELAY, function () {
          revealFrom(list, 0);
        });
      });
    });
  }

  window.PF_LANG.onChange(function (t) {
    render(t);
    play(t); // trocar idioma reinicia a sequência, como especificado
  });

  document.getElementById("replay").addEventListener("click", function () {
    play(window.PF_LANG.text());
  });

  window.PF_LANG.start();
})();
