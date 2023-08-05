import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";

function Search() {
  let navigate = useNavigate();
  let { id, name } = useParams();
  let [filter, setFilter] = useState({
    meal_type: id,
    sort: 1,
    cuisine: [],
  });
  let [locations, setLocations] = useState([]);
  let [restaurantList, setRestaurantList] = useState([]);
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
  let getFilterDetails = async () => {
    let url = "http://localhost:3040/api/filter";
    let { data } = await axios.post(url, filter);
    setRestaurantList(data.result);
  };

  let setFilterData = (event, type) => {
    let { value } = event.target;
    let _filter = { ...filter };
    switch (type) {
      case "sort":
        _filter["sort"] = Number(value);
        break;

      case "location":
        value = Number(value);
        if (value === -1) {
          delete _filter["location"];
        } else {
          _filter["location"] = value;
        }
        break;
      case "cuisine":
        if (event.target.checked) {
          _filter["cuisine"].push(Number(value));
        } else {
          _filter["cuisine"] = _filter["cuisine"].filter(
            (cuisine) => cuisine !== Number(value)
          );
        }

        break;
      default:
        break;
    }

    setFilter(_filter);
  };

  useEffect(() => {
    getLocationList();
  });
  useEffect(() => {
    getFilterDetails();
  }, [filter]);

  return (
    <>
      <Header />
      {/* <!-- section --> */}
      <div className="row">
        <div className="col-12 px-5 pt-4">
          <p className="h3"> {name} Search Result</p>
        </div>
        {/* <!-- food item --> */}
        <div className="col-12 d-flex flex-wrap px-lg-5 px-md-5 pt-4">
          <div className="food-shadow col-12 col-lg-3 col-md-4 me-5 p-3 mb-4">
            <div className="d-flex justify-content-between">
              <p className="fw-bold m-0">Filter</p>
              <button
                className="d-lg-none d-md-none btn"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFilter"
                aria-controls="collapseFilter"
              >
                <span className="fa fa-eye"></span>
              </button>
            </div>
            {/* <!-- Collapse start  --> */}
            <div className="collapse show" id="collapseFilter">
              <div>
                <label htmlFor="" className="form-label">
                  Select Location
                </label>
                <select
                  className="form-select form-select-sm"
                  onChange={(event) => setFilterData(event, "location")}
                >
                  <option value="-1">----select----</option>
                  {locations.map((location, index) => {
                    return (
                      <option key={location._id} value={location.location_id}>
                        {location.name}, {location.city}
                      </option>
                    );
                  })}
                </select>
              </div>
              <p className="mt-4 mb-2 fw-bold">Cuisine</p>
              <div>
                <div className="ms-1">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value={1}
                    onClick={(event) => setFilterData(event, "cuisine")}
                  />
                  <label htmlFor="" className="form-check-label ms-1">
                    North Indian
                  </label>
                </div>
                <div className="ms-1">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value={2}
                    onClick={(event) => setFilterData(event, "cuisine")}
                  />
                  <label htmlFor="" className="form-check-label ms-1">
                    South Indian
                  </label>
                </div>
                <div className="ms-1">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value={3}
                    onClick={(event) => setFilterData(event, "cuisine")}
                  />
                  <label htmlFor="" className="form-check-label ms-1">
                    Chinese
                  </label>
                </div>
                <div className="ms-1">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value={4}
                    onClick={(event) => setFilterData(event, "cuisine")}
                  />
                  <label htmlFor="" className="form-check-label ms-1">
                    Fast Food
                  </label>
                </div>
                <div className="ms-1">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value={5}
                    onClick={(event) => setFilterData(event, "cuisine")}
                  />
                  <label htmlFor="" className="form-check-label ms-1">
                    Street Food
                  </label>
                </div>
              </div>
              <p className="mt-4 mb-2 fw-bold">Cost For Two</p>
              <div>
                <div className="ms-1">
                  <input type="radio" className="form-check-input" />
                  <label htmlFor="" className="form-check-label ms-1">
                    less then 500
                  </label>
                </div>
                <div className="ms-1">
                  <input type="radio" className="form-check-input" />
                  <label htmlFor="" className="form-check-label ms-1">
                    500 to 1000
                  </label>
                </div>
                <div className="ms-1">
                  <input type="radio" className="form-check-input" />
                  <label htmlFor="" className="form-check-label ms-1">
                    1000 to 1500
                  </label>
                </div>
                <div className="ms-1">
                  <input type="radio" className="form-check-input" />
                  <label htmlFor="" className="form-check-label ms-1">
                    1500 to 2000
                  </label>
                </div>
                <div className="ms-1">
                  <input type="radio" className="form-check-input" />
                  <label htmlFor="" className="form-check-label ms-1">
                    2000+
                  </label>
                </div>
              </div>
              <p className="mt-4 mb-2 fw-bold">Sort</p>
              <div>
                <div className="ms-1">
                  <input
                    type="radio"
                    className="form-check-input"
                    value={1}
                    onClick={(event) => setFilterData(event, "sort")}
                    name="sort"
                  />
                  <label htmlFor="" className="form-check-label ms-1">
                    Price low to high
                  </label>
                </div>
                <div className="ms-1">
                  <input
                    type="radio"
                    className="form-check-input"
                    value={-1}
                    name="sort"
                    onClick={(event) => setFilterData(event, "sort")}
                  />
                  <label htmlFor="" className="form-check-label ms-1">
                    Price high to low
                  </label>
                </div>
              </div>
            </div>
            {/* <!-- Collapse end --> */}
          </div>
          {/* <!-- search result --> */}
          <div className="col-12 col-lg-8 col-md-7">
            {restaurantList.map((restaurant, index) => {
              return (
                <div
                  key={restaurant._id}
                  className="col-12 food-shadow p-4 mb-4"
                  onClick={() =>
                    navigate("/restaurant-details/" + restaurant._id)
                  }
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={"/images/" + restaurant.image}
                      className="food-item"
                    />
                    <div className="ms-5">
                      <p className="h4 fw-bold">{restaurant.name}</p>
                      <span className="fw-bold text-muted">
                        {restaurant.locality}
                      </span>
                      <p className="m-0 text-muted">
                        <i
                          className="fa fa-map-marker fa-2x text-danger"
                          aria-hidden="true"
                        ></i>
                        {restaurant.locality}, {restaurant.city}
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex">
                    <div>
                      <p className="m-0">CUISINES:</p>
                      <p className="m-0">COST FOR TWO:</p>
                    </div>
                    <div className="ms-5">
                      <p className="m-0 fw-bold">
                        {restaurant.cuisine
                          .map((cuisine) => {
                            return cuisine.name;
                          })
                          .join(", ")}
                      </p>
                      <p className="m-0 fw-bold">
                        <i className="fa fa-inr" aria-hidden="true"></i>
                        {restaurant.min_price}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="col-12 pagination d-flex justify-content-center">
              <ul className="pages">
                <li>&lt;</li>
                <li className="active">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>&gt;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
