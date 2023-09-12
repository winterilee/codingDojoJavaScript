const Jokes = require("../models/jokesModel");

module.exports = {

    getAllJokes: (req, res) => {
        Jokes.find()
            .then(allJokes => res.json(allJokes))
            .catch(err => console.log(err));
    },
    
    createJoke: (req, res) => {
        Jokes.create(req.body)
            .then(newJoke => res.json(newJoke))
            .catch(err => console.log(err));
    },

    getJokeById: (req, res) => {
        Jokes.findById(req.params.id)
            .then(oneJoke => res.json(oneJoke))
            .catch(err => console.log(err));
    },

    updateJoke: (req, res) => {
        Jokes.findByIdAndUpdate(req.params.id, req.body, {new: true})
            .then(updatedJoke => res.json(updatedJoke))
            .catch(err => console.log(err));
    },

    deleteJoke: (req, res) => {
        Jokes.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => console.log(err));
    }
};


