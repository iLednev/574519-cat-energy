var fields = document.querySelectorAll(".js-required");
var submit = document.querySelector(".form__submit");
var contacts = document.querySelectorAll(".fields__item--contacts input");
var icons = document.querySelectorAll(".js-icon");

submit.addEventListener("click", function(evt) {
  for (var i = 0; i < fields.length; i++) {
    if(!fields[i].value) {
      evt.preventDefault();
      fields[i].classList.add("error");
    }
  }

  for (var i = 0; i < fields.length; i++) {
    if (contacts[i].classList.contains("error")) {
      icons[i].classList.add("error");
    }
  }
})

for (var i = 0; i < fields.length; i++) {
  fields[i].addEventListener("focus", function(evt) {
    evt.preventDefault();
    this.classList.remove("error");
    for (var j = 0; j < icons.length; j++) {
      if (!contacts[j].classList.contains("error")) {
        icons[j].classList.remove("error");
      }
    }
  })
}
