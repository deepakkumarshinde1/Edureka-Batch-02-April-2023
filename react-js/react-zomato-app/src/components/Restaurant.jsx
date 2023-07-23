import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Restaurant() {
  let { id } = useParams();
  let [rDetails, setRDetails] = useState(null);
  let [rMenuList, setRMenuList] = useState([]);
  let getRestaurantDetails = async () => {
    let url = "http://localhost:3040/api/get-restaurant-details/" + id;
    let { data } = await axios.get(url);
    setRDetails(data.result);
  };
  let getMenuItemList = async () => {
    let url = "http://localhost:3040/api/get-menu-item-list/" + id;
    let { data } = await axios.get(url);
    setRMenuList(data.result);
  };
  useEffect(() => {
    getRestaurantDetails();
  }, []);
  return (
    <>
      {rDetails === null ? null : (
        <>
          <div
            className="modal fade"
            id="slideShow"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg " style={{ height: "75vh " }}>
              <div className="modal-content">
                <div className="modal-body h-75">
                  <Carousel showThumbs={false} infiniteLoop={true}>
                    {rDetails.thumb.map((value, index) => {
                      return (
                        <div key={index} className="w-100">
                          <img src={"/images/" + value} />
                        </div>
                      );
                    })}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="exampleModalToggle"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalToggleLabel">
                    {rDetails.name}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body ">
                  {rMenuList.map((menu) => {
                    return (
                      <div className="row p-2">
                        <div className="col-8">
                          <p className="mb-1 h6">{menu.name}</p>
                          <p className="mb-1">₹ {menu.price} /-</p>
                          <p className="small text-muted">{menu.description}</p>
                        </div>
                        <div className="col-4 d-flex justify-content-end">
                          <div className="menu-food-item">
                            <img src={"/images/" + menu.image} alt="" />
                            {menu.qty === 0 ? (
                              <button className="btn btn-primary btn-sm add">
                                Add
                              </button>
                            ) : (
                              <div className="order-item-count section ">
                                <span className="hand">-</span>
                                <span>{menu.qty}</span>
                                <span className="hand">+</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <hr className=" p-0 my-2" />
                      </div>
                    );
                  })}

                  <div className="d-flex justify-content-between">
                    <h3>Subtotal subTotal</h3>
                    <button
                      className="btn btn-danger"
                      data-bs-target="#exampleModalToggle2"
                      data-bs-toggle="modal"
                    >
                      Pay Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="exampleModalToggle2"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel2"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalToggleLabel2">
                    name
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter full Name"
                      value="deepakkumar"
                      onChange={() => {}}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                      value="deepak@gmail.com"
                      onChange={() => {}}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Address
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      value="Nashik"
                      onChange={() => {}}
                    ></textarea>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-danger"
                    data-bs-target="#exampleModalToggle"
                    data-bs-toggle="modal"
                  >
                    Back
                  </button>
                  <button className="btn btn-success">PROCEED</button>
                </div>
              </div>
            </div>
          </div>

          <div className="row bg-danger justify-content-center">
            <div className="col-10 d-flex justify-content-between py-2">
              <p className="m-0 brand">e!</p>
              <div>
                <button className="btn text-white">Login</button>
                <button className="btn btn-outline-light">
                  <i className="fa fa-search" aria-hidden="true"></i>Create a
                  Account
                </button>
              </div>
            </div>
          </div>
          {/* <!-- section -->  */}
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="row">
                <div className="col-12 mt-5">
                  <div className="restaurant-main-image position-relative">
                    <img
                      src={"/images/" + rDetails.image}
                      alt=""
                      className=""
                    />
                    <button
                      className="btn btn-outline-light position-absolute btn-gallery"
                      data-bs-toggle="modal"
                      data-bs-target="#slideShow"
                    >
                      Click To Get Image Gallery
                    </button>
                  </div>
                </div>
                <div className="col-12">
                  <h3 className="mt-4">{rDetails.name}</h3>
                  <div className="d-flex justify-content-between">
                    <ul className="list-unstyled d-flex gap-3">
                      <li>Overview & Contact</li>
                    </ul>
                    <a
                      className="btn btn-danger align-self-start"
                      data-bs-toggle="modal"
                      href="#exampleModalToggle"
                      role="button"
                      onClick={getMenuItemList}
                    >
                      Place Online Order
                    </a>
                  </div>
                  <hr className="mt-0" />

                  <div className="over-view">
                    <p className="h5 mb-4">About this place</p>

                    <p className="mb-0 fw-bold">Cuisine</p>
                    <p>
                      {rDetails.cuisine.map((value) => value.name).join(", ")}
                    </p>

                    <p className="mb-0 fw-bold">Average Cost</p>
                    <p>₹ {rDetails.min_price} for two people (approx.)</p>
                  </div>

                  <div className="over-view">
                    <p className="mb-0 fw-bold">Phone Number</p>
                    <p>+{rDetails.contact_number}</p>

                    <p className="mb-0 fw-bold">Address</p>
                    <p>
                      {rDetails.locality}, {rDetails.city}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Restaurant;
