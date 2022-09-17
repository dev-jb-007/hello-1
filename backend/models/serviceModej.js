const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter service name"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Please enter service description"]
    },
    requirements:[
        {
            key:String,
            value:Number
        }
    ],
    cost:{
        type:Number,
        required:true
    },
    purchasedBy: {
        type: String,
        required:true
    },
    contactTo:Number,
    Status:{
        type:Boolean,
        default:false
    }
});

module.exports = mongoose.model('Service', serviceSchema);