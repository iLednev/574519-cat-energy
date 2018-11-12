var line = document.querySelector(".example__switch-line");
var button1 = document.querySelector(".js-first-button");
var button2 = document.querySelector(".js-second-button");
var buttons = document.querySelectorAll(".example__button");

var slides = document.querySelectorAll(".example__slide");


var slider = function () {
  if (window.innerWidth < 768) {
    button1.addEventListener ("click", function() {
      line.classList.remove("example__switch-line--switched");
      slides[0].classList.remove("example__slide--hidden");
      slides[1].classList.add("example__slide--hidden");
    });

    button2.addEventListener ("click", function() {
      line.classList.add("example__switch-line--switched");
      slides[1].classList.remove("example__slide--hidden");
      slides[0].classList.add("example__slide--hidden");
    });


    line.addEventListener ("click", function(evt) {
      evt.preventDefault();
      if (line.classList.contains("example__switch-line--switched")) {
        line.classList.remove("example__switch-line--switched");
      }

      else if (!line.classList.contains("example__switch-line--switched")) {
        line.classList.add("example__switch-line--switched");
      }

      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.toggle("example__slide--hidden");
      }
    })
  }
}
window.onresize = function() {
  slider();
}
slider();
