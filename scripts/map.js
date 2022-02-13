let myMap;

const init = () => {

    myMap = new ymaps.Map("map", {
        center: [42.309957, -71.054785],
        zoom: 12,
        controls: []

    });

    const coords = [
        [42.328598, -71.133396],
        [42.353139, -71.069667],
        [42.349279, -71.062426],
        [42.363129, -71.033361]
    ];
    const myCollection  = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: './img/marker.svg',
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42]
    });

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord)); 
    });

    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);
