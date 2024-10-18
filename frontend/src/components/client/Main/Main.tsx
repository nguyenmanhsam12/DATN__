import {
  CarOutlined,
  CustomerServiceOutlined,
  DollarOutlined,
  InstagramOutlined,
  RollbackOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

type Props = {};

const Main = (props: Props) => {
  return (
    <div>
      <div className="fullwidth-template">
        <div className="home-slider-banner">
          <div className="container">
            <div className="row10">
              <div className="col-lg-8 silider-wrapp">
                <div className="home-slider">
                  <div
                    className="slider-owl owl-slick equal-container nav-center"
                    data-slick='{"autoplay":true, "autoplaySpeed":9000, "arrows":false, "dots":true, "infinite":true, "speed":1000, "rows":1}'
                    data-responsive='[{"breakpoint":"2000","settings":{"slidesToShow":1}}]'
                  >
                    <div className="slider-item style7">
                      <div className="slider-inner equal-element">
                        <div className="slider-infor">
                          <h5 className="title-small">Sale up to 40% off!</h5>
                          <h3 className="title-big">
                            Shirred linen minimal dress
                          </h3>
                          <div className="price">
                            New Price:
                            <span className="number-price"> $270.00 </span>
                          </div>
                          <a href="#" className="button btn-browse">
                            Browse
                          </a>
                          <a
                            href="#"
                            className="button btn-shop-the-look bgroud-style"
                          >
                            Shop now
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <div className="slider-item style8">
                      <div className="slider-inner equal-element">
                        <div className="slider-infor">
                          <h5 className="title-small">Black Friday Sale!</h5>
                          <h3 className="title-big">
                            long oversized brushed scarf
                          </h3>
                          <div className="price">
                            Save Price:
                            <span className="number-price"> $170.00 </span>
                          </div>
                          <a href="#" className="button btn-shop-product">
                            Shop now
                          </a>
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="slider-item style9">
                      <div className="slider-inner equal-element">
                        <div className="slider-infor">
                          <h5 className="title-small">
                            Nozari Best Collection
                          </h5>
                          <h3 className="title-big">
                            The inspiration behind our store
                          </h3>
                          <a href="#" className="button btn-chekout">
                            Shop now
                          </a>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 banner-wrapp">
                <div className="banner">
                  <div className="item-banner style7">
                    <div className="inner">
                      <div className="banner-content">
                        <h3 className="title">T-Shirts Collection</h3>
                        <div className="description">
                          Adipiscing elit curabitur senectus sem
                        </div>
                        <a href="#" className="button btn-lets-do-it">
                          Shop now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="banner">
                  <div className="item-banner style8">
                    <div className="inner">
                      <div
                        className="banner-content"
                        style={{ height: "306px" }}
                      >
                        <h3 className="title">Men Winnter Best Seller</h3>
                        <div className="description">
                          Cras pulvinar lorem ipsum dolor conse
                        </div>
                        <span className="price">$379.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nozari-iconbox-wrapp rows-space-40">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 nozari-iconbox-wrapp-small">
                <div className="nozari-iconbox default">
                  <div className="iconbox-inner">
                    <div className="icon">
                      <CarOutlined />
                    </div>
                    <div className="content">
                      <h4 className="title">Free Delivery</h4>
                      <div className="text">On order over $90.00</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 nozari-iconbox-wrapp-small">
                <div className="nozari-iconbox default">
                  <div className="iconbox-inner">
                    <div className="icon">
                      <DollarOutlined />
                    </div>
                    <div className="content">
                      <h4 className="title">Money Guarantee</h4>
                      <div className="text">30 Days money back!</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 nozari-iconbox-wrapp-small last-item">
                <div className="nozari-iconbox default">
                  <div className="iconbox-inner">
                    <div className="icon">
                      <CustomerServiceOutlined />
                    </div>
                    <div className="content">
                      <h4 className="title">Online Support 24/7</h4>
                      <div className="text">We’re Always here!</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nozari-product produc-featured rows-space-65">
          <div className="container">
            <h3 className="custommenu-title-blog">Deal of the day</h3>
            <div
              className="owl-products owl-slick equal-container nav-center"
              style={{
                display: "flex",
                gap: "60px",
                justifyContent: "center",
                height: "350px",
              }}
            >
              <div
                className="product-item style-5"
                style={{ width: "270px", height: "504px" }}
              >
                <div className="product-inner equal-element">
                  <div className="product-top">
                    <div className="flash">
                      <span className="onnew">
                        <span className="text"> new </span>
                      </span>
                    </div>
                  </div>
                  <div className="product-thumb">
                    <div className="thumb-inner">
                      <Link to="/products/detailsy">
                        <img src="/src/assets/img/product13.png" alt="img" />
                      </Link>
                    </div>
                  </div>
                  <div className="product-info">
                    <h5 className="product-name product_title">
                      <a href="#">Long Sleeve Midi</a>
                    </h5>
                    <div className="group-info">
                      <div className="stars-rating">
                        <div className="star-rating">
                          <span className="star-3"></span>
                        </div>
                        <div className="count-star">(3)</div>
                      </div>
                      <div className="price">
                        <del> $65 </del>
                        <ins> $45 </ins>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="product-item style-5"
                style={{ width: "270px", height: "504px" }}
              >
                <div className="product-inner equal-element">
                  <div className="product-top">
                    <div className="flash">
                      <span className="onnew">
                        <span className="text"> new </span>
                      </span>
                    </div>
                  </div>
                  <div className="product-thumb">
                    <div className="thumb-inner">
                      <a href="#">
                        <img src="/src/assets/img/product16.png" alt="img" />
                      </a>
                      <div className="thumb-group">
                        <div className="yith-wcwl-add-to-wishlist">
                          <div className="yith-wcwl-add-button">
                            <a href="#">Add to Wishlist</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-info">
                    <h5 className="product-name product_title">
                      <a href="#">Long Sleeve Midi</a>
                    </h5>
                    <div className="group-info">
                      <div className="stars-rating">
                        <div className="star-rating">
                          <span className="star-3"></span>
                        </div>
                        <div className="count-star">(3)</div>
                      </div>
                      <div className="price">
                        <del> $65 </del>
                        <ins> $45 </ins>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="product-item style-5"
                style={{ width: "270px", height: "504px" }}
              >
                <div className="product-inner equal-element">
                  <div className="product-top">
                    <div className="flash">
                      <span className="onnew">
                        <span className="text"> new </span>
                      </span>
                    </div>
                  </div>
                  <div className="product-thumb">
                    <div className="thumb-inner">
                      <a href="#">
                        <img src="/src/assets/img/product17.png" alt="img" />
                      </a>
                      <div className="thumb-group">
                        <div className="yith-wcwl-add-to-wishlist">
                          <div className="yith-wcwl-add-button">
                            <a href="#">Add to Wishlist</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-info">
                    <h5 className="product-name product_title">
                      <a href="#">Long Sleeve Midi</a>
                    </h5>
                    <div className="group-info">
                      <div className="stars-rating">
                        <div className="star-rating">
                          <span className="star-3"></span>
                        </div>
                        <div className="count-star">(3)</div>
                      </div>
                      <div className="price">
                        <del> $65 </del>
                        <ins> $45 </ins>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="product-item style-5"
                style={{ width: "270px", height: "504px" }}
              >
                <div className="product-inner equal-element">
                  <div className="product-top">
                    <div className="flash">
                      <span className="onnew">
                        <span className="text"> new </span>
                      </span>
                    </div>
                  </div>
                  <div className="product-thumb">
                    <div className="thumb-inner">
                      <a href="#">
                        <img src="/src/assets/img/product19.png" alt="img" />
                      </a>
                      <div className="thumb-group">
                        <div className="yith-wcwl-add-to-wishlist">
                          <div className="yith-wcwl-add-button">
                            <a href="#">Add to Wishlist</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="product-info">
                    <h5 className="product-name product_title">
                      <a href="#">Long Sleeve Midi</a>
                    </h5>
                    <div className="group-info">
                      <div className="stars-rating">
                        <div className="star-rating">
                          <span className="star-3"></span>
                        </div>
                        <div className="count-star">(3)</div>
                      </div>
                      <div className="price">
                        <del> $65 </del>
                        <ins> $45 </ins>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pagination clearfix style2">
              <div className="nav-link">
                <a href="#" className="page-numbers ">
                  <i className="icon fa fa-angle-left" aria-hidden="true" />
                </a>
                <a href="#" className="page-numbers current">
                  1
                </a>
                <a href="#" className="page-numbers">
                  2
                </a>
                <a href="#" className="page-numbers ">
                  3
                </a>
                <a href="#" className="page-numbers">
                  <i className="icon fa fa-angle-right" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="banner-wrapp">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="banner">
                  <div className="item-banner style4">
                    <div className="inner">
                      <div className="banner-content">
                        <h4 className="nozari-subtitle">Clothes Essential!</h4>
                        <h3 className="title">Square neck top</h3>
                        <div className="description">
                          Proin interdum magna primis id consequat dictum
                        </div>
                        <a href="#" className="button btn-shop-now">
                          Shop now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="banner">
                  <div className="item-banner style5">
                    <div className="inner">
                      <div
                        className="banner-content"
                        style={{ height: "291px" }}
                      >
                        <h3 className="title">
                          Smock dress
                          <br />
                          Collection
                        </h3>
                        <span className="code">
                          Use code:
                          <span> NOZARI </span>
                          Get 25% Off for all Accessories items!
                        </span>
                        <a href="#" className="button btn-shop-now">
                          Shop now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-wrapp rows-space-65">
          <div className="container">
            <div className="banner">
              <div className="item-banner style17">
                <div className="inner">
                  <div className="banner-content">
                    <h3 className="title">long sleeve midi dress</h3>
                    <div className="description">
                      You have no clothes & Are you <br />
                      ready to grow? come & shop with us!
                    </div>
                    <div className="banner-price">
                      Price from:
                      <span className="number-price">$45.00</span>
                    </div>
                    <a href="#" className="button btn-shop-now">
                      Shop now
                    </a>
                    <a href="#" className="button btn-view-collection">
                      View more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nozari-tabs default rows-space-40">
          <div className="container">
            <div className="tab-head">
              <ul className="tab-link">
                <li className="active">
                  <a data-toggle="tab" aria-expanded="true" href="#bestseller">
                    Bestseller
                  </a>
                </li>
                <li className="">
                  <a
                    data-toggle="tab"
                    aria-expanded="true"
                    href="#new_arrivals"
                  >
                    New Arrivals
                  </a>
                </li>
                <li className="">
                  <a data-toggle="tab" aria-expanded="true" href="#top-rated">
                    Top Rated
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-container">
              <div id="bestseller" className="tab-panel active">
                <div className="nozari-product">
                  <ul className="row list-products auto-clear equal-container product-grid">
                    <li className="product-item col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1">
                      <div className="product-inner equal-element">
                        <div className="product-top">
                          <div className="flash">
                            <span className="onnew">
                              <span className="text"> new </span>
                            </span>
                          </div>
                        </div>
                        <div className="product-thumb">
                          <div className="thumb-inner">
                            <a href="#">
                              <img
                                src="/src/assets/img/product21.png"
                                alt="img"
                              />
                            </a>
                            <div className="thumb-group">
                              <div className="yith-wcwl-add-to-wishlist">
                                <div className="yith-wcwl-add-button">
                                  <a href="#">Add to Wishlist</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-info">
                          <h5 className="product-name product_title">
                            <a href="#">Long Sleeve Midi</a>
                          </h5>
                          <div className="group-info">
                            <div className="stars-rating">
                              <div className="star-rating">
                                <span className="star-3"></span>
                              </div>
                              <div className="count-star">(3)</div>
                            </div>
                            <div className="price">
                              <del> $65 </del>
                              <ins> $45 </ins>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="product-item product-type-variable col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1">
                      <div className="product-inner equal-element">
                        <div className="product-top">
                          <div className="flash">
                            <span className="onnew">
                              <span className="text"> new </span>
                            </span>
                          </div>
                        </div>
                        <div className="product-thumb">
                          <div className="thumb-inner">
                            <a href="#">
                              <img
                                src="/src/assets/img/product22.png"
                                alt="img"
                              />
                            </a>
                            <div className="thumb-group">
                              <div className="yith-wcwl-add-to-wishlist">
                                <div className="yith-wcwl-add-button">
                                  <a href="#">Add to Wishlist</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-info">
                          <h5 className="product-name product_title">
                            <a href="#">Long Sleeve Midi</a>
                          </h5>
                          <div className="group-info">
                            <div className="stars-rating">
                              <div className="star-rating">
                                <span className="star-3"></span>
                              </div>
                              <div className="count-star">(3)</div>
                            </div>
                            <div className="price">
                              <del> $65 </del>
                              <ins> $45 </ins>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="product-item product-type-variable col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1">
                      <div className="product-inner equal-element">
                        <div className="product-top">
                          <div className="flash">
                            <span className="onnew">
                              <span className="text"> new </span>
                            </span>
                          </div>
                        </div>
                        <div className="product-thumb">
                          <div className="thumb-inner">
                            <a href="#">
                              <img
                                src="/src/assets/img/product23.png"
                                alt="img"
                              />
                            </a>
                            <div className="thumb-group">
                              <div className="yith-wcwl-add-to-wishlist">
                                <div className="yith-wcwl-add-button">
                                  <a href="#">Add to Wishlist</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-info">
                          <h5 className="product-name product_title">
                            <a href="#">Long Sleeve Midi</a>
                          </h5>
                          <div className="group-info">
                            <div className="stars-rating">
                              <div className="star-rating">
                                <span className="star-3"></span>
                              </div>
                              <div className="count-star">(3)</div>
                            </div>
                            <div className="price">
                              <del> $65 </del>
                              <ins> $45 </ins>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="product-item product-type-variable col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1">
                      <div className="product-inner equal-element">
                        <div className="product-top">
                          <div className="flash">
                            <span className="onnew">
                              <span className="text"> new </span>
                            </span>
                          </div>
                        </div>
                        <div className="product-thumb">
                          <div className="thumb-inner">
                            <a href="#">
                              <img
                                src="/src/assets/img/product24.png"
                                alt="img"
                              />
                            </a>
                            <div className="thumb-group">
                              <div className="yith-wcwl-add-to-wishlist">
                                <div className="yith-wcwl-add-button">
                                  <a href="#">Add to Wishlist</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-info">
                          <h5 className="product-name product_title">
                            <a href="#">Long Sleeve Midi</a>
                          </h5>
                          <div className="group-info">
                            <div className="stars-rating">
                              <div className="star-rating">
                                <span className="star-3"></span>
                              </div>
                              <div className="count-star">(3)</div>
                            </div>
                            <div className="price">
                              <del> $65 </del>
                              <ins> $45 </ins>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="product-item col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1">
                      <div className="product-inner equal-element">
                        <div className="product-top">
                          <div className="flash">
                            <span className="onnew">
                              <span className="text"> new </span>
                            </span>
                          </div>
                        </div>
                        <div className="product-thumb">
                          <div className="thumb-inner">
                            <a href="#">
                              <img
                                src="/src/assets/img/product25.png"
                                alt="img"
                              />
                            </a>
                            <div className="thumb-group">
                              <div className="yith-wcwl-add-to-wishlist">
                                <div className="yith-wcwl-add-button">
                                  <a href="#">Add to Wishlist</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-info">
                          <h5 className="product-name product_title">
                            <a href="#">Long Sleeve Midi</a>
                          </h5>
                          <div className="group-info">
                            <div className="stars-rating">
                              <div className="star-rating">
                                <span className="star-3"></span>
                              </div>
                              <div className="count-star">(3)</div>
                            </div>
                            <div className="price">
                              <del> $65 </del>
                              <ins> $45 </ins>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="product-item product-type-variable col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1">
                      <div className="product-inner equal-element">
                        <div className="product-top">
                          <div className="flash">
                            <span className="onnew">
                              <span className="text"> new </span>
                            </span>
                          </div>
                        </div>
                        <div className="product-thumb">
                          <div className="thumb-inner">
                            <a href="#">
                              <img
                                src="/src/assets/img/product29.png"
                                alt="img"
                              />
                            </a>
                            <div className="thumb-group">
                              <div className="yith-wcwl-add-to-wishlist">
                                <div className="yith-wcwl-add-button">
                                  <a href="#">Add to Wishlist</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-info">
                          <h5 className="product-name product_title">
                            <a href="#">Long Sleeve Midi</a>
                          </h5>
                          <div className="group-info">
                            <div className="stars-rating">
                              <div className="star-rating">
                                <span className="star-3"></span>
                              </div>
                              <div className="count-star">(3)</div>
                            </div>
                            <div className="price">
                              <del> $65 </del>
                              <ins> $45 </ins>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="product-item product-type-variable col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1">
                      <div className="product-inner equal-element">
                        <div className="product-top">
                          <div className="flash">
                            <span className="onnew">
                              <span className="text"> new </span>
                            </span>
                          </div>
                        </div>
                        <div className="product-thumb">
                          <div className="thumb-inner">
                            <a href="#">
                              <img
                                src="/src/assets/img/product27.png"
                                alt="img"
                              />
                            </a>
                            <div className="thumb-group">
                              <div className="yith-wcwl-add-to-wishlist">
                                <div className="yith-wcwl-add-button">
                                  <a href="#">Add to Wishlist</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-info">
                          <h5 className="product-name product_title">
                            <a href="#">Long Sleeve Midi</a>
                          </h5>
                          <div className="group-info">
                            <div className="stars-rating">
                              <div className="star-rating">
                                <span className="star-3"></span>
                              </div>
                              <div className="count-star">(3)</div>
                            </div>
                            <div className="price">
                              <del> $65 </del>
                              <ins> $45 </ins>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="product-item col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1">
                      <div className="product-inner equal-element">
                        <div className="product-top">
                          <div className="flash">
                            <span className="onnew">
                              <span className="text"> new </span>
                            </span>
                          </div>
                        </div>
                        <div className="product-thumb">
                          <div className="thumb-inner">
                            <a href="#">
                              <img
                                src="/src/assets/img/product28.png"
                                alt="img"
                              />
                            </a>
                            <div className="thumb-group">
                              <div className="yith-wcwl-add-to-wishlist">
                                <div className="yith-wcwl-add-button">
                                  <a href="#">Add to Wishlist</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-info">
                          <h5 className="product-name product_title">
                            <a href="#">Long Sleeve Midi</a>
                          </h5>
                          <div className="group-info">
                            <div className="stars-rating">
                              <div className="star-rating">
                                <span className="star-3"></span>
                              </div>
                              <div className="count-star">(3)</div>
                            </div>
                            <div className="price">
                              <del> $65 </del>
                              <ins> $45 </ins>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="new_arrivals" className="tab-panel">
                <div className="nozari-product">
                  <ul className="row list-products auto-clear equal-container product-grid">
                    <li className="product-item col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1">
                      <div className="product-inner equal-element">
                        <div className="product-top">
                          <div className="flash">
                            <span className="onnew">
                              <span className="text"> new </span>
                            </span>
                          </div>
                        </div>
                        <div className="product-thumb">
                          <div className="thumb-inner">
                            <a href="#">
                              <img
                                src="/src/assets/images/product-item-9.jpg"
                                alt="img"
                              />
                            </a>
                            <div className="thumb-group">
                              <div className="yith-wcwl-add-to-wishlist">
                                <div className="yith-wcwl-add-button">
                                  <a href="#">Add to Wishlist</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-info">
                          <h5 className="product-name product_title">
                            <a href="#">Long Sleeve Midi</a>
                          </h5>
                          <div className="group-info">
                            <div className="stars-rating">
                              <div className="star-rating">
                                <span className="star-3"></span>
                              </div>
                              <div className="count-star">(3)</div>
                            </div>
                            <div className="price">
                              <del> $65 </del>
                              <ins> $45 </ins>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="product-item product-type-variable col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1">
                      <div className="product-inner equal-element">
                        <div className="product-top">
                          <div className="flash">
                            <span className="onnew">
                              <span className="text"> new </span>
                            </span>
                          </div>
                        </div>
                        <div className="product-thumb">
                          <div className="thumb-inner">
                            <a href="#">
                              <img
                                src="/src/assets/images/product-item-10.jpg"
                                alt="img"
                              />
                            </a>
                            <div className="thumb-group">
                              <div className="yith-wcwl-add-to-wishlist">
                                <div className="yith-wcwl-add-button">
                                  <a href="#">Add to Wishlist</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-info">
                          <h5 className="product-name product_title">
                            <a href="#">Long Sleeve Midi</a>
                          </h5>
                          <div className="group-info">
                            <div className="stars-rating">
                              <div className="star-rating">
                                <span className="star-3"></span>
                              </div>
                              <div className="count-star">(3)</div>
                            </div>
                            <div className="price">
                              <del> $65 </del>
                              <ins> $45 </ins>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="product-item product-type-variable col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1">
                      <div className="product-inner equal-element">
                        <div className="product-top">
                          <div className="flash">
                            <span className="onnew">
                              <span className="text"> new </span>
                            </span>
                          </div>
                        </div>
                        <div className="product-thumb">
                          <div className="thumb-inner">
                            <a href="#">
                              <img
                                src="/src/assets/images/product-item-11.jpg"
                                alt="img"
                              />
                            </a>
                            <div className="thumb-group">
                              <div className="yith-wcwl-add-to-wishlist">
                                <div className="yith-wcwl-add-button">
                                  <a href="#">Add to Wishlist</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-info">
                          <h5 className="product-name product_title">
                            <a href="#">Long Sleeve Midi</a>
                          </h5>
                          <div className="group-info">
                            <div className="stars-rating">
                              <div className="star-rating">
                                <span className="star-3"></span>
                              </div>
                              <div className="count-star">(3)</div>
                            </div>
                            <div className="price">
                              <del> $65 </del>
                              <ins> $45 </ins>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="product-item product-type-variable col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1">
                      <div className="product-inner equal-element">
                        <div className="product-top">
                          <div className="flash">
                            <span className="onnew">
                              <span className="text"> new </span>
                            </span>
                          </div>
                        </div>
                        <div className="product-thumb">
                          <div className="thumb-inner">
                            <a href="#">
                              <img
                                src="/src/assets/images/product-item-13.jpg"
                                alt="img"
                              />
                            </a>
                            <div className="thumb-group">
                              <div className="yith-wcwl-add-to-wishlist">
                                <div className="yith-wcwl-add-button">
                                  <a href="#">Add to Wishlist</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-info">
                          <h5 className="product-name product_title">
                            <a href="#">Long Sleeve Midi</a>
                          </h5>
                          <div className="group-info">
                            <div className="stars-rating">
                              <div className="star-rating">
                                <span className="star-3"></span>
                              </div>
                              <div className="count-star">(3)</div>
                            </div>
                            <div className="price">
                              <del> $65 </del>
                              <ins> $45 </ins>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="product-item col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1">
                      <div className="product-inner equal-element">
                        <div className="product-top">
                          <div className="flash">
                            <span className="onnew">
                              <span className="text"> new </span>
                            </span>
                          </div>
                        </div>
                        <div className="product-thumb">
                          <div className="thumb-inner">
                            <a href="#">
                              <img
                                src="/src/assets/images/product-item-14.jpg"
                                alt="img"
                              />
                            </a>
                            <div className="thumb-group">
                              <div className="yith-wcwl-add-to-wishlist">
                                <div className="yith-wcwl-add-button">
                                  <a href="#">Add to Wishlist</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-info">
                          <h5 className="product-name product_title">
                            <a href="#">Long Sleeve Midi</a>
                          </h5>
                          <div className="group-info">
                            <div className="stars-rating">
                              <div className="star-rating">
                                <span className="star-3"></span>
                              </div>
                              <div className="count-star">(3)</div>
                            </div>
                            <div className="price">
                              <del> $65 </del>
                              <ins> $45 </ins>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="product-item product-type-variable col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1">
                      <div className="product-inner equal-element">
                        <div className="product-top">
                          <div className="flash">
                            <span className="onnew">
                              <span className="text"> new </span>
                            </span>
                          </div>
                        </div>
                        <div className="product-thumb">
                          <div className="thumb-inner">
                            <a href="#">
                              <img
                                src="/src/assets/images/product-item-15.jpg"
                                alt="img"
                              />
                            </a>
                            <div className="thumb-group">
                              <div className="yith-wcwl-add-to-wishlist">
                                <div className="yith-wcwl-add-button">
                                  <a href="#">Add to Wishlist</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-info">
                          <h5 className="product-name product_title">
                            <a href="#">Long Sleeve Midi</a>
                          </h5>
                          <div className="group-info">
                            <div className="stars-rating">
                              <div className="star-rating">
                                <span className="star-3"></span>
                              </div>
                              <div className="count-star">(3)</div>
                            </div>
                            <div className="price">
                              <del> $65 </del>
                              <ins> $45 </ins>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="product-item product-type-variable col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1">
                      <div className="product-inner equal-element">
                        <div className="product-top">
                          <div className="flash">
                            <span className="onnew">
                              <span className="text"> new </span>
                            </span>
                          </div>
                        </div>
                        <div className="product-thumb">
                          <div className="thumb-inner">
                            <a href="#">
                              <img
                                src="/src/assets/images/product-item-16.jpg"
                                alt="img"
                              />
                            </a>
                            <div className="thumb-group">
                              <div className="yith-wcwl-add-to-wishlist">
                                <div className="yith-wcwl-add-button">
                                  <a href="#">Add to Wishlist</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-info">
                          <h5 className="product-name product_title">
                            <a href="#">Long Sleeve Midi</a>
                          </h5>
                          <div className="group-info">
                            <div className="stars-rating">
                              <div className="star-rating">
                                <span className="star-3"></span>
                              </div>
                              <div className="count-star">(3)</div>
                            </div>
                            <div className="price">
                              <del> $65 </del>
                              <ins> $45 </ins>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="product-item col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1">
                      <div className="product-inner equal-element">
                        <div className="product-top">
                          <div className="flash">
                            <span className="onnew">
                              <span className="text"> new </span>
                            </span>
                          </div>
                        </div>
                        <div className="product-thumb">
                          <div className="thumb-inner">
                            <a href="#">
                              <img
                                src="/src/assets/images/product-item-2.jpg"
                                alt="img"
                              />
                            </a>
                            <div className="thumb-group">
                              <div className="yith-wcwl-add-to-wishlist">
                                <div className="yith-wcwl-add-button">
                                  <a href="#">Add to Wishlist</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-info">
                          <h5 className="product-name product_title">
                            <a href="#">Long Sleeve Midi</a>
                          </h5>
                          <div className="group-info">
                            <div className="stars-rating">
                              <div className="star-rating">
                                <span className="star-3"></span>
                              </div>
                              <div className="count-star">(3)</div>
                            </div>
                            <div className="price">
                              <del> $65 </del>
                              <ins> $45 </ins>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="top-rated" className="tab-panel">
                <div className="nozari-product">
                  <ul className="row list-products auto-clear equal-container product-grid">
                    <li className="product-item col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1">
                      <div className="product-inner equal-element">
                        <div className="product-top">
                          <div className="flash">
                            <span className="onnew">
                              <span className="text"> new </span>
                            </span>
                          </div>
                        </div>
                        <div className="product-thumb">
                          <div className="thumb-inner">
                            <a href="#">
                              <img
                                src="/src/assets/images/product-item-10.jpg"
                                alt="img"
                              />
                            </a>
                            <div className="thumb-group">
                              <div className="yith-wcwl-add-to-wishlist">
                                <div className="yith-wcwl-add-button">
                                  <a href="#">Add to Wishlist</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-info">
                          <h5 className="product-name product_title">
                            <a href="#">Long Sleeve Midi</a>
                          </h5>
                          <div className="group-info">
                            <div className="stars-rating">
                              <div className="star-rating">
                                <span className="star-3"></span>
                              </div>
                              <div className="count-star">(3)</div>
                            </div>
                            <div className="price">
                              <del> $65 </del>
                              <ins> $45 </ins>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="product-item product-type-variable col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1">
                      <div className="product-inner equal-element">
                        <div className="product-top">
                          <div className="flash">
                            <span className="onnew">
                              <span className="text"> new </span>
                            </span>
                          </div>
                        </div>
                        <div className="product-thumb">
                          <div className="thumb-inner">
                            <a href="#">
                              <img
                                src="/src/assets/images/product-item-12.jpg"
                                alt="img"
                              />
                            </a>
                            <div className="thumb-group">
                              <div className="yith-wcwl-add-to-wishlist">
                                <div className="yith-wcwl-add-button">
                                  <a href="#">Add to Wishlist</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-info">
                          <h5 className="product-name product_title">
                            <a href="#">Long Sleeve Midi</a>
                          </h5>
                          <div className="group-info">
                            <div className="stars-rating">
                              <div className="star-rating">
                                <span className="star-3"></span>
                              </div>
                              <div className="count-star">(3)</div>
                            </div>
                            <div className="price">
                              <del> $65 </del>
                              <ins> $45 </ins>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="product-item product-type-variable col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1">
                      <div className="product-inner equal-element">
                        <div className="product-top">
                          <div className="flash">
                            <span className="onnew">
                              <span className="text"> new </span>
                            </span>
                          </div>
                        </div>
                        <div className="product-thumb">
                          <div className="thumb-inner">
                            <a href="#">
                              <img
                                src="/src/assets/images/product-item-8.jpg"
                                alt="img"
                              />
                            </a>
                            <div className="thumb-group">
                              <div className="yith-wcwl-add-to-wishlist">
                                <div className="yith-wcwl-add-button">
                                  <a href="#">Add to Wishlist</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-info">
                          <h5 className="product-name product_title">
                            <a href="#">Long Sleeve Midi</a>
                          </h5>
                          <div className="group-info">
                            <div className="stars-rating">
                              <div className="star-rating">
                                <span className="star-3"></span>
                              </div>
                              <div className="count-star">(3)</div>
                            </div>
                            <div className="price">
                              <del> $65 </del>
                              <ins> $45 </ins>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="product-item product-type-variable col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1">
                      <div className="product-inner equal-element">
                        <div className="product-top">
                          <div className="flash">
                            <span className="onnew">
                              <span className="text"> new </span>
                            </span>
                          </div>
                        </div>
                        <div className="product-thumb">
                          <div className="thumb-inner">
                            <a href="#">
                              <img
                                src="/src/assets/images/product-item-4.jpg"
                                alt="img"
                              />
                            </a>
                            <div className="thumb-group">
                              <div className="yith-wcwl-add-to-wishlist">
                                <div className="yith-wcwl-add-button">
                                  <a href="#">Add to Wishlist</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-info">
                          <h5 className="product-name product_title">
                            <a href="#">Long Sleeve Midi</a>
                          </h5>
                          <div className="group-info">
                            <div className="stars-rating">
                              <div className="star-rating">
                                <span className="star-3"></span>
                              </div>
                              <div className="count-star">(3)</div>
                            </div>
                            <div className="price">
                              <del> $65 </del>
                              <ins> $45 </ins>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="product-item col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1">
                      <div className="product-inner equal-element">
                        <div className="product-top">
                          <div className="flash">
                            <span className="onnew">
                              <span className="text"> new </span>
                            </span>
                          </div>
                        </div>
                        <div className="product-thumb">
                          <div className="thumb-inner">
                            <a href="#">
                              <img
                                src="/src/assets/images/product-item-9.jpg"
                                alt="img"
                              />
                            </a>
                            <div className="thumb-group">
                              <div className="yith-wcwl-add-to-wishlist">
                                <div className="yith-wcwl-add-button">
                                  <a href="#">Add to Wishlist</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-info">
                          <h5 className="product-name product_title">
                            <a href="#">Long Sleeve Midi</a>
                          </h5>
                          <div className="group-info">
                            <div className="stars-rating">
                              <div className="star-rating">
                                <span className="star-3"></span>
                              </div>
                              <div className="count-star">(3)</div>
                            </div>
                            <div className="price">
                              <del> $65 </del>
                              <ins> $45 </ins>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="product-item product-type-variable col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1">
                      <div className="product-inner equal-element">
                        <div className="product-top">
                          <div className="flash">
                            <span className="onnew">
                              <span className="text"> new </span>
                            </span>
                          </div>
                        </div>
                        <div className="product-thumb">
                          <div className="thumb-inner">
                            <a href="#">
                              <img
                                src="/src/assets/images/product-item-13.jpg"
                                alt="img"
                              />
                            </a>
                            <div className="thumb-group">
                              <div className="yith-wcwl-add-to-wishlist">
                                <div className="yith-wcwl-add-button">
                                  <a href="#">Add to Wishlist</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-info">
                          <h5 className="product-name product_title">
                            <a href="#">Long Sleeve Midi</a>
                          </h5>
                          <div className="group-info">
                            <div className="stars-rating">
                              <div className="star-rating">
                                <span className="star-3"></span>
                              </div>
                              <div className="count-star">(3)</div>
                            </div>
                            <div className="price">
                              <del> $65 </del>
                              <ins> $45 </ins>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="product-item product-type-variable col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1">
                      <div className="product-inner equal-element">
                        <div className="product-top">
                          <div className="flash">
                            <span className="onnew">
                              <span className="text"> new </span>
                            </span>
                          </div>
                        </div>
                        <div className="product-thumb">
                          <div className="thumb-inner">
                            <a href="#">
                              <img
                                src="/src/assets/images/product-item-16.jpg"
                                alt="img"
                              />
                            </a>
                            <div className="thumb-group">
                              <div className="yith-wcwl-add-to-wishlist">
                                <div className="yith-wcwl-add-button">
                                  <a href="#">Add to Wishlist</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-info">
                          <h5 className="product-name product_title">
                            <a href="#">Long Sleeve Midi</a>
                          </h5>
                          <div className="group-info">
                            <div className="stars-rating">
                              <div className="star-rating">
                                <span className="star-3"></span>
                              </div>
                              <div className="count-star">(3)</div>
                            </div>
                            <div className="price">
                              <del> $65 </del>
                              <ins> $45 </ins>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="product-item col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1">
                      <div className="product-inner equal-element">
                        <div className="product-top">
                          <div className="flash">
                            <span className="onnew">
                              <span className="text"> new </span>
                            </span>
                          </div>
                        </div>
                        <div className="product-thumb">
                          <div className="thumb-inner">
                            <a href="#">
                              <img
                                src="/src/assets/images/product-item-8.jpg"
                                alt="img"
                              />
                            </a>
                            <div className="thumb-group">
                              <div className="yith-wcwl-add-to-wishlist">
                                <div className="yith-wcwl-add-button">
                                  <a href="#">Add to Wishlist</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-info">
                          <h5 className="product-name product_title">
                            <a href="#">Long Sleeve Midi</a>
                          </h5>
                          <div className="group-info">
                            <div className="stars-rating">
                              <div className="star-rating">
                                <span className="star-3"></span>
                              </div>
                              <div className="count-star">(3)</div>
                            </div>
                            <div className="price">
                              <del> $65 </del>
                              <ins> $45 </ins>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="newsletter-wrapp">
          <div className="nozari-newsletter style3">
            <div className="container">
              <div className="newsletter-head">
                <h3 className="title">Sign up Newsletter</h3>
                <div className="subtitle">
                  Subscribe to get more special Deals,
                  <br />
                  Events & Promotions
                </div>
              </div>
              <div className="newsletter-form-wrap">
                <input
                  className="input-text email email-newsletter"
                  type="email"
                  name="email"
                  placeholder="Your email letter"
                />
                <button className="button btn-submit submit-newsletter">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Our Latest News */}
        <div className="nozari-blog-wraap default">
          <div className="container">
            <h3 className="custommenu-title-blog">Our Latest News</h3>
            <div className="nozari-blog default">
              <div
                className="owl-slick equal-container nav-center flex justify-center"
                data-slick='{"autoplay":false, "autoplaySpeed":200, "arrows":false, "dots":true, "infinite":true, "speed":800, "rows":1}'
                data-responsive='[{"breakpoint":"2000","settings":{"slidesToShow":3}},{"breakpoint":"1200","settings":{"slidesToShow":3}},{"breakpoint":"992","settings":{"slidesToShow":2}},{"breakpoint":"768","settings":{"slidesToShow":2}},{"breakpoint":"481","settings":{"slidesToShow":1}}]'
              >
                <div className="nozari-blog-item equal-element layout1 mx-2">
                  <div className="post-thumb">
                    <a href="#">
                      <img
                        src="/src/assets/images/instagram/daynew1.jpeg"
                        alt="img"
                      />
                    </a>
                    <div className="category-blog">
                      <ul className="list-category">
                        <li className="category-item">
                          <a href="#">Skincare</a>
                        </li>
                      </ul>
                    </div>
                    <div className="post-item-share">
                      <a href="#" className="icon">
                        <i className="fa fa-share-alt" aria-hidden="true"></i>
                      </a>
                      <div className="box-content">
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-google-plus"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-pinterest"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="blog-info">
                    <div className="blog-meta">
                      <div className="post-date">Agust 17, 09:14 am</div>
                      <span className="view">
                        <i className="icon fa fa-eye" aria-hidden="true"></i>
                        631
                      </span>
                      <span className="comment">
                        <i
                          className="icon fa fa-commenting"
                          aria-hidden="true"
                        ></i>
                        84
                      </span>
                    </div>
                    <h2 className="blog-title">
                      <a href="#">We bring you the best by working</a>
                    </h2>
                    <div className="main-info-post">
                      <p className="des">
                        Phasellus condimentum nulla a arcu lacinia, a venenatis
                        ex congue. Mauris nec ante magna.
                      </p>
                      <a className="readmore" href="#">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nozari-blog-item equal-element layout1 mx-2">
                  <div className="post-thumb">
                    <a href="#">
                      <img
                        src="/src/assets/images/instagram/daynew3.jpg"
                        alt="img"
                      />
                    </a>
                    <div className="category-blog">
                      <ul className="list-category">
                        <li className="category-item">
                          <a href="#">HOW TO</a>
                        </li>
                      </ul>
                    </div>
                    <div className="post-item-share">
                      <a href="#" className="icon">
                        <i className="fa fa-share-alt" aria-hidden="true"></i>
                      </a>
                      <div className="box-content">
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-google-plus"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-pinterest"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="blog-info">
                    <div className="blog-meta">
                      <div className="post-date">Agust 17, 09:14 am</div>
                      <span className="view">
                        <i className="icon fa fa-eye" aria-hidden="true"></i>
                        631
                      </span>
                      <span className="comment">
                        <i
                          className="icon fa fa-commenting"
                          aria-hidden="true"
                        ></i>
                        84
                      </span>
                    </div>
                    <h2 className="blog-title">
                      <a href="#">We know that buying furniture</a>
                    </h2>
                    <div className="main-info-post">
                      <p className="des">
                        Using Lorem Ipsum allows designers to put together
                        layouts and the form content
                      </p>
                      <a className="readmore" href="#">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="nozari-blog-item equal-element layout1 mx-2">
                  <div className="post-thumb">
                    <div className="video-nozari-blog">
                      <figure>
                        <img
                          src="/src/assets/images/instagram/daynew2.jpg"
                          alt="img"
                          // width="370"
                          // height="280"
                        />
                      </figure>
                    </div>

                    <div className="post-item-share">
                      <a href="#" className="icon">
                        <i className="fa fa-share-alt" aria-hidden="true"></i>
                      </a>
                      <div className="box-content">
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-google-plus"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-pinterest"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="blog-info">
                    <div className="blog-meta">
                      <div className="post-date">Agust 17, 09:14 am</div>
                      <span className="view">
                        <i className="icon fa fa-eye" aria-hidden="true"></i>
                        631
                      </span>
                      <span className="comment">
                        <i
                          className="icon fa fa-commenting"
                          aria-hidden="true"
                        ></i>
                        84
                      </span>
                    </div>
                    <h2 className="blog-title">
                      <a href="#">We design functional furniture</a>
                    </h2>
                    <div className="main-info-post">
                      <p className="des">
                        Risus non porta suscipit lobortis habitasse felis,
                        aptent interdum pretium ut.
                      </p>
                      <a className="readmore" href="#">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="instagram-wrapp">
          <div>
            <h3 className="custommenu-title-blog">
              <i className="flaticon-instagram" aria-hidden="true" />
              Instagram Feed
            </h3>
            <div className="nozari-instagram">
              <div
                className="instagram owl-slick equal-container"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
                data-slick='{"autoplay":false, "autoplaySpeed":1000, "arrows":false, "dots":false, "infinite":true, "speed":800, "rows":1}'
                data-responsive='[{"breakpoint":"2000","settings":{"slidesToShow":5}},{"breakpoint":"1200","settings":{"slidesToShow":4}},{"breakpoint":"992","settings":{"slidesToShow":3}},{"breakpoint":"768","settings":{"slidesToShow":2}},{"breakpoint":"481","settings":{"slidesToShow":2}}]'
              >
                <div className="item-instagram">
                  <a href="#">
                    <img
                      src="src/assets/images/instagram/1.jpg"
                      alt="img"
                      style={{ width: "302px", height: "302px" }}
                    />
                  </a>
                  <span className="text">
                    <InstagramOutlined />
                  </span>
                </div>
                <div className="item-instagram">
                  <a href="#">
                    <img
                      src="src/assets/images/instagram/2.jpg"
                      alt="img"
                      style={{ width: "302px", height: "302px" }}
                    />
                  </a>
                  <span className="text">
                    <InstagramOutlined />
                  </span>
                </div>
                <div className="item-instagram">
                  <a href="#">
                    <img
                      src="src/assets/images/instagram/3.jpg"
                      alt="img"
                      style={{ width: "302px", height: "302px" }}
                    />
                  </a>
                  <span className="text">
                    <InstagramOutlined />
                  </span>
                </div>
                <div className="item-instagram">
                  <a href="#">
                    <img
                      src="src/assets/images/instagram/4.jpg"
                      alt="img"
                      style={{ width: "302px", height: "302px" }}
                    />
                  </a>
                  <span className="text">
                    <InstagramOutlined />
                  </span>
                </div>
                <div className="item-instagram">
                  <a href="#">
                    <img
                      src="src/assets/images/instagram/5.jpeg"
                      alt="img"
                      style={{ width: "302px", height: "302px" }}
                    />
                  </a>
                  <span className="text">
                    <InstagramOutlined />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* instagram */}
    </div>
  );
};

export default Main;
