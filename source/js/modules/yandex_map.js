export function init(){
    var myMap;
    var placemark;
    myMap = new ymaps.Map("yandex-map", {
        center: [59.93873589, 30.32411152],
        zoom: 17,
        controls: ["zoomControl","trafficControl"],
        behaviors: ["drag"]
    });

    placemark = new ymaps.Placemark([59.93882521, 30.32288495], {
        hintContent: "CatEnergy",
        balloonContent: "ул. Большая Конюшенная 19/8,<br> Санкт-Петербург"
    },
    {
        iconLayout: "default#image",
        iconImageHref: "../img/map_pin.svg",
        iconImageSize: [113, 106]
    });

    myMap.geoObjects.add(placemark);
}
