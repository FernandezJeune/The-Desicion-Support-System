mapboxgl.accessToken = 'pk.eyJ1IjoibWNqZXVuZSIsImEiOiJja3FsMGN1eHYzajg2Mm5sY3V5YnR6b2kwIn0.n7rJRpeCMpL9x4M94BGWsg';

navigator.geolocation.getCurrentPosition(successLocation, 
errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position){
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation(){
    setupMap([120.5960, 16.4023])
}

function setupMap(center){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 13
    });

    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
      });
      
      map.addControl(directions, 'top-left');
}