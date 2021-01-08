const { getUser } = require("../utils/authentication");

const contexts = async ({req}) => {
    // console.log(req.headers);
    const token = req.headers.authorization || '';
    const user = await getUser(token);
    // console.log(user)
    return {user, token};

}

module.exports = contexts;
