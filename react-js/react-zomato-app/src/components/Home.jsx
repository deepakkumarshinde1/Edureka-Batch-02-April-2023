import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  let [locations, setLocations] = useState([]);
  let [meals, setMeals] = useState([]);
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

  // only on page load
  useEffect(() => {
    getMealTypeList();
    getLocationList();
  }, []); // on mount

  return (
    <>
      <section className="row main-section align-content-start">
        <header className="col-12 py-3">
          <div className="container d-lg-flex justify-content-end d-none">
            <button className="btn text-white me-3">Login</button>
            <button className="btn text-white border border-white">
              Create an account
            </button>
          </div>
        </header>
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
              />
              <ul class="list-group position-absolute top-100 w-100 z-100">
                {locations.map((location) => {
                  return (
                    <li key={location._id} class="list-group-item">
                      An item
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="w-75 input-group">
              <span className="input-group-text bg-white">
                <i className="fa fa-search text-primary"></i>
              </span>
              <input
                type="text"
                className="form-control py-2 px-3"
                placeholder="Search for restaurants"
              />
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
