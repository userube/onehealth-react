import React from "react";
import Mymail from "../assets/mail.png";
import BuddyLogo from "../assets/logoBuddy.png";
import { Link } from "react-router-dom";
import checkBox from "../assets/Checkbox.png";
import { createRef, useState } from "react";
import axiosClient from "../axios-client.js";
import { useStateContext } from "../context/ContextProvider.jsx";

export default function Login() {
  const emailRef = createRef();
  const passwordRef = createRef();
  const { setUser, setToken } = useStateContext();
  const [message, setMessage] = useState(null);

  const onSubmit = (ev) => {
    ev.preventDefault();

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    console.log(payload);
    axiosClient
      .post("http://localhost:8001/api/login", payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setMessage(response.data.message);
        }
      });
  };

  return (
    <div className="login">
      <div className="container-fluid">
        <div className="row">
          <div className="col left-col">
            <div>
              <div className="row">
                <div className="col">
                  <div className="form-box center">
                    <img src={BuddyLogo} className="img-responsive mb-5" />
                    <div className="mt-5">
                      <div className="mt-12">
                        <img src={checkBox} className="bullet-checkbox" />
                        <p className="bullet-text">
                          <span>
                            Track real-time overview of company’s financial
                            performance.
                          </span>
                        </p>
                      </div>
                      <div className="mt-12">
                        <img src={checkBox} className="bullet-checkbox" />
                        <p className="bullet-text">
                          <span>
                            Track created projects budget against actual revenue
                            and expenses.
                          </span>
                        </p>
                      </div>
                      <div className="mt-12">
                        <img src={checkBox} className="bullet-checkbox" />
                        <p className="bullet-text">
                          <span>
                            Highlighted reports on budget deficit and surplus,
                            accounting dimensions, balance sheets and real-time
                            sales margin estimation.
                          </span>
                        </p>
                      </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="mt-5 copyright-text">
                      <p>© 2022 Buddy. All rights reserved</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col right-col">
            <div className="col">
              <div className="form-box mt-25 card shadow-lg">
                <div className="form-container">
                  <div className="mt-3 mb-4">
                    <h5 className="light-green">Log in to your account</h5>
                    <p className="suffix-text">
                      Proceed to create account and setup your organization
                    </p>
                  </div>
                  <form
                    id="login_form"
                    onSubmit={onSubmit}
                    className="login_form"
                    method="post"
                  >
                    <div className="form-floating mb-3">
                      <input
                        ref={emailRef}
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="&#xf0e0; Email Address"
                      />
                      <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                      <input
                        ref={passwordRef}
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                      />
                      <label for="floatingPassword">Password</label>
                    </div>
                    <button className="mt-4 btn btn-custom btn-primary">
                      Login
                    </button>
                    <div className="mt-5 mb-5 policySect">
                      <p>
                        By clicking the button above, you agree to our{" "}
                        <a className="custom-primary-color">Terms of Service</a>{" "}
                        and{" "}
                        <a className="custom-primary-color">Privacy Policy.</a>
                      </p>
                    </div>
                    <div className="mt-5">
                      <span>Don't have an account? </span>
                      <Link to="/register" className="custom-primary-color">
                        Register
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
