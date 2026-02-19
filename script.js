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

