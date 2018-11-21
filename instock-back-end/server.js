const express = require('express');
const bodyParser = require('body-parser');
const uuidv4 = require('uuid/v4');
const morgan = require('morgan');
const cors = require('cors');

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

// callback routing methods
callback = {
    // get list of warehouses
    getAllWarehouses: {
        // insert your code here
    },
    getAllInventory: {
        // insert your code here
    },
    getWarehouseInventory: {
        // insert your code here
    },
    getInventory: {
        // insert your code here
    },
    createNewWarehouse: {
        // insert your code here
    },
    deleteItem: {
        // insert your code here
    }
}

// routes
app.route('/warehouses')
    .get(callback.getAllWarehouses)
    .post(callback.createNewWarehouse)
app.get('/inventory', callback.getAllInventory);
app.get('/warehouses/:whId', callback.getWarehouseInventory);
app.route('/inventory/:invId')
    .get(callback.getInventory)
    .delete(callback.deleteItem)


// listener
app.listen(port1, () => {
    console.log(`Hey human, CORS-enabled server is now running at port ${port1} 😏`)
})

// functions