const shortid = require('shortid');

class Movie {
    constructor() {
        this.store = [];
    }
}
    save(object) {
        object._id: shortid.generate();
        this.store.push(object);
    }

const movie = new Movie();

movie.save({_id: shortid.generate(), title: 'Moulin Rouge (2001)', director:'Baz Luhrmann', duration: '2h 7min', genre:'Drama, Musical, Romance', awards:'2 Oscars'});
movie.save({_id: shortid.generate(), title:'Black Panther (2018)', director:'Ryan Coogler', duration:'2h 14min', genre:'Acton, Adventure, Sci-Fi', awards:'14 nominations'});