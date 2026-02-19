// STORAGE
function PlaceManager() {
    this.places = this.loadFromStorage();
}
PlaceManager.prototype.saveToStorage = function() {
    localStorage.setItem('placesData', JSON.stringify(this.places));
};
PlaceManager.prototype.loadFromStorage = function() {
    const saved = localStorage.getItem('placesData');
    return saved ? JSON.parse(saved) : {};
};
// ID ASSIGNER
PlaceManager.prototype.addPlace = function(place) {
    place.id = Date.now(); 
    this.places[place.id] = place;
    this.saveToStorage();
};
// PLACE CARD CONSTRUCTOR
function Place(name, county, landmarks, date, desc, rating) {
    this.name = name;
    this.county = county;
    this.landmarks = landmarks;
    this.date = date;
    this.desc = desc;
    this.rating = rating; 
    this.id = null;
}
// INITIALIZING THE SYSTEM
const myPlaces = new PlaceManager();

// RENDERING THE PLACES 
function renderPlaces() {
    var container = document.getElementById('cards-container');
    container.innerHTML = ""; // clear previous content

    var placesArr = Object.values(myPlaces.places);

    if (placesArr.length === 0) {
        container.innerHTML = "<p>No places visited yet!</p>";
        return;
    }

    placesArr.forEach(function(place) {
        var card = document.createElement('div');
        card.className = 'placeCard';
        card.style.position = 'relative';
        card.style.height = '250px';

        card.innerHTML = ''
            + '<div class="cardFront">'
            + '<h3>' + place.name + '</h3>'
            + '<p>⭐ ' + place.rating + '/5</p>'
            + '</div>'
            + '<div class="cardBack">'
            + '<h4>' + place.name + '</h4>'
            + '<p><strong>County:</strong> ' + place.county + '</p>'
            + '<p><strong>Landmarks:</strong> ' + place.landmarks + '</p>'
            + '<p><strong>Date:</strong> ' + place.date + '</p>'
            + '<p>' + place.desc + '</p>'
            + '<button onclick="handleDelete(' + place.id + ')">Delete</button>'
            + '</div>';

        container.appendChild(card);
    });
}

