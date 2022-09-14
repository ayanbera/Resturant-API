const express = require('express')
const router = express.Router();

const { addProduct, getProduct, getProductById, deleteProductById } = require('../controllers/productController');

router.post('/product', addProduct);
router.get('/product', getProduct);
router.get('/product/:id', getProductById);
router.delete('/product/:id', deleteProductById);

module.exports = router;