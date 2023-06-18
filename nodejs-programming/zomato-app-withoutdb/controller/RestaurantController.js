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
};

module.exports = RestaurantController;
