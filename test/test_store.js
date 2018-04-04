const assert = require('assert');
const Store = require('../lib/store.js');


describe('in memory database', () =>{

    let id; //declare a variable id to be called in other test functions.

    const movies = new Store();

    it('save', () => {
        let newMovie = { title: 'Moulin Rouge (2001)', director: 'Baz Luhrmann', duration: '2h 7min', genre: 'Drama, Musical, Romance', awards: '2 Oscars' }
      
        let result = movies.save(newMovie); //result now equals the object "item" generated 
                                            //from the save function is store.js

        id = result._id; //set your outer scoped id variable to the _.id of the result object, so you can use it later
        assert.ok(result._id);
        console.log(result);

    })

    it('get', () => {



    })

    it('getAll', () =>{


    })

    it('remove', () =>{


    })




});