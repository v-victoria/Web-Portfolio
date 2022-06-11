// remove from all menu items "active"
function clearNavActiveLinks() {
  document.querySelectorAll(".nav-link").forEach((el) => {
    if (el.classList.contains("active")) {
      el.classList.remove("active");
    }
  });
}

let navbarElem = document.querySelector(".navbar");
let navbarSizeReplaceElem = document.querySelector(".navbar-size-replace");

window.addEventListener("scroll", function (e) {
  let scrollDistance = window.scrollY;
  if (scrollDistance > window.innerHeight) {
    // Fix navbar at the top
    navbarElem.classList.add("fixed-top");
    navbarSizeReplaceElem.classList.remove("d-none");
    navbarSizeReplaceElem.classList.add("d-block");

    let navAboutMeElem = document.querySelector("#nav-about-me");
    let navProjectsElem = document.querySelector("#nav-projects");
    let navContactsElem = document.querySelector("#nav-contacts");

    let aboutMeElem = document.querySelector("#about-me");
    let projectsElem = document.querySelector("#projects");
    let contactsElem = document.querySelector("#contacts");

    let navbarHeight = document.querySelector(".navbar").clientHeight;

    // set the active menu item depending on the scroll distance
    if (aboutMeElem.offsetTop - navbarHeight <= scrollDistance) {
      clearNavActiveLinks();
      navAboutMeElem.classList.add("active");
    }
    if (projectsElem.offsetTop - navbarHeight <= scrollDistance) {
      clearNavActiveLinks();
      navProjectsElem.classList.add("active");
    }
    if (contactsElem.offsetTop - navbarHeight <= scrollDistance) {
      clearNavActiveLinks();
      navContactsElem.classList.add("active");
    }
  } else {
    navbarElem.classList.remove("fixed-top");
    navbarSizeReplaceElem.classList.add("d-none");
    navbarSizeReplaceElem.classList.remove("d-block");
  }
});
