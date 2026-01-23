(function () {
  function initHeader(navwrap) {
    if (!navwrap || navwrap.__crInitDone) return;

    var toggle = navwrap.querySelector(".cr-toggle");
    var topbar = navwrap.querySelector(".cr-topbar");
    if (!toggle || !topbar) return;

    navwrap.__crInitDone = true;

    function setTopbarHeightVar() {
      var h = Math.round(topbar.getBoundingClientRect().height || 0);
      navwrap.style.setProperty("--cr-topbar-h", h + "px");
    }

    setTopbarHeightVar();
    window.addEventListener("resize", setTopbarHeightVar);

    var linksWrap = navwrap.querySelector(".cr-links");
    if (linksWrap) {
      linksWrap.addEventListener(
        "click",
        function (e) {
          var a = e.target && e.target.closest ? e.target.closest("a") : null;
          if (!a) return;
          toggle.checked = false;
        },
        true
      );
    }

    var lastY = window.pageYOffset || 0;
    var upAccum = 0;
    var downAccum = 0;

    var showAfterUpPx = 28;
    var hideAfterDownPx = 16;
    var startWorkingAfterY = 40;

    var stickyActive = false;
    var ticking = false;

    function setStickyActive(active) {
      if (active === stickyActive) return;
      stickyActive = active;

      if (stickyActive) {
        navwrap.classList.add("cr-stickyPad");
        topbar.classList.add("cr-stickyMode");
        topbar.classList.remove("cr-stickyHidden");
      } else {
        topbar.classList.remove("cr-stickyHidden");
        topbar.classList.remove("cr-stickyMode");
        navwrap.classList.remove("cr-stickyPad");
      }
    }

    function setStickyHidden(hidden) {
      if (hidden) {
        topbar.classList.add("cr-stickyHidden");
        toggle.checked = false;
      } else {
        topbar.classList.remove("cr-stickyHidden");
      }
    }

    function onScrollLogic() {
      var y = window.pageYOffset || 0;
      var delta = y - lastY;

      if (y <= startWorkingAfterY) {
        upAccum = 0;
        downAccum = 0;
        setStickyActive(false);
        lastY = y;
        return;
      }

      setStickyActive(true);

      if (delta < 0) {
        upAccum += Math.abs(delta);
        downAccum = 0;

        if (upAccum >= showAfterUpPx) {
          setStickyHidden(false);
          upAccum = 0;
        }
      } else if (delta > 0) {
        downAccum += delta;
        upAccum = 0;

        if (downAccum >= hideAfterDownPx) {
          setStickyHidden(true);
          downAccum = 0;
        }
      }

      lastY = y;
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        onScrollLogic();
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    if ((window.pageYOffset || 0) > startWorkingAfterY) {
      setStickyActive(true);
      setStickyHidden(false);
    }
  }

  function scanAndInit() {
    var navwraps = document.querySelectorAll(".cr-navwrap");
    for (var i = 0; i < navwraps.length; i++) {
      initHeader(navwraps[i]);
    }
  }

  function initVersionStamp() {
    var buildVersion = "v1.12.5";

    var formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Los_Angeles",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    });

    function updateVersion() {
      var el = document.getElementById("cr-version");
      if (!el) return;

      var now = new Date();
      var formatted = formatter.format(now);
      el.textContent = "Build " + buildVersion + " · Updated " + formatted + " PT";
    }

    updateVersion();

    var mo2 = new MutationObserver(function () {
      updateVersion();
    });

    mo2.observe(document.documentElement, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      scanAndInit();
      initVersionStamp();
    });
  } else {
    scanAndInit();
    initVersionStamp();
  }

  var mo = new MutationObserver(function () {
    scanAndInit();
  });

  mo.observe(document.documentElement, { childList: true, subtree: true });
})();
