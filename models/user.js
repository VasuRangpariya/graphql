const { model, Schema } = require("mongoose");
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    country_code: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    user_status: {
      type: String,
      enum: ["online", "offline"],
      required: true,
      default: "offline",
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      required: true,
      default: "active",
    },
  },
  { timestamps: true }
);
const User = model("User", userSchema);
module.exports = User;
