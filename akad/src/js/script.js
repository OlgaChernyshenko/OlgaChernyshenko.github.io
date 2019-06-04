'use strict';

;(function(){
	const topline = document.querySelector('.top-line');

	function toTopBtnFn(){
		const toTopBtn = document.createElement('span');

		const addBtn = () => {
			toTopBtn.classList.add('to-top');
			document.body.appendChild(toTopBtn);
			const toTopPosition = window.innerHeight;

			toTopBtn.addEventListener('click', () => {
				window.scrollTo({
					top: 0,
					behavior: "smooth"
				});
			})
		}

		const removeBtn = () => {
			toTopBtn.remove();
		}

		return {
			addBtn: addBtn,
			removeBtn: removeBtn
		}
	}

	const btnToTop = toTopBtnFn();

	document.addEventListener('scroll', () => {
		if(window.pageYOffset < topline.clientHeight) {
			topline.classList.remove('fixed');
		} else {
			topline.classList.add('fixed');
		}

	// if(window.pageYOffset >= window.innerHeight) {
	// 	btnToTop.addBtn();
	// } else {
	// 	btnToTop.removeBtn();
	// }

	window.pageYOffset >= window.innerHeight ? btnToTop.addBtn() : btnToTop.removeBtn();
});


	
	$('.dynamic-grid').masonry({
		percentPosition: true,
		gutter: 20,
		horizontalOrder: true,
		fitWidth: true
	});



})();

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