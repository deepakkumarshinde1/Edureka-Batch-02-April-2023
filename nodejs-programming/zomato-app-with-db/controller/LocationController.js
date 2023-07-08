const LocationModel = require("../model/LocationModel");

const LocationController = {
  getLocationList: async (request, response) => {
    let result = await LocationModel.find();
    response.send({
      call: true,
      result,
    });
  },
};

module.exports = LocationController;
