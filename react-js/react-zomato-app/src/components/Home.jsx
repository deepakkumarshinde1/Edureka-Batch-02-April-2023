import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Home() {
  let navigate = useNavigate();
  let initData = {
    _id: "",
    name: "",
    city_id: 0,
    location_id: 0,
    city: "",
    country_name: "",
  };
  let [locations, setLocations] = useState([]);
  let [hideLocation, setHideLocation] = useState(true);
  let [selectLocation, setSelectLocation] = useState({ ...initData });
  let [meals, setMeals] = useState([]);
  let [restaurant_list, setRestaurantList] = useState({
    list: [],
    message: "0 restaurant found",
  });

  let setASelectedLocation = (id) => {
    setSelectLocation(locations[id]);
    setHideLocation(true);
  };

  let getMealTypeList = async () => {
    try {
      let url = "http://localhost:3040/api/get-meal-type-list";
      let response = await axios.get(url);
      let data = response.data;
      setMeals(data.result);
    } catch (error) {
      alert("Server Error");
      console.log(error);
    }
  };
  let getLocationList = async () => {
    try {
      let url = "http://localhost:3040/api/get-location-list";
      let response = await axios.get(url);
      let data = response.data;
      setLocations(data.result);
    } catch (error) {
      alert("Server Error");
      console.log(error);
    }
  };
  let getRestaurantListByLocId = async () => {
    let url =
      "http://localhost:3040/api/get-restaurant-list-by-loc-id/" +
      selectLocation.location_id;
    let { data } = await axios.get(url);
    setRestaurantList({
      list: data.result,
      message: data.result.length + " restaurant found",
    });
  };

  // only on page load
  useEffect(() => {
    getMealTypeList();
    getLocationList();
  }, []); // on mount

  useEffect(() => {
    if (selectLocation.location_id !== 0) {
      getRestaurantListByLocId();
    }
  }, [selectLocation]);
  return (
    <>
      <section className="row main-section align-content-start">
        {/* <header className="col-12 py-3">
          <div className="container d-lg-flex justify-content-end d-none">
            <button className="btn text-white me-3">Login</button>
            <button className="btn text-white border border-white">
              Create an account
            </button>
          </div>
        </header> */}
        <Header page={"home"} />
        <section className="col-12 d-flex flex-column align-items-center justify-content-center">
          <p className="brand-name fw-bold my-lg-2 mb-0">e!</p>
          <p className="h1 text-white my-3 text-center">
            Find the best restaurants, cafés, and bars
          </p>
          <div className="search gap-lg-3 w-50 d-flex align-items-start mt-3">
            <div className="w-50 position-relative mb-3">
              <input
                type="text"
                className="form-control  set-100 mb-lg-0 w-100 me-lg-3 py-2 px-3"
                placeholder="Select a location"
                readOnly
                value={
                  selectLocation.name === ""
                    ? ""
                    : `${selectLocation.name} ,${selectLocation.city}`
                }
                onClick={() => setHideLocation(false)}
              />
              {hideLocation ? null : (
                <ul className="list-group position-absolute top-100 w-100 z-100">
                  {locations.map((location, index) => {
                    return (
                      <li
                        key={location._id}
                        className="list-group-item"
                        onClick={() => setASelectedLocation(index)}
                      >
                        {location.name}, {location.city}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            <div className="w-75 position-relative mb-3">
              <div className="w-100 input-group">
                <span className="input-group-text bg-white">
                  <i className="fa fa-search text-primary"></i>
                </span>
                <input
                  type="text"
                  className="form-control py-2 px-3"
                  placeholder={restaurant_list.message}
                  onChange={() => {}}
                  readOnly
                />
              </div>

              <ul className="list-group position-absolute top-100 w-100 z-99">
                {restaurant_list.list.map((restaurant, index) => {
                  return (
                    <li
                      key={restaurant._id}
                      className="list-group-item"
                      onClick={() =>
                        navigate("/restaurant-details/" + restaurant._id)
                      }
                    >
                      <img
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50px",
                        }}
                        src={"/images/" + restaurant.image}
                        className="me-2"
                        alt=""
                      />
                      <span>
                        {restaurant.name}, {restaurant.city}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
      </section>
      <section className="row justify-content-center">
        <section className="col-10 mt-3">
          <h3 className="fw-bold text-navy">Quick Searches</h3>
          <p className="text-secondary">Discover restaurants by Searches</p>
        </section>
        <section className="col-10">
          <section className="row py-2">
            <section className="col-12 px-0 d-flex justify-content-between flex-wrap">
              {meals.map((meal) => {
                return (
                  <section
                    key={meal._id}
                    className="px-0 d-flex border border-1 quick-search-item"
                    onClick={() =>
                      navigate(`/search/${meal.meal_type}/${meal.name}`)
                    }
                  >
                    <img
                      src={"/images/" + meal.image}
                      alt=""
                      className="image-item"
                    />
                    <div className="pt-3 px-2">
                      <h4 className="text-navy">{meal.name}</h4>
                      <p className="small text-muted">{meal.content}</p>
                    </div>
                  </section>
                );
              })}
            </section>
          </section>
        </section>
      </section>
    </>
  );
}

export default Home;
