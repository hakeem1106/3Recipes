require('dotenv').config()
const   express = require('express'),
        router = express.Router()
        recipes = require('../models/recipeObject').recipe

        mongoclient = require('mongodb').MongoClient //mongoclient reference
        url = 'I literally cannot tell where the db url is'; //no really, I can't


router.get('/',(req, res)=>{

})

//You guys have the structures in a very odd way, 
//this is more or less the basis of a recipe insert from what I can tell
router.post('/insert', function(req, res, next) {

    mongoclient.connect(url, function(err, db) {
        
        var dbo = db.db("mydb") //db name here
        if (err) throw err;

        var obj = {};//references to form data and schema go here
    
        dbo.collection("").insertOne(myobj, function(err, res) { //same deal with the table name
            if (err) throw err;
            console.log("recipe added to db");
            db.close();
        });
    })
})


module.exports = router;