const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { 
        type:String,
        required: [ true, "Enter Foods name"],
        trim: true,
    },
    price:{
        type:Number,
        required: [true, 'Please Enter product price'],
        maxLength : [100, 'Product price cannot exceed 100 character'],
        default: 0.0
    },
    description:{
        type:String,
        required: [true, 'Please enter product description'],
        maxLength : [100, 'Product description cannot exceed 100 character'],
        default: 0.0
    },
    ratings: {
        type: Number,
        default: 0
    },
    // user: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: 'User',
    //     required: true

    // },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Product', productSchema);