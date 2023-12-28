window.onscroll = function () {
  myFunction();
};

var nav = document.getElementById('nav');
var sticky = nav.offsetTop;

function myFunction() {
  if (window.scrollY >= sticky) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}
