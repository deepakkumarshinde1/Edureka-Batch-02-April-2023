import { useState } from "react";

function Header() {
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

  let setInputData = (event) => {
    let { value, name } = event.target;
    setNewUser({ ...newUser, [name]: value });
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
              Show a second modal and hide this one with the button below.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target="#modalCreateAccount"
                data-bs-toggle="modal"
              >
                Create an Account
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

              <button className="btn btn-success">Sign Up</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row bg-danger justify-content-center">
        <div className="col-10 d-flex justify-content-between py-2">
          <p className="m-0 brand">e!</p>
          <div>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
