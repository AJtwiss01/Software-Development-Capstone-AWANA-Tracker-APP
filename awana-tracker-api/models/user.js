const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    age: Number,
    userType: String,
    classId: String,
    badge1: String,
    badge2: String,
    badge3: String,
    badge4: String,
    badge5: String,
    badge6: String
});

module.exports = mongoose.model('User', userSchema);