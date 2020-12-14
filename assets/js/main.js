// Build CSS
import '../css/app.css'

// Import JS Modules
import menu_init from './modules/menu'

// Load Menu Script
document.addEventListener( 'DOMContentLoaded', menu_init );


//Mobile Nav
const button = document.getElementById( 'js-mobile' );
const body = document.getElementsByTagName('body')[0];

button.addEventListener('click', (e) => {
	if (body.classList.contains('active')) {
		body.classList.remove('active') 
	}
	else
		{ body.classList.add('active')}
	});


//Mobile Submenus 2
function mobileBtns() {
	const mobileBtn = document.querySelectorAll(".js-mobile");
	const body = document.getElementsByTagName('body')[0];
	const mobilebtnText = document.getElementById('js-mobile-btn-text');
	var i;
	
	for (i = 0; i < mobileBtn.length; i++) {
	  mobileBtn[i].addEventListener("click", function(ev) {
		if (body.classList.contains('active')) {
			body.classList.remove('active');
			mobilebtnText.innerHTML = "Menu"; 
		}
		else
			{ body.classList.add('active');
			mobilebtnText.innerHTML = "Close";}
	});
  }
}
mobileBtns();	

// Back to Top
function toTop() {
	var topButton = document.getElementById("js-back-to-top");
	var bscrollPosY = window.pageYOffset | document.body.scrollTop;
  
	if(bscrollPosY > 500) {
			topButton.classList.add ('opacity-100');
	  } else if(bscrollPosY <= 500) {
		   topButton.classList.remove ('opacity-100');
	  }
}

window.onscroll = function() {
	toTop();
}
	
 //Mobile Submenus
function mobileMenu() {
  var mobileSub = document.querySelectorAll(".menu-item-has-children > a");
  var i;
  
  for (i = 0; i < mobileSub.length; i++) {
    mobileSub[i].addEventListener("click", function(ev) {
     
      ev.preventDefault();
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }
  }

window.onload=function(){
  var w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
  var targetWidth = 1024;
  if ( w < targetWidth) {     
    mobileMenu();
  }
}

// Scroll Offset
(function(document, history, location) {
	var HISTORY_SUPPORT = !!(history && history.pushState);
  
	var anchorScrolls = {
	  ANCHOR_REGEX: /^#[^ ]+$/,
	  OFFSET_HEIGHT_PX: 150,
  
	  /**
	   * Establish events, and fix initial scroll position if a hash is provided.
	   */
	  init: function() {
		this.scrollToCurrent();
		window.addEventListener('hashchange', this.scrollToCurrent.bind(this));
		document.body.addEventListener('click', this.delegateAnchors.bind(this));
	  },
  
	  /**
	   * Return the offset amount to deduct from the normal scroll position.
	   * Modify as appropriate to allow for dynamic calculations
	   */
	  getFixedOffset: function() {
		return this.OFFSET_HEIGHT_PX;
	  },
  
	  /**
	   * If the provided href is an anchor which resolves to an element on the
	   * page, scroll to it.
	   * @param  {String} href
	   * @return {Boolean} - Was the href an anchor.
	   */
	  scrollIfAnchor: function(href, pushToHistory) {
		var match, rect, anchorOffset;
  
		if(!this.ANCHOR_REGEX.test(href)) {
		  return false;
		}
  
		match = document.getElementById(href.slice(1));
  
		if(match) {
		  rect = match.getBoundingClientRect();
		  anchorOffset = window.pageYOffset + rect.top - this.getFixedOffset();
		  window.scrollTo(window.pageXOffset, anchorOffset);
  
		  // Add the state to history as-per normal anchor links
		  if(HISTORY_SUPPORT && pushToHistory) {
			history.pushState({}, document.title, location.pathname + href);
		  }
		}
  
		return !!match;
	  },
  
	  /**
	   * Attempt to scroll to the current location's hash.
	   */
	  scrollToCurrent: function() {
		this.scrollIfAnchor(window.location.hash);
	  },
  
	  /**
	   * If the click event's target was an anchor, fix the scroll position.
	   */
	  delegateAnchors: function(e) {
		var elem = e.target;
  
		if(
		  elem.nodeName === 'A' &&
		  this.scrollIfAnchor(elem.getAttribute('href'), true)
		) {
		  e.preventDefault();
		}
	  }
	};
  
	window.addEventListener(
	  'DOMContentLoaded', anchorScrolls.init.bind(anchorScrolls)
	);
  })(window.document, window.history, window.location);

