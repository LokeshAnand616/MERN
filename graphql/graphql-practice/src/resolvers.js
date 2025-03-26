import User from "./models/userSchema.js";

const resolvers = {
  Query: {
    getUserData: async () => await User.find(),
  },
  Mutation: {
    createUser: async (_, { name, email, password }) => {
      const newUser = new User({ name, email, password});

      return await newUser.save();
    },
  },
};

export default resolvers;
