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

// Sticky Nav

window.addEventListener('scroll', function () {
  var scrollTop = window.pageYOffset;
  var heroHeight = document.querySelector('.hero').offsetHeight;

  if (scrollTop > 100) {
    masthead.classList.add('sticky');
  } else {
    masthead.classList.remove('sticky');
  }
});

// Smooth Scroll

function scrollTo() {
	const links = document.querySelectorAll('main a');
	links.forEach(each => (each.onclick = scrollAnchors));
}

function scrollAnchors(e, respond = null) {
	const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
	e.preventDefault();
	var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
	const targetAnchor = document.querySelector(targetID);
	if (!targetAnchor) return;
	const originalTop = distanceToTop(targetAnchor);
	window.scrollBy({ top: originalTop - dropTop, left: 0, behavior: 'smooth' });
	const checkIfDone = setInterval(function() {
		const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
		if (distanceToTop(targetAnchor) === 0 || atBottom) {
			targetAnchor.tabIndex = '-1';
			targetAnchor.focus();
			window.history.pushState('', '', targetID);
			clearInterval(checkIfDone);
		}
	}, 100);
}

scrollTo();

// Countdown

// Set the date we're counting down to
    var countDownDate = new Date("Jul 18, 2020 15:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"

      // document.getElementById('cd-days').innerText = days;
      // document.getElementById('cd-hours').innerText = hours;
      // document.getElementById('cd-minutes').innerText = minutes;
      // document.getElementById('cd-seconds').innerText = seconds;

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "We're married!";
      }
    }, 1);
