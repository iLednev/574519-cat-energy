var line = document.querySelector(".example__switch-line");
var radio1 = document.querySelector(".js-first-radio");
var radio2 = document.querySelector(".js-second-radio");
var radios = document.querySelectorAll(".example__switch");
var label1 = document.querySelector(".js-first-label");
var label2 = document.querySelector(".js-second-label");
var labels = document.querySelectorAll(".example__label");

var slides = document.querySelectorAll(".example__slide");


var slider = function () {
  if (window.innerWidth < 768) {
    label1.addEventListener ("click", function() {
      if (radio1.checked === false) {
        line.classList.toggle("example__switch-line--switched");
      }
    });

    label2.addEventListener ("click", function() {
      if (radio2.checked === false) {
        line.classList.toggle("example__switch-line--switched");
      }
    });


    line.addEventListener ("click", function(evt) {
      evt.preventDefault();
      if (radio1.checked === true) {
        radio2.checked = true;
        line.classList.add("example__switch-line--switched");
      }

      else if (radio2.checked === true) {
        radio1.checked = true;
        line.classList.remove("example__switch-line--switched");
      }

      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.toggle("example__slide--hidden");
      }
    })

    for (var i = 0; i < radios.length; i++) {
      radios[i].onchange = function() {
        for (var i = 0; i < slides.length; i++) {
          slides[i].classList.toggle("example__slide--hidden");
        }
      }
    }
  }
}


window.onresize = function() {
  slider();
}

slider();
