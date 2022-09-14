const Product = require('../model/product')

exports.addProduct = (async (req, res, next) => {
    
    const product = await Product.create(req.body);

    res.status(201).json({
        sucess: true,
        product
    });

})

exports.getProduct = (async (req, res, next) => {
    
    const product = await Product.find();

    res.status(200).json({
        sucess:true,
        product
    });

})

exports.getProductById = (async (req, res, next) => {
    
    const product = await Product.findById(req.query.id);

    res.status(200).json({
        sucess:true,
        product
    });

})

exports.deleteProductById = (async (req, res, next) => {
    
    const product = await Product.findByIdAndDelete(req.query.id);

    res.status(200).json({
        sucess:true,
    });

})
