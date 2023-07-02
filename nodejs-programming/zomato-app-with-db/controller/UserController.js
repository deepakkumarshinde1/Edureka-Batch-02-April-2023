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
      call: true,
      list: result,
    });
  },
  saveUserData: async (request, response) => {
    // request.params
    // client (postman) to server
    let user = request.body;

    let saveData = {
      f_name: user.f_name,
      l_name: user.l_name,
      gender: user.gender,
      email: user.email,
      mobile: user.mobile,
      password: user.password,
    };
    let newUser = new UserModel(saveData);
    let result = await newUser.save(); /// insert data in
    response.send({
      call: true,
      result,
    });
  },
  userLogin: async (request, response) => {
    let { username, password } = request.body;
    let isUserValid = await UserModel.findOne(
      {
        email: username,
        password: password,
      },
      { password: 0 }
    );

    if (isUserValid) {
      response.send({
        call: true,
        user: isUserValid,
      });
    } else {
      response.send({
        call: false,
      });
    }
  },
};

module.exports = UserController;
