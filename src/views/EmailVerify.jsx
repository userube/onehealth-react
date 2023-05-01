import React from "react";
import Mymail from "../assets/mail.png";
import BuddyLogo from "../assets/logoBuddy.png";
import checkBox from "../assets/Checkbox.png";
import sendMail from "../assets/sendmail.png";

export default function Register() {
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
                  <div className="mt-3 text-center">
                    <img src={sendMail} className="bullet-checkbox" />
                  </div>
                  <div className="text-center">
                    <h6>Email verified !</h6>
                    <p className="mt-2">
                      The verified email address will be associated with your
                      account. Click on the button below to continue
                    </p>

                    <button className="mt-4 btn btn-custom-confirm-mail btn-primary">
                      Confirm Email
                    </button>

                    <div className="mt-3">
                      <span>{"Didn't"} get the mail? </span>
                      <a className="custom-primary-color">Resend</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
