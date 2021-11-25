const mongoose = require('mongoose')
const Schema = mongoose.Schema

var Category = mongoose.model('Category')

const Disease = new Schema({
    name: {type: String},
    description: {type: String},
    category: {type: Category},
})

module.exports = mongoose.model('Disease', Disease)