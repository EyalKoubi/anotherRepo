// import mongoose
import mongoose from "mongoose";

// export user schema
export const usersSchema = new mongoose.Schema({
  full_name: String,
  user_name: String,
  password: String,
  isAdmin: Boolean,
});
