const users = []; // In-memory array for demonstration

const resolvers = {
  users: () => users,
  user: ({ id }) => users.find(user => user.id === id),
  
  createUser: ({ name, email }) => {
    const user = { id: `${users.length + 1}`, name, email };
    users.push(user);
    return user;
  },
  
  updateUser: ({ id, name, email }) => {
    const user = users.find(user => user.id === id);
    if (!user) throw new Error("User not found");
    if (name) user.name = name;
    if (email) user.email = email;
    return user;
  },
  
  deleteUser: ({ id }) => {
    const index = users.findIndex(user => user.id === id);
    if (index === -1) throw new Error("User not found");
    users.splice(index, 1);
    return "User deleted successfully";
  },
};

module.exports = resolvers;
