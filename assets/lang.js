/* Estado de idioma, compartilhado pelo Portfolio e pelo Monitor.
   Precedência: ?lang= na URL → localStorage → inglês. */
window.PF_LANG = (function () {
  "use strict";

  var KEY = "pf-lang-v3";
  var listeners = [];
  var current = null;

  function normalize(value) {
    return value === "pt" || value === "en" ? value : null;
  }

  function initial() {
    var fromUrl = normalize(new URLSearchParams(location.search).get("lang"));
    if (fromUrl) return fromUrl;
    try {
      var saved = normalize(localStorage.getItem(KEY));
      if (saved) return saved;
    } catch (error) {
      /* localStorage indisponível: segue no padrão */
    }
    return "en";
  }

  function text() {
    return (window.PF_CONTENT || {})[current] || {};
  }

  function apply() {
    var t = text();

    document.documentElement.lang = current === "pt" ? "pt-BR" : "en";
    if (t.pageTitle) document.title = t.pageTitle;

    document.querySelectorAll(".lang").forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.dataset.lang === current));
    });

    listeners.forEach(function (fn) {
      fn(t, current);
    });
  }

  function set(lang) {
    lang = normalize(lang) || "en";
    if (lang === current) return;
    current = lang;
    try {
      localStorage.setItem(KEY, lang);
    } catch (error) {
      /* sem persistência, a troca ainda vale para esta visita */
    }
    var url = new URL(location.href);
    url.searchParams.set("lang", lang);
    history.replaceState(null, "", url);
    apply();
  }

  function onChange(fn) {
    listeners.push(fn);
  }

  function start() {
    current = initial();
    document.querySelectorAll(".lang").forEach(function (button) {
      button.addEventListener("click", function () {
        set(button.dataset.lang);
      });
    });
    apply();
  }

  return {
    start: start,
    set: set,
    onChange: onChange,
    text: text,
    get: function () {
      return current;
    },
    reduced: function () {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    },
  };
})();
