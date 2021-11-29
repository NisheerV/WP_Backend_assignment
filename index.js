const express = require("express");
// const { MongoClient} = require("mongodb");
// const ejs = require("ejs");

const app = express();

app.set("veiw engine", "ejs");

app.get("/", function(req, res){
    res.render("index");
});

app.listen(7000, function(){
    console.log("Server started on port 7000");
});

// const client = new MongoClient(`mongodb+srv://newuser:${process.env.DB_PASSWORD}@cluster0.hiope.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);

// client.connect().then((mClient) => {
//     const db = mClient.db();
    
//     db.collection("Contact_details").insertOne({
//         "name" :"Nisheer V",
//         "phone": "6289202677",
//         "email":"nisheer.v@gmail.com",
    
//         "portfolio": "https://nisheerv.github.io/",
    
//     })
//     .then(() => {
//         console.log("New contact was added");
//     });
// });

