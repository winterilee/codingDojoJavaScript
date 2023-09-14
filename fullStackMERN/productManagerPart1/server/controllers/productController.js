const Product = require("../models/productModel");

module.exports = {
    getAllProducts: (req, res) => {
        Product.find()
            .then((allProducts) => res.json(allProducts))
            .catch((err) => res.json(err))
    },

    createProduct: (req, res) => {
        Product.create(req.body)
            .then((newProduct) => res.json(newProduct))
            .catch((err) => res.json(err))
    },

    getOneProduct: (req, res) => {
        Product.findById(req.params.id)
            .then((oneProduct) => res.json(oneProduct))
            .catch((err) => res.json(err))
    },

    updateProduct: (req, res) => {
        Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then((updatedProduct) => res.json(updatedProduct))
            .catch((err) => res.json(err))
    },

    deleteProduct: (req, res) => {
        Product.findByIdAndDelete(req.params.id)
            .then((result) => res.json({ result: result }))
            .catch((err) => res.json(err))
    }
};