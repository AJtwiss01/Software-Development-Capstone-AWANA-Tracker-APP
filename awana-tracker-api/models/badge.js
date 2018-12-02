const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const badgesSchema = new Schema({
    badgeId: String,
    name: String,
    url: String,

});

module.exports = mongoose.model('Badge', badgesSchema);