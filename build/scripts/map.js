ymaps.ready(init); 
	var myMap;
	
	function init() {
	
		myMap = new ymaps.Map("map", {
			center: [55.75521972051079,37.54801802337153], // Координаты центра карты[55.75521972051079,37.54801802337153]
			zoom: 13 // Маштаб карты
		}); 
	
		myMap.controls.add(
			new ymaps.control.ZoomControl()  // Добавление элемента управления картой
		); 
	
		myPlacemark = new ymaps.Placemark([55.75570374299158,37.60277800261957], { // Координаты метки объекта
			balloonContent: "<div class='ya-map'>Встречаемся тут!</div>" // Подсказка метки
		}, {
			preset: "twirl#redDotIcon" // Тип метки
		});
		
		myMap.geoObjects.add(myPlacemark); // Добавление метки
		myPlacemark.balloon.open(); // Открытие подсказки метки
		
	};