console.log('main.js connected.');

var dropTop = document.querySelector('.masthead').offsetHeight;

// Menu Tog

const menuTog = document.getElementById('menu-tog');
const togTop = document.querySelector('.menu-tog .tog-top');
const togMiddle = document.querySelector('.menu-tog .tog-middle');
const togBottom = document.querySelector('.menu-tog .tog-bottom');
const masthead = document.querySelector('.masthead');
const navSlider = document.querySelector('.nav-slider');

menuTog.addEventListener('click', function(e) {
  e.preventDefault();
  if (menuTog.classList.contains('open')) {
    togTop.style.transform = 'translateY(-50%)';
    togMiddle.removeAttribute('style');
    setTimeout(function() {
      togTop.removeAttribute('style');
      togBottom.removeAttribute('style');
    }, 150);
    this.classList.remove('open');
    masthead.classList.remove('open');
    navSlider.classList.remove('open');
  } else {
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
    }, 150);
    this.classList.add('open');
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
