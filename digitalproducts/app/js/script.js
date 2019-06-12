;(function(){
    'use strict';
//CARUSEL
$('.carousel').carousel();

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



})();

$(document).ready(function(){

    $(".search-toggle").click(function(){

        $("#searchCollapse").slideToggle("slow");

        $(this).toggleClass("active");

        return false;

    });

});


//MAP

        function initMap() {
    var map;
    var mapCenter = {lat: 49.0698990, lng: 33.4028900};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 14,
            center: mapCenter,
            mapTypeId: 'roadmap',
            disableDefaultUI: true
        });

    var marker = new google.maps.Marker({
        position: mapCenter,
        map: map,
        title: 'Ikan Piranha Atas 220 C',
        icon: "img/logo-map.png"
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