const express = require('express');
const graphHTTP = require('express-graphql')
const schema = require("./schema/schema")
const mongoose = require("mongoose")
const app = express();


mongoose.connect('mongodb://aj:test123@ds115664.mlab.com:15664/ggl-ninja')
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})
app.use('/graphql', graphHTTP({
schema,
graphiql: true
}))
app.listen(4000, () => {
    console.log('now listening for requests on port 4000 my learning ');
});
