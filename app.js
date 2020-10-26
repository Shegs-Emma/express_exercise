const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const shopRoutes = require('./routes');

app.use(bodyParser.json());
app.use(shopRoutes);

app.get("/", (req, res) => {
    res.json('Starting the app');
})

app.listen(3000, () => {
    console.log('Server is running...');
});