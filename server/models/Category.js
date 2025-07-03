const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        trim:true
    },
    content:{
        type: String,
        required: true,
        trim: true

    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
}
);
module.exports = mongoose.model('category', categorySchema)