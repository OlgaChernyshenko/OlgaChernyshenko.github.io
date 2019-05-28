;(function(){
    'use strict';

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

const mansoryGridPadHack = paddingHack('.img-wrapp');

mansoryGridPadHack.init();

var navigation = {


 // HEADER NAVIGATION
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
                	self.$nav.List.remove('is-active');
                }

            }
        });
    }
}

navigation.init();

//ACCORDION
$( function() {
    $( "#accordeon" ).accordion();
} );

//AREA
$( function() {
    $( "#tabs" ).tabs();
} );

//MENSORY
// init Masonry
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer'
});
// layout Masonry after each image loads
// $grid.imagesLoaded().progress( function() {
//   $grid.masonry();
// });

})();

//MAP

        function initMap() {
    var map;
    var mapCenter = {lat: 49.069036, lng: 33.402966};
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

};

// счетчик

        // const data = {
        //     tourists: 93,
        //     tickets: 9589,
        //     clients: 11567,
        //     comments: 534
        // };

        // const tourists = document.querySelector('.tourists');
        // const tickets = document.querySelector('.tickets');
        // const clients = document.querySelector('.clients');
        // const comments = document.querySelector('.comments');


        // function fakeCounter(targetNode) {
        //     let count = Math.ceil(data[targetNode.className] / 1000);
        //     if(count >= 10) {
        //         count *= 2;
        //     } else if(count >= 20) {
        //         count *= 3;
        //     }
        //     let i = 1;
        //     let interval = setTimeout(function counter(){
        //         targetNode.innerText = i;
        //         i = i + count;
        //         if(i > data[targetNode.className]) {
        //             targetNode.innerText = data[targetNode.className];
        //             clearInterval(interval);
        //             return;
        //         }
        //         interval = setTimeout(counter, 1);
        //     }, 1);
        // }

        // fakeCounter(tourists);
        // fakeCounter(tickets);
        // fakeCounter(clients);
        // fakeCounter(comments);