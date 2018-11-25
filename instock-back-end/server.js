const express = require('express');
const bodyParser = require('body-parser');
const uuidv4 = require('uuid/v4');
const morgan = require('morgan');
const cors = require('cors');
const inventoryData = require('./data/inventoryData.json');
const warehouseData = require('./data/warehouseData');

const app = express();
const port1 = 8080;


const api_key = ['badgers', 'david', 'edward', 'scott'];

// middlewares
app.use(cors({
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"]
}));
app.use(morgan('common'));
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// error msgs
const apiKeyErrorMsg = {
    Error: 'An authentication key is required. Please provide a valid API key query parameter'
};

// callback routing methods
callback = {
    // get list of warehouses
    getAllWarehouses: (req, res, next) => {
        res.json(warehouseData)
    },
    getAllInventory: (req, res, next) => {
        // insert your code here
        res.json(inventoryData);
    },
    getWarehouseInventoryList: (req, res, next) => {
        // insert your code here
    //     const req_key = req.query.api_key;
    //     const { whId } = req.params;
    //     const targetWhouse = warehouseData.find((video) => video.id === vidId);
    //     if (!req_key || !api_key.includes(req_key)) {
    //         res.status(401).json(apiKeyErrorMsg)
    //     } else if ()
    },
    getInventoryDetails: (req, res, next) => {
        // insert your code here
    },
    createNewWarehouse: (req, res, next) => {
        // insert your code here
    },
    deleteItem: (req, res, next) => {
        // insert your code here
    }
}

// routes
app.route('/warehouses')
    .get(callback.getAllWarehouses)
    .post(callback.createNewWarehouse)
app.get('/inventory', callback.getAllInventory);
app.get('/warehouses/:whId', callback.getWarehouseInventoryList);
app.route('/inventory/:invId')
    .get(callback.getInventoryDetails)
    .delete(callback.deleteItem)


// listener
app.listen(port1, () => {
    console.log(`Hey human, CORS-enabled server is now running at port ${port1} 😏`)
})