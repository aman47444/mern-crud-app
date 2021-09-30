const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: String,
    },
    dob: {
        type: String,
    },
    company: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = User = mongoose.model('users', UserSchema)
// const User = new mongoose.model('User', UserSchema)
// module.exports = User;