import mongoose from "mongoose";
import gravatar from "gravatar";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    avatar: {
      type: String,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
    },
    token: {
      type: String,
    },
    googleId: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.methods.setAvatarURL = async function (email) {
  this.avatar = await gravatar.url(email, { s: "100" });
};

export const User = mongoose.model("User", userSchema);
