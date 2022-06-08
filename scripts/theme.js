function changeColorDark() {
  let themeTextElem = document.querySelector(".theme-text");
  let switchCheckboxElem = document.querySelector("#switch");
  let navbarElem = document.querySelector(".navbar");

  switchCheckboxElem.checked = true;
  themeTextElem.innerHTML = "Light";
  navbarElem.classList.add("navbar-dark");

  document.documentElement.style.setProperty("--main-text-color", "#fcfcfd");
  document.documentElement.style.setProperty("--theme-background", "#13293D");
  document.documentElement.style.setProperty(
    "--theme-highlight-color",
    "#13293D"
  );
}
function changeColorLight() {
  let themeTextElem = document.querySelector(".theme-text");
  let switchCheckboxElem = document.querySelector("#switch");
  let navbarElem = document.querySelector(".navbar");

  themeTextElem.innerHTML = "Night";
  switchCheckboxElem.checked = false;
  navbarElem.classList.remove("navbar-dark");

  document.documentElement.style.setProperty("--main-text-color", "#000000");
  document.documentElement.style.setProperty("--theme-background", "#fcfcfd");
  document.documentElement.style.setProperty(
    "--theme-highlight-color",
    "#ffb188"
  );
}

// Select the button
let btn = document.querySelector("#switch");

// Select the theme preference from localStorage
let currentTheme = localStorage.getItem("theme");

// If the current theme in localStorage is "dark"...

if (currentTheme == "dark") {
  // ...then use the .dark-theme class
  document.body.classList.add("dark-theme");
  changeColorDark();
}

// Listen for a click on the button
btn.addEventListener("click", function () {
  // Toggle the .dark-theme class on each click
  document.body.classList.toggle("dark-theme");

  // Let's say the theme is equal to light
  let theme = "light";
  // If the body contains the .dark-theme class...
  if (document.body.classList.contains("dark-theme")) {
    // ...then let's make the theme dark
    theme = "dark";
    changeColorDark();
  } else {
    changeColorLight();
  }
  // Then save the choice in localStorage
  localStorage.setItem("theme", theme);
});
