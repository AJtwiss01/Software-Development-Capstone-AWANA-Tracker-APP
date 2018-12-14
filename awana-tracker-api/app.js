const express = require('express');
const graphHTTP = require('express-graphql')
const schema = require("./schema/schema")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express();


//allow cors
app.use(cors())

mongoose.connect('mongodb://testUser:test123@ds235411.mlab.com:35411/awana-tracker')
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})
app.use('/graphql', graphHTTP({
schema,
graphiql: true
}))
app.listen(process.env.PORT ||4000, () => {
    console.log('now listening for requests on port 4000 my learning ');
});
