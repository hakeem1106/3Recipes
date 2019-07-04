const mongoose = require('mongoose')
const schema = mongoose.Schema

const recipe = new Schema({
    "recipeID" : {
        type: Number
    }, //recipe ID stored as an integer that will gradually increase
    "recipeName" : {
        type: String
    },
    "recipeAuthor" :{
        type: String
    }, //this one is not really set in stone, we could just use the ID of the user, but that may complicate things
    "ingredients" : {
        type:  [String]
    }, //each item stored in an array to dynamically hold any number of ingrediants, could be searchable by ingrediant name
    "prepTime" : {
        type: Number
    }, //time in minutes
    "backGround" : {
        type: String
    }, //this came from my great great grandmother when she rode the mayflower from Poland etc
    "steps" : {
        type: [String]
    }, //each step stored inside an array to dynamically fit the number of steps
    "otherNotes" : {
        type: String
    }
})