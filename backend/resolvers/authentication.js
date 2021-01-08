const { emailExists } = require("../utils/authentication");
const { UserInputError, AuthenticationError } = require('apollo-server');
const bcrypt = require('bcrypt');
const User = require("../models/user");

const SALT_ROUNDS = 12;

const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../configs/jwtConfig')


const authentication = {
    Query: {
        retrieveUser: async (parent, args, context) => {
            if(context.user === null){
                throw new AuthenticationError("Invalid token");
            }
            return {
                email: context.user.email,
                id: context.user.id,
                token: context.token
            }
        }
    },
    Mutation: {
        register: async (parent, args, context) => {
            const exists = await emailExists(args.registerInput.email);
            if (exists) {
                throw new UserInputError("Email existed");
            }
            else {
                const hashedPassword = await bcrypt.hash(args.registerInput.password, SALT_ROUNDS)
                const user = await User.create({
                    email: args.registerInput.email,
                    password: hashedPassword,
                    first_name: args.registerInput.first_name,
                    last_name: args.registerInput.last_name
                })
                console.log(jwtSecret)
                const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: '1y' });
                return {
                    email: user.email,
                    id: user.id,
                    token: token
                }
            }

        },

        emailExists: async (parent, args, context) => {
            const exists = await emailExists(args.email);
            console.log(exists);
            return exists
        },

        login: async (parent, args, context) => {
            const user = await User.findOne({
                email: args.loginInput.email
                } 
            )
            if (user === null) {
                throw new UserInputError("User not existed");
            }
            console.log(user)
            console.log(args.loginInput.password + user.password)
            // console.log(await bcrypt.hash(args.loginInput.password, SALT_ROUNDS))
            const match = await bcrypt.compare(args.loginInput.password, user.password)
            if (!match) {
                throw new UserInputError("Email/password do not match");
            }
            else {
                const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: '1y' });
                return {
                    email: user.email,
                    id: user.id,
                    token: token
                }
            }
        }

    }
};

// login: (parent, args, context) => {

// }



module.exports = authentication;