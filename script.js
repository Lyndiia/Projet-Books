const nav = document.querySelector("nav");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScroll) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-70px";
  }

  lastScroll = window.scrollY;
});
