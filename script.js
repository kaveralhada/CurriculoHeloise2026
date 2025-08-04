function toggleAccordion(element) {
  const content = element.nextElementSibling;
  content.classList.toggle("open");
}

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
