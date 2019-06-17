window.onclick = function(event) {
  let insideMenu = false;
  Array.from(document.querySelectorAll(".show")).forEach(menu => {
    insideMenu = insideMenu || menu.contains(event.target);
  });
  if (!insideMenu && !event.target.matches(".hover-menu")) {
    Array.from(document.querySelectorAll(".hover-menu")).forEach(hovermenu => {
      hovermenu.nextElementSibling.style.maxHeight = "0px";
    });
  }
};
let expandMenu = function(x) {
  Array.from(document.querySelectorAll(".hover-menu")).forEach(hovermenu => {
    hovermenu.nextElementSibling.style.maxHeight = "0px";
  });
  let thisMenu = x.nextElementSibling;
  thisMenu.style.maxHeight = thisMenu.scrollHeight + "px";
};
let scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

function copyUrl(text) {
  let copyFrom = document.createElement("textarea");
  copyFrom.textContent = text;
  document.body.appendChild(copyFrom);
  copyFrom.select();
  document.execCommand("copy");
  copyFrom.blur();
  document.body.removeChild(copyFrom);

  let copiedMessage = document.createElement("div");
  copiedMessage.id = "copiedMessage";
  copiedMessage.textContent = "Link copied to clipboard";
  copiedMessage.classList.add("bg-warning", "shadow", "d-block", "text-center");
  document.body.appendChild(copiedMessage);

  setTimeout(function() {
    copiedMessage.style.opacity = 0;
  }, 500);
  setTimeout(function() {
    document.body.removeChild(copiedMessage);
  }, 1500);
}
