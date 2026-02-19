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

