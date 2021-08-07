// ICON THEME TOGGLE
const themeButton = document.getElementById("theme-button");
const iconTheme = "uil-sun";

themeButton.addEventListener("click", () => {
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// DARK MODE THEME
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

// SAVES THEME SELECTION
document.getElementById("switchTheme").addEventListener("click", function () {
  let htmlClasses = document.querySelector("html").classList;
  if (localStorage.theme == "dark") {
    htmlClasses.remove("dark");
    localStorage.removeItem("theme");
  } else {
    htmlClasses.add("dark");
    localStorage.theme = "dark";
  }
});
