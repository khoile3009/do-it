const {MONGO_USERNAME, MONGO_PASSWORD} = require("../../config")


module.exports = {
    MONGODB : "mongodb+srv://" + MONGO_USERNAME +":" + MONGO_PASSWORD + "@doit.ddvue.mongodb.net/test?retryWrites=true&w=majority"
}