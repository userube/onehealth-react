import React from "react";
import Mymail from "../assets/mail.png";
import BuddyLogo from "../assets/logoBuddy.png";
import checkBox from "../assets/Checkbox.png";
import { createRef, useState } from "react";
import axiosClient from "../axios-client.js";
import { useStateContext } from "../context/ContextProvider.jsx";
import { Link } from "react-router-dom";

export default function Register() {
  const firstnameRef = createRef();
  const lastnameRef = createRef();
  const emailRef = createRef();
  const passwordRef = createRef();
  const passwordConfirmationRef = createRef();
  const { setUser, setToken } = useStateContext();
  const [errors, setErrors] = useState(null);

  const onSubmit = (ev) => {
    ev.preventDefault();

    const payload = {
      name: firstnameRef.current.value + " " + lastnameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    console.log(payload);
    axiosClient
      .post("http://localhost:8001/api/signup", payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors);
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
                    <h5 className="light-green">Register your account</h5>
                    <p className="suffix-text">
                      Proceed to create account and setup your organization
                    </p>
                  </div>
                  <form
                    id="login_form"
                    className="login_form"
                    onSubmit={onSubmit}
                    method="post"
                  >
                    {errors && (
                      <div className="alert">
                        {Object.keys(errors).map((key) => (
                          <p key={key}>{errors[key][0]}</p>
                        ))}
                      </div>
                    )}
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-floating mb-3">
                          <input
                            ref={firstnameRef}
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder="&#xf0e0; First Name"
                          />
                          <label for="floatingInput">First Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating mb-3">
                          <input
                            ref={lastnameRef}
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder="&#xf0e0; Last Name"
                          />
                          <label for="floatingInput">Last Name</label>
                        </div>
                      </div>
                    </div>
                    <div className="form-floating">
                      <input
                        ref={emailRef}
                        type="email"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Work Email"
                      />
                      <label for="floatingPassword">Work Email</label>
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
                      Create Account
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
                      <span>Already have an account? </span>
                      <Link to="/login" className="custom-primary-color">
                        Login
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
