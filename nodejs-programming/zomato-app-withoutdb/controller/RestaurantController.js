const restList = require("../model/db.json");

const RestaurantController = {
  getHomePage: (request, response) => {
    response.render("index.pug");
  },
  getRestaurantList: (request, response) => {
    let sendData = {
      restList,
      length: restList.length,
      status: true,
    };
    response.send(sendData);
  },
  getSingleRestaurant: (request, response) => {
    let { city } = request.params;
    // to read data from params we us ==> response.params
    let result = restList.filter((value, index) => {
      return value.location === city;
    });
    if (result.length === 0) {
      response.send({ status: false });
    } else {
      response.send({ status: true, result });
    }
  },
};

module.exports = RestaurantController;
