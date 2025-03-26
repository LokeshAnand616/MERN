import Product from "./models/product.js";
import User from "./models/user.js";

const resolvers = {
  Query: {
    getUser: async () => {
      try {
        return await User.find(); 
      } catch (error) {
        console.error("Error fetching users:", error);
        throw new Error("Failed to fetch users");
      }
    },
    getUserByName: async (_, { name }) => {
        try {
          const user = await User.findOne({name});
          if (!user) {
            throw new Error("User not found");
          }
          return user;
        } catch (error) {
          console.error("Error fetching user by ID:", error);
          throw new Error("Failed to fetch user by ID");
        }
      }
    },

  Mutation: {
    createUser: async (_, { userData }) => {  
      try {
        const {id, name, email, password } = userData;

        const newUser = new User({ id,name, email, password });
        await newUser.save();

        return newUser;
      } catch (error) {
        console.error("Error creating user:", error);
        throw new Error("Failed to create user");
      }
    },
    createProduct:async(_,{productData})=>{
      try{
        const{id,Product_name,Description,Price}=productData;
        const newProduct = new Product({id,Product_name,Description,Price});
        await newProduct.save();
        return newProduct;
      }catch(err){
        console.log("Error while creating product")
      }
    },
    deleteUserByID:async(_,{id})=>{
        try{
            await User.deleteOne({id});
        }catch(err){
            console.log("error while deleting user by id")
        }
    }
  }
};

export default resolvers;
