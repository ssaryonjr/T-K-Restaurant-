$(document).ready(function($) {

	"use strict";

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	var carousel = function() {
		$('.owl-carousel').owlCarousel({
			loop: true,
			margin: 10,
			nav: true,
			stagePadding: 5,
			nav: false,
			navText: ['<span class="icon-chevron-left">', '<span class="icon-chevron-right">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});
	};
	carousel();

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.ftco-number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();
	
	

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// navigation
	var OnePageNav = function() {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
		 			navToggler = $('.navbar-toggler');
		 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });


		  if ( navToggler.is(':visible') ) {
		  	navToggler.click();
		  }
		});
		$('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};
	OnePageNav();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });


});

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	simulateTouch: false,
	  // effect: 'fade',
	  // fadeEffect: {
	  //     crossFade: true
	  // },
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
  
	autoplay: {
	  delay: 5000,
	},
  
  
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
  });



const testimony = new Swiper('.testimony-carousel', {
// Optional parameters
direction: 'horizontal',
// loop: true,
autoplay: true,
disableOnInteraction: false,

// If we need pagination
pagination: {
	el: '.swiper-pagination',
},

// And if we need scrollbar
scrollbar: {
	el: '.swiper-scrollbar',
},

// Default parameters
slidesPerView: 1,
spaceBetween: 10,
// Responsive breakpoints
breakpoints: {
	// when window width is >= 320px
	320: {
	slidesPerView: 1,
	spaceBetween: 20
	},
	// when window width is >= 480px
	768: {
	slidesPerView: 2,
	spaceBetween: 30
	},
	// when window width is >= 640px
	993: {
	slidesPerView: 3,
	spaceBetween: 40
	}
	}
});


const nav = document.querySelector('nav');
const dropdown = nav.querySelector('.dropdown');
const dropdownToggle = nav.querySelector("[data-action='dropdown-toggle']");
const navToggle = nav.querySelector("[data-action='nav-toggle']");

// dropdownToggle.addEventListener('click', () => {
// 	if (dropdown.classList.contains('show')) {
// 		dropdown.classList.remove('show');
// 	} else {
// 		dropdown.classList.add('show');
// 	}
// })

navToggle.addEventListener('click', () => {
	if (nav.classList.contains('opened')) {
		nav.classList.remove('opened');
	} else {
		nav.classList.add('opened');
	}
})


window.addEventListener('scroll', ()=> {
	const pageScroll = window.scrollY;
	// const navBar = document.querySelector('nav');

	pageScroll > 111 
	? nav.classList.add('scrolling-nav') 
	: nav.classList.remove('scrolling-nav')
})

const mobileMenuItems = document.querySelectorAll('.nav-menu .nav-item a')
