
const User = require("../models/user");

const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../configs/jwtConfig');


const emailExists = async (email) => {
    let doc = await User.exists({
        email: email
    })
    return doc;

}

const getUser = async (token) => {

    try{
        let payload = jwt.verify(token, jwtSecret);
        return await User.findById(payload.id);
    }
    catch (err) {
        return null; 
    }
}



const parseUserInfo = (user) => {
    return {
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,   
    }
}

module.exports = { emailExists, getUser, parseUserInfo }