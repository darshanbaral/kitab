let showBooks = function() {
  let options = document.querySelector(".chapters");
  let menuItems = document.querySelector(".menuItems");
  let mainItem = document.querySelector("main");
  if (!options.classList.contains("d-none")) {
    options.classList.add("d-none");
  }
  if (menuItems.classList.contains("d-none")) {
    menuItems.classList.remove("d-none");
    mainItem.classList.add("d-none");
  } else {
    menuItems.classList.add("d-none");
    mainItem.classList.remove("d-none");
  }
};

let showChapters = function() {
  let menuItems = document.querySelector(".menuItems");
  let options = document.querySelector(".chapters");
  let mainItem = document.querySelector("main");
  if (!menuItems.classList.contains("d-none")) {
    menuItems.classList.add("d-none");
  }
  if (options.classList.contains("d-none")) {
    options.classList.remove("d-none");
    mainItem.classList.add("d-none");
  } else {
    options.classList.add("d-none");
    mainItem.classList.remove("d-none");
  }
};

let scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};
