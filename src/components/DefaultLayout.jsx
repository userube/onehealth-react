import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import BuddyLogo from "../assets/logoBuddy.png";
import Stocks from "../assets/Stocks.png";
import Stocks2 from "../assets/Stocks2.png";
import Channels from "../assets/Channels.png";
import Members from "../assets/Members.png";
import Growth from "../assets/Growth.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import axiosClient from "../axios-client.js";

export default function DefaultLayout() {
  const { user, token } = useStateContext();

  if (!token) {
    return <Navigate to="/login" />;
  }

  const onLogout = (ev) => {
    ev.preventDefault();

    axiosClient.post("http://localhost:8001/api/logout").then(() => {
      setUser({});
      setToken(null);
    });
  };

  return (
    <div id="defaultLayout">
      <aside>
        <img
          src={BuddyLogo}
          className="text-center img-responsive mb-5 mt-3 "
        />
        <Link to="/dashboard">
          <FontAwesomeIcon icon={faUser} className="sidebar-menu-icon" />{" "}
          <span> My Portfolio</span>
        </Link>
        <Link to="/users">
          <FontAwesomeIcon icon={faUserGroup} className="sidebar-menu-icon" />{" "}
          My Group
        </Link>
        <Link to="/users">
          <FontAwesomeIcon icon={faEnvelope} className="sidebar-menu-icon" />{" "}
          Messages
        </Link>
        <Link to="/users">
          <FontAwesomeIcon
            icon={faArrowTrendUp}
            className="sidebar-menu-icon"
          />{" "}
          Analytics
        </Link>
        <Link to="/users">
          <FontAwesomeIcon icon={faGear} className="sidebar-menu-icon" />{" "}
          Settings
        </Link>
      </aside>
      <div className="content">
        <header>
          <div>Header</div>
          <div>
            {user.name}
            <a href="#" onClick={onLogout} className="btn-logout">
              Logout
            </a>
          </div>
        </header>
        <main>
          <div>
            <div className="row">
              <div className="col-md-9">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <div
                        className="card"
                        style={{ border: "none", height: "100px" }}
                      >
                        <div className="card-body p-0">
                          <div className="p-3 pb-0">
                            <div className="float-end">
                              <img
                                src={Channels}
                                className="text-center img-responsive mb-5 mt-3 "
                              />
                            </div>{" "}
                            <h3
                              className="mt-2"
                              style={{
                                color: "rgb(48, 52, 56)",
                                fontSize: "25px",
                              }}
                            >
                              51
                            </h3>
                            <h6
                              className="text-muted font-weight-normal mt-0"
                              style={{ color: "#A3A3A6", paddingTop: "5px" }}
                            >
                              Total Customers
                            </h6>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div
                        className="card"
                        style={{ border: "none", height: "100px" }}
                      >
                        <div className="card-body p-0">
                          <div className="p-3 pb-0">
                            <div className="float-end">
                              <img
                                src={Members}
                                className="text-center img-responsive mb-5 mt-3 "
                              />
                            </div>{" "}
                            <h3
                              className="mt-2"
                              style={{
                                color: "rgb(48, 52, 56)",
                                fontSize: "25px",
                              }}
                            >
                              125
                            </h3>
                            <h6
                              className="text-muted font-weight-normal mt-0"
                              style={{ color: "#A3A3A6", paddingTop: "5px" }}
                            >
                              New Members
                            </h6>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div
                        className="card"
                        style={{ border: "none", height: "100px" }}
                      >
                        <div className="card-body p-0">
                          <div className="p-3 pb-0">
                            <div className="float-end">
                              <img
                                src={Growth}
                                className="text-center img-responsive mb-5 mt-3 "
                              />
                            </div>{" "}
                            <h3
                              className="mt-2"
                              style={{
                                color: "rgb(48, 52, 56)",
                                fontSize: "25px",
                              }}
                            >
                              789
                            </h3>
                            <h6
                              className="text-muted font-weight-normal mt-0"
                              style={{ color: "#A3A3A6", paddingTop: "5px" }}
                            >
                              All Impressions
                            </h6>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <img
                      src={Stocks}
                      className="text-center img-responsive mb-5 mt-3 "
                    />
                    <img
                      src={Stocks2}
                      className="text-center img-responsive mb-5 mt-3 "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Outlet /> */}
        </main>
      </div>
    </div>
  );
}
