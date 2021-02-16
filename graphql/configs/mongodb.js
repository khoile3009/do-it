const {MONGO_USERNAME, MONGO_PASSWORD} = require("../config");

console.log("mongodb+srv://" + MONGO_USERNAME +":" + MONGO_PASSWORD + "@doit.ddvue.mongodb.net/test?retryWrites=true&w=majority")


module.exports = {
    MONGODB : "mongodb+srv://" + MONGO_USERNAME +":" + MONGO_PASSWORD + "@cluster0.uvvnb.mongodb.net/test?retryWrites=true&w=majority"
}