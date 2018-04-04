const assert = require('assert');
const Store = require('../lib/store.js');


describe('in memory database', () =>{

    const movies = new Store();

    it('save', () => {
        let newMovie = { title: 'Moulin Rouge (2001)', director: 'Baz Luhrmann', duration: '2h 7min', genre: 'Drama, Musical, Romance', awards: '2 Oscars' }
      
    
        movies.save(newMovie);
        console.log(newMovie);

    })

    it('get', () => {


    })

    it('getAll', () =>{


    })

    it('remove', () =>{


    })




});