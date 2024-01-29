const fixThemeIcon = () => {
  console.log(2);
  let toggleTheme = document.querySelector(".toggle-theme");
  let theme = localStorage.getItem("theme");
  if (theme === "dark") {
    toggleTheme.classList.add("bi-lightbulb-fill");
    toggleTheme.classList.remove("bi-lightbulb-off");
  } else {
    toggleTheme.classList.remove("bi-lightbulb-fill");
    toggleTheme.classList.add("bi-lightbulb-off");
  }
};
