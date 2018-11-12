var button = document.querySelector(".main-header__button");
var nav = document.querySelector(".main-nav");

var activate = function() {
  if (window.innerWidth < 768) {
    nav.classList.add("hide");
    button.classList.add("show");
  }

  else if (window.innerWidth >= 768) {
    nav.classList.remove("hide");
    button.classList.remove("show");
  }
}

button.onclick = function () {
  button.classList.toggle("active");
  nav.classList.toggle("hide");
}

activate();

window.onresize = function () {
  activate();
}
