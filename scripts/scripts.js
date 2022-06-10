let navbarElem = document.querySelector(".navbar");
let navbarSizeReplaceElem = document.querySelector(".navbar-size-replace");

window.addEventListener("scroll", function (e) {
  if (this.scrollY > window.innerHeight) {
    navbarElem.classList.add("fixed-top");
    navbarSizeReplaceElem.classList.remove("d-none");
    navbarSizeReplaceElem.classList.add("d-block");
  } else {
    navbarElem.classList.remove("fixed-top");
    navbarSizeReplaceElem.classList.add("d-none");
    navbarSizeReplaceElem.classList.remove("d-block");
  }
});
