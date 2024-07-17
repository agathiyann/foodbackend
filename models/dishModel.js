const mongoose = require('mongoose');

const dishSchema = mongoose.Schema({
    dishId: { type: String, required: true, unique: true },
    dishName: { type: String, required: true },
    imageUrl: { type: String, required: true },
    isPublished: { type: Boolean, required: true, default: false },
}, {
    timestamps: true,
});

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;
