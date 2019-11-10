console.log('main.js connected.');

var dropTop = document.querySelector('.masthead').offsetHeight;

// Menu Tog

const menuTog = document.getElementById('menu-tog');
const main = document.querySelector('main');
const togTop = document.querySelector('.menu-tog .tog-top');
const togMiddle = document.querySelector('.menu-tog .tog-middle');
const togBottom = document.querySelector('.menu-tog .tog-bottom');
const masthead = document.querySelector('.masthead');
const navSlider = document.querySelector('.nav-slider');
const btnRSVPheader = document.querySelector('.masthead .btn');

function menuClose() {
  togTop.style.transform = 'translateY(-50%)';
  togMiddle.removeAttribute('style');
  setTimeout(function() {
    togTop.removeAttribute('style');
    togBottom.removeAttribute('style');
  }, 150);
  menuTog.classList.remove('open');
  masthead.classList.remove('open');
  navSlider.classList.remove('open');
  btnRSVPheader.classList.remove('btn-white');
}

function menuOpen() {
  togTop.style.top = '50%';
  togTop.style.transform = 'translateY(-50%)';
  togBottom.style.bottom = '50%';
  togBottom.style.transform = 'translateY(50%)';
  setTimeout(function() {
    togTop.style.transform = 'translateY(-50%) rotate(-45deg)';
    togMiddle.style.transform = 'rotate(45deg)';
    togBottom.style.transform = 'translateY(50%)';
    togBottom.style.opacity = '0';
    masthead.classList.add('open');
    navSlider.classList.add('open');
    btnRSVPheader.classList.add('btn-white');
  }, 150);
  menuTog.classList.add('open');
}

menuTog.addEventListener('click', function(e) {
  e.preventDefault();
  if (menuTog.classList.contains('open')) {
    menuClose();
  } else {
    menuOpen();
  }
});

navSlider.addEventListener('click', function() {
  if (menuTog.classList.contains('open')) {
    menuClose();
  }
});

window.addEventListener('keydown', function(e) {
  if (e.keyCode == 27) {
    if (menuTog.classList.contains('open')) {
      menuClose();
    }
  }
});

// Nav Slider

const sliderNav = document.querySelector('.nav-slide-in');

sliderNav.style.paddingTop = dropTop + 'px';

// var btn = document.getElementsByClassName('btn');
//
// Array.from(btn).forEach(function(element) {
//    element.addEventListener('mouseover', function(event) {
//      element.classList.add('hovered')
//    });
//    element.addEventListener('mouseout', function(event) {
//      element.classList.remove('hovered')
//    });
// });
