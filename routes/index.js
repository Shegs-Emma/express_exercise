const express = require('express');
const router = express.Router();

const items = [];
var id = 1;

// This should respond with a list of shopping items.
router.get('/items', (req, res, next) => {
    res.status(200).json(items);
});

// This route should accept form data and add it to the shopping list.
router.post('/items', (req, res, next) => {
    items.push({
        itemName: req.body.itemName,
        itemPrice: req.body.price,
        id: ++id
    });
    res.status(201).json({message: "Item added successfully"});
});

//This route should display a single item's name and price
router.get('/items/:id', (req, res, next) => {
    const item = items.find( item => item.id === +req.params.id);
    res.status(200).json(item);
});

// This route should accept edits to existing items.
router.patch('/items/:id', (req, res, next) => {
    const item = items.find( item => item.id === +req.params.id );
    item.itemName = req.body.itemName;
    item.itemPrice = req.body.price;

    res.status(201).json({message: "Item updated succeessfully!"});
});

// This route should allow you to delete a specific item from the array.
router.delete('/items/:id', (req, res, next) => {
    const itemIndex = items.findIndex( item => item.id === +req.params.id );
    items.splice(itemIndex, 1);

    res.status(200).json({message: "Item deleted successfully!"});
});


module.exports = router;