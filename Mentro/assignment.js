class RestaurantManager {
  restaurantList = [];
  constructor(list) {
    this.restaurantList = list;
  }

  getRestaurants() {
    console.log(this.restaurant);
    return this.restaurantList;
  }
}

let list = [
  {
    name: "A",
    city: "cityName",
    address: "Address",
  },
  {
    name: "B",
    city: "cityName",
    address: "Address",
  },
];
let restMang = new RestaurantManager(list);
let data = restMang.getRestaurants();
console.log(data);
