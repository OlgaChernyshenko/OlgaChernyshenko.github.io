'use strict';

//MAP
// $(window) load (function(){

// 	});
function initMap() {

	var mapCenter = {lat: 49.050705, lng: 33.365622};
	var map = new google.maps.Map(
		document.getElementById('map'), {zoom: 14,
			center: mapCenter,
			mapTypeId: 'roadmap',
			disableDefaultUI: true
		});

	var marker = new google.maps.Marker({
		position: mapCenter,
		map: map,
		title: 'Hello',
		icon: "img/icon.png"
	});

	var marker2 = new google.maps.Marker({
		position: {lat: 49.06, lng: 33.37},
		map: map,
		title: 'Hello2',
		icon: "img/icon.png"
	});

	var infoWindowText = $('.ba-info-text').html();
	$infowindow.open ($map.$marker);

	var infowindow = new google.maps.InfoWindow({
		content: infoWindowText
	});

	marker.addListener('click', function() {
		infowindow.open(map, marker);
	});

}



//PADDING-HACK
function paddingHack(items){
	const gridWidth = $(items).parent().width();

	console.log(gridWidth);

	function setPadding(){
		$(items).each(function() {
			const img = $(this).find('img');

			console.log(img[0].naturalHeight, gridWidth, img[0].naturalHeight / gridWidth * 100);


			if(!img[0]) return;
			$(this).css({
				// position: 'relative',
				width: '100%',
				paddingTop: `${Math.floor(parseFloat(img[0].naturalHeight / gridWidth * 100))}%`
			});
			$(img).css({
				'position': 'absolute',
				'top': '0',
				'right': '0',
				'bottom': '0',
				'left': '0',
				'width': '100%',
				'height': '100%',
				'object-fit': 'cover'
			});
		});
	}

	return {
		init: setPadding
	}
}

const mansoryGridPadHack = paddingHack('.dynamic-grid__item');

mansoryGridPadHack.init();

var navigation = {

 // HEADERNAVIGATION
    $nav: document.querySelector('.nav'),
    $navTrigger: document.querySelector('.nav__trigger'),
    $navContent: document.querySelector('.nav__content'),
    $navList: document.querySelector('.nav__list'),
    transitionEnd: 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',

    init() {
    	var self = this;

        // Handle the transitions
        self.$navTrigger.addEventListener('click', function() {
        	if (!self.$navTrigger.classList.contains('is-active')) {
                // .nav--trigger active
                self.$navTrigger.classList.add('is-active');

                // .nav active
                if (!self.$nav.classList.contains('is-active')) {
                	self.$nav.classList.add('is-active');
                	self.$nav.addEventListener('transitionend', function(e) {
                		if (e.propertyName == 'width' && self.$navTrigger.classList.contains('is-active')) {
                            // .nav__content active
                            self.$navContent.classList.add('is-active');
                        }
                    });
                } else {
                	self.$navContent.classList.add('is-active');
                }

                // no-csstransitions fallback
                if (document.documentElement.classList.contains('no-csstransitions')) {
                	self.$navContent.classList.add('is-active');
                }
            } else {
                // .nav--trigger inactive
                self.$navTrigger.classList.remove('is-active');

                // .nav__content inactive
                if (self.$navContent.classList.contains('is-active')) {
                	self.$navContent.classList.remove('is-active');
                	self.$navContent.addEventListener('transitionend', function(e) {
                		if (e.propertyName == 'opacity' && !self.$navTrigger.classList.contains('is-active')) {
                            // .nav inactive
                            self.$nav.classList.remove('is-active');
                        }
                    });
                } else {
                	self.$nav.classList.remove('is-active');
                }

                // no-csstransitions fallback
                if (document.documentElement.classList.contains('no-csstransitions')) {
                	self.$nav.classList.remove('is-active');
                }
            }
        });
    }
}

navigation.init();

//ACCORDION
  $( function() {
    $( "#accordion" ).accordion();
  } );

//AREA
$( function() {
    $( "#tabs" ).tabs();
  } );