import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true },
  googleId: { type: String, default: null },
  image: { type: String, default: null },
  role: { type: Number, default: 0 }
});

export default mongoose.model("User", UserSchema);
