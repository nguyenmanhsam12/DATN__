type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="footer style7">
      <div className="container">
        <div className="container-wapper">
          <div className="row">
            <div className="box-footer col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <div className="widget-box">
                <div className="single-img">
                  <a href="index-2.html">
                    <img src="/src/assets/images/logo-light.png" alt="img" />
                  </a>
                </div>
                <ul className="menu">
                  <li className="menu-item">
                    <a href="#">
                      <span className="flaticon-placeholder"></span>45 Grand
                      Central Terminal New York,NY 1017 United State USA
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#">
                      <span className="fa fa-phone"></span>(+123) 456 789 -
                      (+123) 666 888
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#">
                      <span className="fa fa-envelope-o"></span>
                      Contact@yourcompany.com
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#">
                      <span className="flaticon-clock"></span>Mon-Sat 9:00pm -
                      5:00pm Sun : Closed
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="box-footer col-xs-12 col-sm-6 col-md-6 col-lg-2">
              <div className="nozari-custommenu default">
                <h2 className="widgettitle">Quick Menu</h2>
                <ul className="menu">
                  <li className="menu-item">
                    <a href="#">New arrivals</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Life style</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Trousers</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Bags</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Shoes</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="box-footer col-xs-12 col-sm-6 col-md-6 col-lg-2">
              <div className="nozari-custommenu default">
                <h2 className="widgettitle">Information</h2>
                <ul className="menu">
                  <li className="menu-item">
                    <a href="#">FAQs</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Track Order</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Delivery</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Contact Us</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Return</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="box-footer col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <div className="nozari-newsletter style1">
                <div className="newsletter-head">
                  <h3 className="title">Newsletter</h3>
                </div>
                <div className="newsletter-form-wrap">
                  <div className="list">
                    Get notified of new products, limited releases, and more.
                  </div>
                  <input
                    type="email"
                    className="input-text email email-newsletter"
                    placeholder="Your email letter"
                  />
                  <button className="button btn-submit submit-newsletter">
                    SUBSCRIBE
                  </button>
                </div>
              </div>
              <div className="nozari-socials">
                <ul className="socials">
                  <li>
                    <a href="#" className="social-item" target="_blank">
                      <i className="icon fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-item" target="_blank">
                      <i className="icon fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-item" target="_blank">
                      <i className="icon fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 border-custom">
              <span></span>
            </div>
          </div>
          <div className="footer-end">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="coppyright">
                  Copyright © 2019
                  <a href="#">Nozari</a>. All rights reserved
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="nozari-payment">
                  <img src="/src/assets/images/payments.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
