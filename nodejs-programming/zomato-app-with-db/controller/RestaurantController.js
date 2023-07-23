const MenuItemModel = require("../model/MenuItemModel");
const RestaurantModel = require("../model/RestaurantModel");

const RestaurantController = {
  getRestaurantListByLocation: async (request, response) => {
    let { loc_id } = request.params;
    let result = await RestaurantModel.find(
      { location_id: loc_id },
      {
        name: 1,
        locality: 1,
        image: 1,
        city: 1,
      }
    );
    response.send({
      call: true,
      result,
    });
  },
  getSingleRestaurantDetails: async (request, response) => {
    let { rest_id } = request.params;
    let result = await RestaurantModel.findOne({ _id: rest_id });
    response.send({
      call: true,
      result,
    });
  },
  getMenuItems: async (request, response) => {
    let { r_id } = request.params;
    let result = await MenuItemModel.find({ restaurantId: r_id });
    response.send({
      call: true,
      result,
    });
  },
  filter: async (request, response) => {
    let result = await RestaurantModel.find();
    response.send({
      call: true,
      result,
    });
  },
};

module.exports = RestaurantController;
