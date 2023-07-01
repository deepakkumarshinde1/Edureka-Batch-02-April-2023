const UserModel = require("../model/UserModel");

const UserController = {
  userHome: (request, response) => {
    response.send({
      status: true,
      message: "welcome to home",
    });
  },
  getUserList: async (request, response) => {
    let { gender } = request.params;
    let result = await UserModel.find(
      { gender: { $regex: gender, $options: "i" } },
      { first_name: 1, last_name: 1, email: 1 }
    );
    response.send({
      status: true,
      list: result,
    });
  },
};

module.exports = UserController;
