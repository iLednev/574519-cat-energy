var button = document.querySelector(".main-header__button");
var nav = document.querySelector(".main-nav");

button.onclick = function () {
  button.classList.toggle("active");
  nav.classList.toggle("show");
}
