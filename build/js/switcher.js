var line=document.querySelector(".example__switch-line"),button1=document.querySelector(".js-first-button"),button2=document.querySelector(".js-second-button"),buttons=document.querySelectorAll(".example__button"),slides=document.querySelectorAll(".example__slide"),slider=function(){window.innerWidth<768&&(button1.addEventListener("click",function(){line.classList.remove("example__switch-line--switched"),slides[0].classList.remove("example__slide--hidden"),slides[1].classList.add("example__slide--hidden")}),button2.addEventListener("click",function(){line.classList.add("example__switch-line--switched"),slides[1].classList.remove("example__slide--hidden"),slides[0].classList.add("example__slide--hidden")}),line.addEventListener("click",function(e){e.preventDefault(),line.classList.contains("example__switch-line--switched")?line.classList.remove("example__switch-line--switched"):line.classList.contains("example__switch-line--switched")||line.classList.add("example__switch-line--switched");for(var s=0;s<slides.length;s++)slides[s].classList.toggle("example__slide--hidden")}))};window.onresize=function(){slider()},slider();