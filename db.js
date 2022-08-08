const mongoose = require('mongoose');

var mongoUrl = "mongodb+srv://"+process.env.NAME+":"+process.env.PASSWORD+"@cluster0.nnwh40p.mongodb.net/mern-pizza";

mongoose.connect(mongoUrl, {useUnifiedTopology: true, useNewUrlParser: true});

var db = mongoose.connection

db.on("connected", ()=> {
    console.log((`mongodb connection is succesfull`))
})

db.on("error", (err)=>{
    console.log(`db connection error: ${err}`)
})

module.exports = mongoose;