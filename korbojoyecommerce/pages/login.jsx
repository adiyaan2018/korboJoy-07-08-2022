import axios from "axios";
import { setCookies } from "cookies-next";
import Link from "next/link";
import { useState } from "react";
import fromValueUpdate from "../commonFunction/onChangeHandle";
import useScript from "../commonFunction/ReloadJs";
function login(props) {
  useScript("/assets/js/main.min.js");

  const [login, updateLoginFrom] = useState("");

  const categoryHandleChange = (e) => {
    fromValueUpdate(e, updateLoginFrom);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const url = process.env.API_MAIN;
    console.log(url);
    const response = await axios
      .post(process.env.API_URL + "/api/ev1/UserLogin", login)
      .then((response) => {
        setCookies("token", response.data);
        window.location.href = url;
      })
      .catch((error) => {
        // console.log("do not login");
      });
  };
  const onSubmitReg = async (e) => {
    e.preventDefault();

    const response = await axios
      .post(process.env.API_URL + "/api/ev1/userSingup", login)
      .then((response) => {
        setCookies("token", response.data);
        const url = "http://localhost:3000";
        // const url = "/";
        // const url = "/";
        window.location.href = url;
      })
      .catch((error) => {
        // console.log("do not login");
      });
  };
  return (
    <div>
      {/* Start of Main */}
      <main className="main login-page">
        {/* Start of Page Header */}
        <div className="page-header">
          <div className="container">
            <h1 className="page-title mb-0">My Account</h1>
          </div>
        </div>
        {/* End of Page Header */}
        {/* Start of Breadcrumb */}
        <nav className="breadcrumb-nav">
          <div className="container">
            <ul className="breadcrumb">
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>My account</li>
            </ul>
          </div>
        </nav>
        {/* End of Breadcrumb */}
        <div className="page-content">
          <div className="container">
            <div className="login-popup">
              <div className="tab tab-nav-boxed tab-nav-center tab-nav-underline">
                <ul className="nav nav-tabs text-uppercase" role="tablist">
                  <li className="nav-item">
                    <a href="#sign-in" className="nav-link active">
                      Sign In
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#sign-up" className="nav-link">
                      Sign Up
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="sign-in">
                    <div className="form-group">
                      <label>Username or email address *</label>
                      <input type="text" className="form-control" name="username" id="username" required onChange={categoryHandleChange} />
                    </div>
                    <div className="form-group mb-5">
                      <label>Password *</label>
                      <input type="text" className="form-control" name="password" id="password" required onChange={categoryHandleChange} />
                    </div>

                    <a onClick={onSubmit} className="btn btn-primary">
                      Sign In
                    </a>
                  </div>
                  <div className="tab-pane" id="sign-up">
                    <div className="form-group">
                      <label>Username or email address *</label>
                      <input type="text" className="form-control" name="name" id="username" required onChange={categoryHandleChange} />
                    </div>
                    <div className="form-group mb-0">
                      <label>Password *</label>
                      <input type="text" className="form-control" name="password" id="password" required onChange={categoryHandleChange} />
                    </div>
                    <div className="form-group mb-0">
                      <label>Number *</label>
                      <input type="number" className="form-control" name="number" id="number" required onChange={categoryHandleChange} />
                    </div>
                    <div className="form-group mb-5">
                      <label>Address *</label>
                      <input type="address" className="form-control" name="address" id="address" required onChange={categoryHandleChange} />
                    </div>

                    <a onClick={onSubmitReg} className="btn btn-primary">
                      Sign Un
                    </a>
                  </div>
                </div>
                {/* <p className="text-center">Sign in with social account</p>
                <div className="social-icons social-icon-border-color d-flex justify-content-center">
                  <a href="#" className="social-icon social-facebook w-icon-facebook" />
                  <a href="#" className="social-icon social-twitter w-icon-twitter" />
                  <a href="#" className="social-icon social-google fab fa-google" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* End of Main */}
    </div>
  );
}

export default login;
