const User = require("../../models/user");
const jwt = require("jsonwebtoken");

module.exports = {
  Query: {
    async getUser() {
      try {
        const user = await User.find();
        return user;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Mutation: {
    async createUser(_, { registerInput }) {
      const response = await User.create(registerInput);
      console.log(response._doc);
      const token = jwt.sign({ id: response._id }, "abcd", { expiresIn: "1d" });
      const returnResponse = {
        ...response._doc,
        id: response._id,
        token,
      };
      return returnResponse;
    },
  },
};
