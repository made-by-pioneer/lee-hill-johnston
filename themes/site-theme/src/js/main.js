import styles from './../css/main.css';
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

// Sliders

var servicessliderCheck = document.getElementById('services-slider-items');
if (servicessliderCheck !== null) {

var servicesSlider = tns({
  "mode": "carousel",
  "container": "#services-slider-items",
  "items": 1,
  "controlsContainer": "#services-slider-controls",
  "nav": true,
  "navPosition": "bottom",
  "loop": false,
  "startIndex": 1,
  "touch": false,
  "speed": 400,
  "edgePadding": 0,
  "center": true,
  "mouseDrag": false,
  "arrowKeys": false,
  responsive: {
	768: {
		"edgePadding": 150,
	},
	1200: {
		"edgePadding": 294,
	}
  }
});

window.onload = function(){ 
  var info = servicesSlider.getInfo(),
  indexCurrent = info.displayIndex;
  info.slideItems[indexCurrent - 1].classList.add('highlight');
  console.log(info.displayIndex)
}

document.querySelector('.next-button').onclick = function () {

  var info = servicesSlider.getInfo(),
  indexCurrent = info.displayIndex;
  info.slideItems[indexCurrent].classList.add('highlight');
  info.slideItems[indexCurrent - 1].classList.remove('highlight');
  console.log(info.displayIndex)

}

document.querySelector('.previous-button').onclick = function () {


  var info = servicesSlider.getInfo(),
  indexCurrent = info.displayIndex;
  info.slideItems[indexCurrent - 2].classList.add('highlight');
  info.slideItems[indexCurrent - 1].classList.remove('highlight');
  console.log(info.displayIndex)

}

}

var testimonialsliderCheck = document.getElementById('testimonial-slider-controls');
if (testimonialsliderCheck !== null) {

var sliderTestimonials = tns({
  "mode": "carousel",
  "container": "#testimonial-slider-items",
  "items": 1,
  "controlsContainer": "#testimonial-slider-controls",
  "nav": true,
  "navPosition": "bottom",
  "loop": false,
  "startIndex": 1,
  "touch": false,
  "speed": 400,
  "edgePadding": 0,
  "center": true,
  "mouseDrag": false,
  "arrowKeys": false,
  responsive: {
	768: {
		"edgePadding": 150,
	},
	1200: {
		"edgePadding": 294,
	}
  }
});

window.onload = function(){ 
  var info = sliderTestimonials.getInfo(),
  indexCurrent = info.displayIndex;
  info.slideItems[indexCurrent - 1].classList.add('highlight');
  console.log(info.displayIndex)
}

document.querySelector('.next-button').onclick = function () {

  var info = sliderTestimonials.getInfo(),
  indexCurrent = info.displayIndex;
  info.slideItems[indexCurrent].classList.add('highlight');
  info.slideItems[indexCurrent - 1].classList.remove('highlight');
  console.log(info.displayIndex)

}

document.querySelector('.previous-button').onclick = function () {


  var info = sliderTestimonials.getInfo(),
  indexCurrent = info.displayIndex;
  info.slideItems[indexCurrent - 2].classList.add('highlight');
  info.slideItems[indexCurrent - 1].classList.remove('highlight');
  console.log(info.displayIndex)

}

}

// END