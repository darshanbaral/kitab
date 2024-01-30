const fixThemeIcon = () => {
  let toggleTheme = document.querySelector(".toggle-theme");
  let html_ = document.querySelector("html");
  let currTheme = html_.getAttribute("data-bs-theme");

  console.log(currTheme);

  if (currTheme === "dark") {
    toggleTheme.classList.add("bi-lightbulb-off");
    toggleTheme.classList.remove("bi-lightbulb-fill");
  } else {
    toggleTheme.classList.add("bi-lightbulb-fill");
    toggleTheme.classList.remove("bi-lightbulb-off");
  }
};
