const { Query } = require("../../src/resolvers");
import User from "./models/userSchema";

const resolvers = {
    Query:{
        getUserData: async ()=> await User.find()
    }
}