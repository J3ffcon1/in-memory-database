const shortid = require('shortid');

module.exports = class Store {
    constructor() {
        this.store = [];
    }

    save(data) {
        let item = {};

        for(let prop in data){
        item[prop] = data[prop];
        }
        
        item._id = shortid.generate(); 
        this.store.push(item);
        return item;
    } // this is saving the data to another object and returning that object

    get(_id){
       let objArray = [];

    }

    getAll(){

    }
    remove(_id){

    }
};
// const movie = new Movie();

// movie.save({_id: shortid.generate(), title: 'Moulin Rouge (2001)', director:'Baz Luhrmann', duration: '2h 7min', genre:'Drama, Musical, Romance', awards:'2 Oscars'});
// movie.save({_id: shortid.generate(), title:'Black Panther (2018)', director:'Ryan Coogler', duration:'2h 14min', genre:'Acton, Adventure, Sci-Fi', awards:'14 nominations'});