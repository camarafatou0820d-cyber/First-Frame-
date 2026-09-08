const toggle = document.querySelector('.menu-button');
const nav = document.querySelector('.navigation');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');

    toggle.textContent = nav.classList.contains('open')
      ? 'Close'
      : 'Menu';
  });
}


/* =========================================
   FIRSTFRAME — SMOOTH SCROLL
========================================= */

document.documentElement.style.scrollBehavior = 'smooth';


/* =========================================
   FIRSTFRAME — SCROLL REVEALS
========================================= */

const revealElements = document.querySelectorAll(
  'section > *, .project, .case-study, .service-detail, .process-item, .studio-value, .journal-item, .expectation-item'
);

if ('IntersectionObserver' in window) {

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach((element) => {
    element.classList.add('reveal');
    observer.observe(element);
  });

}


