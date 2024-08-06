document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  const hiddenElements = document.querySelectorAll(".hidden");

  // Intersection Observer for showing elements on scroll
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  // Observe each hidden element
  hiddenElements.forEach((el) => revealObserver.observe(el));

  // Intersection Observer for highlighting nav links
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href").substring(1) === entry.target.id) {
            link.classList.add("active");
          }
        });
      }
    });
  }, { threshold: 0.5 });

  // Observe each section
  sections.forEach((section) => navObserver.observe(section));
});
