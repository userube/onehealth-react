import React from "react";
import Mymail from "../assets/mail.png";
import BuddyLogo from "../assets/logoBuddy.png";
import checkBox from "../assets/Checkbox.png";
import { Link } from "react-router-dom";
import { createRef, useState } from "react";
import axiosClient from "../axios-client.js";
import { useStateContext } from "../context/ContextProvider.jsx";

export default function Signup() {
  return (
    <div className="regitser">
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
                  </div>
                  <form
                    id="login_form"
                    onSubmit={onSubmit}
                    className="login_form"
                    method="post"
                  >
                    <button className="btn custom-icon-btn">
                      <img className="btn-icon" src={Mymail} />
                      <span> Sign in with email</span>
                    </button>
                    <div id="or">or</div>
                    <button className="btn custom-icon-btn">
                      <img
                        className="btn-icon"
                        src="https://img.icons8.com/color/48/null/google-logo.png"
                      />
                      <span> Sign in with Google</span>
                    </button>

                    <div className="mt-4 policySect">
                      <p>
                        By clicking the button above, you agree to our{" "}
                        <a className="custom-primary-color">Terms of Service</a>{" "}
                        and{" "}
                        <a className="custom-primary-color">Privacy Policy.</a>
                      </p>
                    </div>
                    <br />
                    <div className="mt-5">
                      <span>Already have an account? </span>
                      <a className="custom-primary-color">Login</a>
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
