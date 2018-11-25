const express = require('express');
const bodyParser = require('body-parser');
const uuidv4 = require('uuid/v4');
const morgan = require('morgan');
const cors = require('cors');
const inventoryData = require('./data/inventoryData.json');
const warehouseData = require('./data/warehouseData');

// instantiate server and assign to variable app
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
const errorMsg = {
    api_key: { Error: 'An authentication key is required. Please provide a valid API key query parameter' },
    locationNotFound: { Error: 'Warehouse ID not found. Please provide a valid warehouse ID' },
    itemNotFound: { Error: 'Item ID not found. Please provide a valid item ID' },
    server: { Error: 'The server cannot handle your request at the moment. Please try again later.' }
}

// callback routing methods
const callback = {
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
        const req_key = req.query.api_key;
        const { whId } = req.params;
        const targetWhouse = warehouseData.find((wHouse) => wHouse.id === whId); /* !need the updated inventory data */
        if (!req_key || !api_key.includes(req_key)) {
            res.status(401).json(errorMsg.api_key)
        } else if (!targetWhouse) {
            res.status(404).json(errorMsg.locationNotFound)
        } else {
            try {
                let targetInventory = inventoryData.filter((item) => item.whId === whId)
                res.json(targetInventory);
            } catch(err) {
                res.status(501).json(errorMsg.server)
            }
        }
    },
    getInventoryDetails: (req, res, next) => {
        // insert your code here
        const req_key = req.query.api_key;
        const { invId } = req.params;
        const targetItem = inventoryData.find((item) => item.id === invId);
        if (!req_key || !api_key.includes(req_key)) {
            res.status(401).json(errorMsg.api_key)
        } else if (!targetItem) {
            res.status(404).json(errorMsg.itemNotFound)
        } else {
            try {
                res.json(targetItem);
            } catch(err) {
                res.status(501).json(errorMsg.server)
            }
        }
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