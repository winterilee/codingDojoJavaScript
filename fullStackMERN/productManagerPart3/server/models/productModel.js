const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: [true, "Product requires a title"] },
        price: { type: Number, required: [true, "Product requires a price"] },
        description: {
            type: String,
            maxLength: [200, "Description cannot be over 200 characters"]
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
