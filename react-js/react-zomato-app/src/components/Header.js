import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Header(props) {
  let { page } = props;
  let navigate = useNavigate();
  let headerClass = "d-flex justify-content-between py-2";
  let initialUserValue = {
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    address: "",
  };
  let [newUser, setNewUser] = useState({ ...initialUserValue });
  let [showPassword, setShowPassword] = useState(false);
  // collect data form local storage
  // convert string data to json => JSON.parse()

  let data = localStorage.getItem("user");
  data = data === null ? null : JSON.parse(data);
  let [loginDetails] = useState(data);
  let regModal = useRef();

  let setInputData = (event) => {
    let { value, name } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  let saveUser = async () => {
    let sendData = {
      f_name: newUser.fullName,
      address: newUser.address,
      email: newUser.email,
      mobile: newUser.mobile,
      password: newUser.password,
    };

    let url = "http://localhost:3040/api/save-user-data";
    let { data } = await axios.post(url, sendData);
    // let modal = new window.bootstrap.Modal(regModal.current, {
    //   backdrop: "static",
    // });
    //modal.hide();
    if (data.call == true) {
      alert("Registered successfully , you can login now.");
      window.location.reload();
    } else {
      alert(data.message);
    }
  };

  let userLogin = async () => {
    if ((newUser.mobile !== "") & (newUser.password !== "")) {
      let sendData = {
        username: newUser.mobile,
        password: newUser.password,
      };
      let url = "http://localhost:3040/api/login";
      let { data } = await axios.post(url, sendData);
      if (data.call === true) {
        alert("User Login Successfully");
        // browser localStorage
        // convert a json to string ==> JSON.stringify
        localStorage.setItem("user", JSON.stringify(data.user));
        window.location.assign("/");
      } else {
        alert("Username or Password is wrong");
      }
    }
  };

  let logout = () => {
    // remove data from local storage
    localStorage.removeItem("user");
    alert("logout successfully");
    window.location.assign("/");
  };
  return (
    <>
      <div
        className="modal fade"
        id="modalLogin"
        aria-hidden="true"
        aria-labelledby="modalLogin"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Login</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="input-group mb-3">
                  <span className="input-group-text bg-success text-white">
                    <i className="fa fa-phone"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mobile Number"
                    onChange={setInputData}
                    value={newUser.mobile}
                    name="mobile"
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text bg-success text-white">
                    <i className="fa fa-key"></i>
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    placeholder="Password"
                    onChange={setInputData}
                    value={newUser.password}
                    name="password"
                  />
                  <button
                    type="button"
                    className="input-group-text bg-success text-white"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <i
                      className={showPassword ? "fa fa-eye" : "fa fa-eye-slash"}
                    ></i>
                  </button>
                </div>
              </form>
            </div>
            <hr className="p-0 m-0" />
            <div className="p-2 ps-3 d-flex justify-content-between align-items-start">
              <p>
                Don't Have a account ?
                <button
                  className="btn btn-link"
                  data-bs-target="#modalCreateAccount"
                  data-bs-toggle="modal"
                >
                  Create a new
                </button>
              </p>

              <button className="btn btn-success" onClick={userLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="modalCreateAccount"
        aria-hidden="true"
        aria-labelledby="modalCreateAccountLabel"
        tabIndex="-1"
        ref={regModal}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modalCreateAccountLabel">
                Registration
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="input-group mb-3">
                  <span className="input-group-text bg-primary text-white">
                    <i className="fa fa-user"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Full Name"
                    onChange={setInputData}
                    value={newUser.fullName}
                    name="fullName"
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text bg-danger text-white">
                    <i className="fa fa-envelope"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    onChange={setInputData}
                    value={newUser.email}
                    name="email"
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text bg-success text-white">
                    <i className="fa fa-phone"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mobile Number"
                    onChange={setInputData}
                    value={newUser.mobile}
                    name="mobile"
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text bg-success text-white">
                    <i className="fa fa-key"></i>
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    placeholder="Password"
                    onChange={setInputData}
                    value={newUser.password}
                    name="password"
                  />
                  <button
                    type="button"
                    className="input-group-text bg-success text-white"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <i
                      className={showPassword ? "fa fa-eye" : "fa fa-eye-slash"}
                    ></i>
                  </button>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text bg-success text-white">
                    <i className="fa fa-key"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    onChange={setInputData}
                    value={newUser.confirmPassword}
                    name="confirmPassword"
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text bg-primary text-white">
                    <i className="fa fa-address-book-o"></i>
                  </span>
                  <textarea
                    className="form-control"
                    placeholder="Address"
                    onChange={setInputData}
                    value={newUser.address}
                    name="address"
                  ></textarea>
                </div>
              </form>
            </div>
            <hr className="p-0 m-0" />
            <div className="p-2 ps-3 d-flex justify-content-between align-items-start">
              <p>
                Have a account ?
                <button
                  className="btn btn-link"
                  data-bs-target="#modalLogin"
                  data-bs-toggle="modal"
                >
                  Login
                </button>
              </p>

              <button className="btn btn-success" onClick={saveUser}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          page === "home"
            ? "row justify-content-center"
            : "row bg-danger justify-content-center"
        }
      >
        <div
          className={
            page === "home" ? "col-12 " + headerClass : "col-10 " + headerClass
          }
        >
          {page === "home" ? (
            <p className="m-0"></p>
          ) : (
            <p
              className="m-0 brand"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              e!
            </p>
          )}
          <div>
            {loginDetails ? (
              <>
                <span className="fw-bold text-white text-capitalize">
                  Welcome {loginDetails.first_name}
                </span>
                <button
                  className="btn btn-sm btn-warning ms-2"
                  onClick={logout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  className="btn text-white"
                  data-bs-target="#modalLogin"
                  data-bs-toggle="modal"
                >
                  Login
                </button>
                <button
                  className="btn btn-outline-light"
                  data-bs-target="#modalCreateAccount"
                  data-bs-toggle="modal"
                >
                  <i className="fa fa-search" aria-hidden="true"></i>Create a
                  Account
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
