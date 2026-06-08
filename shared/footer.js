/* ============================================
   ABSN Summer — Footer helpers
   Zelle click-to-copy with a small toast.
   ============================================ */
(function () {
  const ZELLE_NUMBER = "(914) 646-0456";
  const VENMO_USER = "Tom_Thomas";
  const VENMO_APP = "venmo://paycharge?txn=pay&recipients=" + VENMO_USER;
  const VENMO_WEB = "https://venmo.com/" + VENMO_USER;

  function showToast(msg) {
    let toast = document.getElementById('copy-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'copy-toast';
      toast.className = 'copy-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => toast.classList.remove('show'), 1800);
  }

  function openVenmo(e) {
    e.preventDefault();
    const isMobile = /iphone|ipad|ipod|android/i.test(navigator.userAgent);
    if (!isMobile) {
      // desktop: app scheme does nothing, go straight to web
      window.open(VENMO_WEB, '_blank');
      return;
    }
    // mobile: try the app, fall back to web if it doesn't take over
    let bounced = false;
    const fallback = setTimeout(() => { if (!bounced) window.location.href = VENMO_WEB; }, 700);
    // if the app opens, the page is backgrounded and visibility changes — cancel fallback
    const onHide = () => { bounced = true; clearTimeout(fallback); };
    document.addEventListener('visibilitychange', onHide, { once: true });
    window.addEventListener('pagehide', onHide, { once: true });
    window.location.href = VENMO_APP;
  }

  function copyZelle(e) {
    e.preventDefault();
    const num = ZELLE_NUMBER;
    const done = () => showToast('Zelle number copied — paste it in your bank app');
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(num).then(done).catch(() => fallbackCopy(num, done));
    } else {
      fallbackCopy(num, done);
    }
  }

  function fallbackCopy(text, cb) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); cb(); } catch (err) { showToast('Could not copy — number is ' + text); }
    document.body.removeChild(ta);
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.donate-btn.zelle').forEach(btn => {
      btn.addEventListener('click', copyZelle);
      btn.style.cursor = 'pointer';
    });
    document.querySelectorAll('.donate-btn.venmo').forEach(btn => {
      btn.addEventListener('click', openVenmo);
      btn.style.cursor = 'pointer';
    });
  });
})();
