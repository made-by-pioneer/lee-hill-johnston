import styles from './../css/main.css';
import ScrollReveal from 'scrollreveal';
import MicroModal from 'micromodal';
import { tns } from "tiny-slider/src/tiny-slider";

// mobile menu toggle

var openmenu = document.querySelector('.mobile-menu-button');
var mobilemenu = document.querySelector('.mobile-menu');
var body = document.querySelector('body');

openmenu.onclick = function() {
  mobilemenu.classList.toggle('mobile-menu-toggle');
  body.classList.toggle('overflow-hidden');
}

var closemenu = document.querySelector('.close-menu');

closemenu.onclick = function() {
  mobilemenu.classList.toggle('mobile-menu-toggle');
  body.classList.toggle('overflow-hidden');
}

// END

// init micromodal's js

MicroModal.init();

// END

// Reveal sections on scroll

ScrollReveal().reveal('.fadeOnScroll');

// END

// Scroll anchor links

(function() {
	scrollTo();
})();

function scrollTo() {
	const links = document.querySelectorAll('.scroll');
	links.forEach(each => (each.onclick = scrollAnchors));
}

function scrollAnchors(e, respond = null) {
	const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
	e.preventDefault();
	var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
	const targetAnchor = document.querySelector(targetID);
	if (!targetAnchor) return;
	const originalTop = distanceToTop(targetAnchor);
	window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
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

// END

// Sliders

var sliderTestimonials = tns({
  "mode": "carousel",
  "container": "#services-slider-items",
  "items": 1,
  "controlsContainer": "#services-slider-controls",
  "nav": true,
  "navPosition": "bottom",
  "loop": false,
  "startIndex": 1,
  "swipeAngle": false,
  "speed": 400,
  "edgePadding": 0,
  "center": true,
  "mouseDrag": true,
  responsive: {
	768: {
		"edgePadding": 150,
	},
	1200: {
		"edgePadding": 294,
	}
  }
});

// END