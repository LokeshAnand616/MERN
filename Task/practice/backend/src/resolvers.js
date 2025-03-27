import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
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
        const user = await User.findOne({ name });
        if (!user) {
          throw new Error("User not found");
        }
        return user;
      } catch (error) {
        console.error("Error fetching user by name:", error);
        throw new Error("Failed to fetch user by name");
      }
    },
    getProducts: async () => {
      try {
        const products = await Product.find();
        if (!products.length) {
          throw new Error("No products found");
        }
        return products;
      } catch (error) {
        console.error("Error fetching products:", error);
        throw new Error("Failed to fetch products");
      }
    },
  },

  Mutation: {
    createUser: async (_, { userData }) => {
      try {
        const { id, name, email, password, confirmPassword } = userData;
    
        if (password !== confirmPassword) {
          throw new Error("Passwords do not match");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ id, name, email, password: hashedPassword });
        await newUser.save();
    
        return newUser; 
      } catch (error) {
        console.error("Error creating user:", error);
        throw new Error("Failed to create user");
      }
    },

    createProduct: async (_, { productData }) => {
      try {
        const { id, Product_name, Description, Price } = productData;
        const newProduct = new Product({ id, Product_name, Description, Price });

        await newProduct.save();
        return newProduct;
      } catch (error) {
        console.error("Error while creating product:", error);
        throw new Error("Failed to create product");
      }
    },

    deleteUserByID: async (_, { id }) => {
      try {
        const result = await User.findOneAndDelete({ id });

        if (!result) {
          throw new Error("User not found");
        }

        return "User deleted successfully";
      } catch (error) {
        console.error("Error while deleting user:", error);
        throw new Error("Failed to delete user");
      }
    },
    loginUser:async(_,{loginData})=>{
      try{
        const Secert = process.env.JWT_SECRET;
        const {email,password}=loginData;
        const user = await User.findOne({email});
        const isMatch = await bcrypt.compare(password,user.password)
        if(isMatch){
          const token = jwt.sign({ userName: user.name }, Secert, { expiresIn: "1h" });
          return {user,token}
        }
      }catch(err){
        console.log(err)
      }
    }
  },
};

export default resolvers;
