window.onclick = function (event) {
  checkClick(event);
};
window.ontouchstart = function (event) {
  checkClick(event);
};

checkClick = function (event) {
  let insideMenu = false;
  Array.from(document.querySelectorAll(".show")).forEach((menu) => {
    insideMenu = insideMenu || menu.contains(event.target);
  });
  if (!insideMenu && !event.target.matches(".hover-menu")) {
    Array.from(document.querySelectorAll(".hover-menu")).forEach(
      (hovermenu) => {
        hovermenu.nextElementSibling.style.maxHeight = "0px";
      }
    );
  }
};
let expandMenu = function (x) {
  Array.from(document.querySelectorAll(".hover-menu")).forEach((hovermenu) => {
    hovermenu.nextElementSibling.style.maxHeight = "0px";
  });
  let thisMenu = x.nextElementSibling;
  thisMenu.style.maxHeight = thisMenu.scrollHeight + "px";
};
