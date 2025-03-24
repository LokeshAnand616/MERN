const users = []; // Temporary in-memory array for users

const resolvers = {
  Query: {
    users: () => users,
    user: (_, { id }) => users.find(user => user.id === id),
  },
  Mutation: {
    createUser: (_, { name, email }) => {
      const user = { id: `${users.length + 1}`, name, email };
      users.push(user);
      return user;
    },
    updateUser: (_, { id, name, email }) => {
      const user = users.find(user => user.id === id);
      if (!user) throw new Error("User not found");
      if (name) user.name = name;
      if (email) user.email = email;
      return user;
    },
    deleteUser: (_, { id }) => {
      const index = users.findIndex(user => user.id === id);
      if (index === -1) throw new Error("User not found");
      users.splice(index, 1);
      return "User deleted successfully";
    },
  },
};

module.exports = resolvers;
