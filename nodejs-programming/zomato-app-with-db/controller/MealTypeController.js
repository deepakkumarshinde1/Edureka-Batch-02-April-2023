const MealTypeModel = require("../model/MealTypeModel");

const MealTypeController = {
  getMealTypeList: async (request, response) => {
    let result = await MealTypeModel.find();
    response.send({
      call: true,
      result,
    });
  },
};

module.exports = MealTypeController;
