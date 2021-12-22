let myMap;
const ymaps = document.querySelector('#map ymaps');

const init = () => {
  myMap = new ymaps.Map('map', {
    center: [55.75521972051079, 37.54801802337153], // Координаты центра карты
    zoom: 13, // Маштаб карты
  });

  myMap.controls.add(
    new ymaps.control.ZoomControl(), // Добавление элемента управления картой
  );
  // Координаты метки объекта
  const myPlacemark = new ymaps.Placemark([55.75570374299158, 37.60277800261957], {
    balloonContent: "<div class='ya-map'>Встречаемся тут!</div>", // Подсказка метки
  }, {
    preset: 'twirl#redDotIcon', // Тип метки
  });

  myMap.geoObjects.add(myPlacemark); // Добавление метки
  myPlacemark.balloon.open(); // Открытие подсказки метки
};

ymaps.ready(init);
