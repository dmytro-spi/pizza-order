const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    email: {type: String, required: true, unique: true}, //обязательный и уникальный
    password: {type: String, required: true},
    cart: [{type: Types.ObjectId, ref: 'Product'}],
})

module.exports = model('User', schema)