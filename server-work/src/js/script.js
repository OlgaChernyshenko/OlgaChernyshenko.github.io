	;(function(){
		// 'use strict';

		function StorageHelper(){
			this.get = (key) => {
				return JSON.parse(localStorage.getItem(key));
			}
			this.set = (key, value) => {
				localStorage.setItem(key, JSON.stringify(value));
			}
			this.remove = (key) => {
				localStorage.removeItem(key);
			}
		}

		const Storage = new StorageHelper();

		const PRODUCTS_NODE = document.querySelector('.products');

		const PRODUCTS_READY_EVENT_NAME = 'productsReady';

		let event = new Event(PRODUCTS_READY_EVENT_NAME); // создаём собственное событие о готовности списка продуктов

		const createProductList = () => { // функция создающая список продуктов из локального хранилища
			const productsList = Storage.get('products');
			productsList.forEach(product => {
				const item = document.createElement('li');
				item.innerHTML = `<span>${product.name} ${product.price} ${product.category}</span>`;
				PRODUCTS_NODE.appendChild(item);
			});
		};

		document.addEventListener(PRODUCTS_READY_EVENT_NAME, createProductList); // вешаем слушатель события Готовности продуктового списка на документ

		const PRODUCTS_LIST_NODE = document.querySelector('.products');
		const xhr = new XMLHttpRequest();

		xhr.onreadystatechange  = () => {
			if(xhr.readyState  !== 4) return;
			const data = JSON.parse(xhr.responseText);
			Storage.set('products', data.products);
			document.dispatchEvent(event); // инициируем событие Готовности списка продуктов
		}

		xhr.open('GET','http://my-json-server.typicode.com/davaynamore/fakeserver/db', true);

		xhr.send();

		// FETCH VERSION
		// const getProducts = (url) => {
		// 	return fetch(url);
		// }

		// getProducts('http://my-json-server.typicode.com/davaynamore/fakeserver/db')
		// .then(
		// 	function(response) {
		// 		if (response.status !== 200) {
		// 			console.log(`Looks like there was a problem. Status Code: ${response.status}`);
		// 			return;
		// 		}


		// 		response.json()
		// 		.then(function(data) {
		// 			Storage.set('products', data.products);
		// 			document.dispatchEvent(event); // инициируем событие Готовности списка продуктов
		// 		});
		// 	}
		// 	)
		// .catch(function(err) {
		// 	console.log('Fetch Error :-S', err);
		// });

		const data = {
			tourists: 93,
			tickets: 9589,
			clients: 11567,
			comments: 534
		};

		const tourists = document.querySelector('.tourists');
		const tickets = document.querySelector('.tickets');
		const clients = document.querySelector('.clients');
		const comments = document.querySelector('.comments');


		function fakeCounter(targetNode) {
			let count = Math.ceil(data[targetNode.className] / 1000);
			if(count >= 10) {
				count *= 2;
			} else if(count >= 20) {
				count *= 3;
			}
			let i = 1;
			let interval = setTimeout(function counter(){
				targetNode.innerText = i;
				i = i + count;
				if(i > data[targetNode.className]) {
					targetNode.innerText = data[targetNode.className];
					clearInterval(interval);
					return;
				}
				interval = setTimeout(counter, 1);
			}, 1);
		}

		fakeCounter(tourists);
		fakeCounter(tickets);
		fakeCounter(clients);
		fakeCounter(comments);

	})();