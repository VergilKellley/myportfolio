const TypeWriter = function(txtElement, words, wait = 1000) {
	this.txtElement = txtElement;
	this.words = words;
	this.txt = '';
	this.wordIndex = 0;
	this.wait = parseInt(wait, 10);
	this.type();
	this.isDeleting = false;
}

// Type Method
TypeWriter.prototype.type = function() {
	// current index of word
	const current = this.wordIndex % this.words.length;
	// get full text of current word
	const  fullTxt = this.words[current];

	// check if deleting
	if(this.isDeleting) {
		// remove char
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
		// add char
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	// insert txt into element
	this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

	// initial type speed
	let typeSpeed = 300;

	if(this.isDeleting) {
		typeSpeed /= 2;
	}

	// if word is complete
	if(!this.isDeleting && this.txt === fullTxt) {
		// make pause at end of word
		typeSpeed = this.wait;
		// set delete to true
		this.isDeleting = true;
	} else if(this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		// move to next word
		this.wordIndex++;
		// pause before starting to type
		typeSpeed = 200;
	}

	setTimeout(() => this.type(), typeSpeed)
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
	const txtElement = document.querySelector('.txt-type');
	const words = JSON.parse(txtElement.getAttribute('data-words'));
	const wait = txtElement.getAttribute('data-wait');
	// Init TypeWriter
	new TypeWriter(txtElement, words, wait);
}

/******************end typwriter effect***********************/


/********************* hide Read More *************************/
	$(document).ready(function(){
    $(".closeBtn").click(function(){
        $("#about-container").hide(1000);
    });
});

/*********************show Read More******************************/
	$(document).ready(function(){
    $("#readmore").click(function(){
        $("#about-container").show(1000);
    });
});
	
/********************start smooth scroll effect*********************/

			$(function(){
			// smooth scrolling effect
			$('a[href*="#"]:not([href="#"])').click(function(){
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
					if (target.length) {
						$('html, body').animate({
							scrollTop: target.offset().top
					}, 1000);
						return false;
				}
			}
		});
	});

/***********************end smooth scroll effect*********************/

        // scroll reveal slide
		window.sr = ScrollReveal();
		sr.reveal('.navbar', {
			duration: 2000, 
			origin: 'bottom'
		});
		sr.reveal('.show-down', {
			duration: 3000, 
			origin: 'top',
			distance:'300px'
		});
		sr.reveal('.show-right', {
			duration: 3000, 
			origin: 'right',
			distance:'300px'
		});
		sr.reveal('.show-up', {
			duration: 3000,
			origin: 'bottom',
			distance: '300px'
		});
		sr.reveal('.show-left', {
			duration: 3000,
			origin: 'left',
			distance: '300px'
		});
		sr.reveal('.info1-btn', {
			duration: 2000,
			delay: 2000, 
			origin: 'bottom'
		});
		sr.reveal('.info-left', {
			duration: 2000,
			origin: 'left',
			distance:'300px',
			viewFactor: 0.2
		});
		sr.reveal('.info-right', {
			duration: 2000,
			origin: 'right',
			distance:'300px',
			viewFactor: 0.2
		});
	

		