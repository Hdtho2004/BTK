(() => {
  'use strict';
  const progress = document.getElementById('reading-progress');
  const backToTop = document.getElementById('back-to-top');
  const items = Array.from(document.querySelectorAll('.timeline-item'));
  const tabs = Array.from(document.querySelectorAll('[data-tab-year]'));
  const links = Array.from(document.querySelectorAll('.main-nav a'));
  let ticking = false;
  const updateScroll = () => {
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    progress.style.width = Math.min(100, Math.max(0, window.scrollY / max * 100)) + '%';
    backToTop.classList.toggle('visible', window.scrollY > 550);
    let selected = items[0];
    const cutoff = Math.max(150, window.innerHeight * .28);
    for (const item of items) {
      if (item.getBoundingClientRect().top <= cutoff) selected = item;
    }
    tabs.forEach(tab => {
      const active = selected && tab.dataset.tabYear === selected.dataset.year;
      tab.classList.toggle('active', active);
      if (active) tab.setAttribute('aria-current', 'true');
      else tab.removeAttribute('aria-current');
    });
    for (const link of links) {
      const target = document.querySelector(link.getAttribute('href'));
      const current = target && target.getBoundingClientRect().top <= 180 && target.getBoundingClientRect().bottom > 180;
      link.classList.toggle('active', Boolean(current));
    }
    ticking = false;
  };
  const scrollHandler = () => {
    if (!ticking) {
      requestAnimationFrame(updateScroll);
      ticking = true;
    }
  };
  addEventListener('scroll', scrollHandler, { passive: true });
  addEventListener('resize', scrollHandler, { passive: true });
  updateScroll();
  backToTop.addEventListener('click', () => window.scrollTo({top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'}));
  for (const image of document.querySelectorAll('img[data-fallback]')) {
    image.addEventListener('error', () => {
      if (image.dataset.fallbackUsed) return;
      image.dataset.fallbackUsed = 'true';
      image.src = image.dataset.fallback;
      image.style.filter = 'none';
    });
    if (image.complete && image.naturalWidth === 0) {
      image.dispatchEvent(new Event('error'));
    }
  }
})();
