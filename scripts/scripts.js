let navbarElem = document.querySelector(".navbar");

window.addEventListener("scroll", function (e) {
  if (this.scrollY > window.innerHeight) {
    navbarElem.classList.add("fixed-top");
  } else {
    navbarElem.classList.remove("fixed-top");
  }
});
