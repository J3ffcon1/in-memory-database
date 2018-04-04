

class Movie {
    constructor(id, title, duration, genre, awards) {
        this._id = _id;
        this.title = title;
        this.director = director
        this.duration = duration;
        this.genre = genre;
        this.awards = awards;
    }
}

const store = new Movie();

store.save({title: 'Moulin Rouge (2001)', director:'Baz Luhrmann', duration: '2h 7min', genre:'Drama, Musical, Romance', awards:'2 Oscars'});
store.save({title:'Black Panther (2018)', director:'Ryan Coogler', duration:'2h 14min', genre:'Acton, Adventure, Sci-Fi', awards:'14 nominations'});