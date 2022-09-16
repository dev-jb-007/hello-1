const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter service name"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Please enter service description"]
    },
    requirements:{
        type:String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Service', serviceSchema);