/* ==== app.js ==== */

const DESKTOP_BREAKPOINT = 480;
window.addEventListener("load",function() {
  let heroVideoEl = document.getElementByID("hero-video");
  let heroVideoSrc = heroVideoEl.dataset.srcMobile
  let viewportWidth = window.innerWidth;
  if (viewportWidth >= DESKTOP_BREAKPOINT) {
    heroVideoSrc = heroVideoEl.dataset.srcDesktop;
  }
  heroVideoEl.src = heroVideoSrc;
})

function gridView() {
    for (i = 0; i < elements.length; i++) {
      elements[i].style.width = "50%";
    }
  }
  
  /* Optional: Add active class to the current button (highlight it) */
  var container = document.getElementById("btnContainer");
  var btns = container.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

  /** */
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }