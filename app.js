const express = require("express");
const { MongoClient} = require("mongodb");
const dotenv = require("dotenv");

console.log(process.env);
dotenv.config();

let db
const app = express();

app.use(express.json());

app.get("/", function(req, res){
    res.send("Hello");
});

app.get("/api/contacts" , function(req, res) {
    db.collection("Contact_details").find({}).toArray((err, result) => {
        if(err) throw err
        res.send(result);
    });
});

const client = new MongoClient(`mongodb+srv://newuser:${process.env.DB_PASSWORD}@cluster0.hiope.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);

client.connect().then(function(mClient) {
    db = mClient.db();
    console.log("MongoDB connection is successful");

    db.collection("Contact_details").insertOne({
        "name" :"ABC",
        "phone": "123456",
        "email":"abc@mail.com",
    
        "portfolio": "https://abc.com/",
    
    })
    .then(() => {
        console.log("New contact was added");
    });

    app.listen(7000 , function(){
    console.log("Server started on port 7000");
    });
});