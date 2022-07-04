const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String, maxLength: 255},
    description: {type: String},
    image: {type: String},
    videoID: {type:String},
    slug: {type: String},
    
}, {
    timestamps: true,
});

module.exports = mongoose.model('Course', Course)