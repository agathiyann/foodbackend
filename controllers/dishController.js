const Dish = require('../models/dishModel');

const getDishes = async (req, res) => {
    try {
        const dishes = await Dish.find({});
        res.json(dishes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const togglePublishedStatus = async (req, res) => {
    try {
        const dish = await Dish.findById(req.params.id);
        if (dish) {
            dish.isPublished = !dish.isPublished;
            const updatedDish = await dish.save();
            res.json(updatedDish);
        } else {
            res.status(404).json({ message: 'Dish not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getDishes, togglePublishedStatus };
