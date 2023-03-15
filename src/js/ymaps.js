import ymaps from 'ymaps'

let mapInited = false;

function init() {
    window.addEventListener('scroll', mapsInit, { once: true })
    document.addEventListener('click', mapsInit, { once: true })
    setTimeout(mapsInit, 2000)
}

function mapsInit() {
    if (mapInited) return;
    mapInited = true

    ymaps.load('https://api-maps.yandex.ru/2.1/?lang=ru_RU').then(maps => {
        const coords = [45.040661, 38.988896]
        let center = [coords[0], coords[1] - (0.005 * screen.width / 1920)]

        if (screen.width < 1200) {
            center = [coords[0] - 0.003, coords[1]]
        }

        const placemarkSize = (screen.width < 1200) ? 110 : 148

        const map = new maps.Map('contact-map', {
            center: center,
            zoom: 16

        })

        const placemark = new maps.Placemark(coords, {}, {
            iconLayout: 'default#image',
            iconImageHref: '../img/geo.png',
            iconImageSize: [placemarkSize, placemarkSize],
            iconImageOffset: [-(placemarkSize / 2), -(placemarkSize / 2)]

        })
        map.controls.remove('geolocationControl')
        map.controls.remove('searchControl')
        map.controls.remove('trafficControl')
        map.controls.remove('typeSelector')
        map.controls.remove('fullscreenControl')
        map.controls.remove('zoomControl')
        map.controls.remove('rulerControl')
        map.behaviors.disable(['scrollZoom'])
        map.geoObjects.add(placemark)
    });
}

export default { init }