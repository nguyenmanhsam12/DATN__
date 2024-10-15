import React from "react";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="customer_login">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="login-item">
            <h5 className="title-login">Login your Account</h5>
            <form className="login">
              <div className="social-account">
                <h6 className="title-social">Login with social account</h6>
                <a href="#" className="mxh-item facebook">
                  <i
                    className="icon fa fa-facebook-square"
                    aria-hidden="true"
                  ></i>
                  <span className="text">FACEBOOK</span>
                </a>
                <a href="#" className="mxh-item twitter">
                  <i className="icon fa fa-twitter" aria-hidden="true"></i>
                  <span className="text">TWITTER</span>
                </a>
              </div>
              <p className="form-row form-row-wide">
                <label className="text">Username</label>
                <input title="username" type="text" className="input-text" />
              </p>
              <p className="form-row form-row-wide">
                <label className="text">Password</label>
                <input
                  title="password"
                  type="password"
                  className="input-text"
                />
              </p>
              <p className="lost_password">
                <span className="inline">
                  <input type="checkbox" id="cb1" />
                  <label htmlFor="cb1" className="label-text">
                    Remember me
                  </label>
                </span>
                <a href="#" className="forgot-pw">
                  Forgot password?
                </a>
              </p>
              <p className="form-row">
                <input type="submit" className="button-submit" value="login" />
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
