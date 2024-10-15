import React from "react";

type Props = {};

const Register = (props: Props) => {
  return (
    <div className="customer_login">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="login-item">
            <h5 className="title-login">
              Don’t have an Account? Register now!
            </h5>
            <form className="register">
              <p className="form-row form-row-wide">
                <label className="text">Your email</label>
                <input title="email" type="email" className="input-text" />
              </p>
              <p className="form-row form-row-wide">
                <label className="text">Username</label>
                <input title="name" type="text" className="input-text" />
              </p>
              <p className="form-row form-row-wide">
                <label className="text">Password</label>
                <input title="pass" type="password" className="input-text" />
              </p>
              <p className="form-row">
                <span className="inline">
                  <input type="checkbox" id="cb2" />
                  <label htmlFor="cb2" className="label-text">
                    I agree to <span>Terms & Conditions</span>
                  </label>
                </span>
              </p>
              <p className="">
                <input
                  type="submit"
                  className="button-submit"
                  value="REGISTER NOW"
                />
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
