ymaps.ready(init);
function init() {
    const mapElem = document.querySelector('#map');
    const myMap = new ymaps.Map(
        "map",
        {
            center: [55.785751, 37.633284],
            zoom: 14,
            controls: []
        },
        {
            suppressMapOpenBlock: true,
        }
    );

    myMap.behaviors.disable('scrollZoom');

    const myPlacemark = new ymaps.Placemark(
        [55.785751, 37.633284],
        {},
        {
            iconLayout: "default#image",
            iconImageHref: "img/subtract.png",
            iconImageSize: [28, 40],
            iconImageOffset: [-20, -40],
        }
    );

    myMap.geoObjects.add(myPlacemark);
    myMap.container.fitToViewport();
}