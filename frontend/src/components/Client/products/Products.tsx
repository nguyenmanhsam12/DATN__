import React from 'react'
import { AppstoreOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

type Props = {}

const Products = (props: Props) => {
  return (
    <div className="main-content main-content-product no-sidebar">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb-trail breadcrumbs">
            <ul className="trail-items breadcrumb">
              <li className="trail-item trail-begin">
                <a href="index-2.html">Home</a>
              </li>
              <li className="trail-item trail-end active">Grid Products</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="content-area shop-grid-content full-width col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="site-main">
            <h3 className="custom_blog_title">Grid Products</h3>
            <div className="shop-top-control">
              <form className="select-item select-form">
                <span className="title">Sort:</span>
                <select
                  data-placeholder="9 Products/Page"
                  className="chosen-select"
                >
                  <option value={2}>9 Products/Page</option>
                  <option value={1}>12 Products/Page</option>
                  <option value={3}>10 Products/Page</option>
                  <option value={4}>8 Products/Page</option>
                  <option value={5}>6 Products/Page</option>
                </select>
              </form>
              <form className="filter-choice select-form">
                <span className="title">Sort by</span>
                <select
                  data-placeholder="Price: Low to High"
                  className="chosen-select"
                >
                  <option value={1}>Price: Low to High</option>
                  <option value={2}>Sort by popularity</option>
                  <option value={3}>Sort by average rating</option>
                  <option value={4}>Sort by newness</option>
                  <option value={5}>Sort by price: low to high</option>
                </select>
              </form>
              <div className="grid-view-mode">
                <div className="inner">
                  <a style={{cursor: 'pointer'}}>
                  <AppstoreOutlined
                  style={{fontSize:"25px"}}
                  />
                  <span></span>
                  <span></span>
                  <span></span>
                  </a>
                  
                </div>
              </div>
            </div>
            <ul className="row list-products auto-clear equal-container product-grid">
              <li className="product-item  col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1">
                <div className="product-inner equal-element">
                  <div className="product-top">
                    <div className="flash">
                      <span className="onnew">
                        <span className="text">new</span>
                      </span>
                    </div>
                  </div>
                  <div className="product-thumb">
                    <div className="thumb-inner">
                    <Link to="/products/details">
                        <img src="/../../public/assets/img/product13.png" alt="img"/>
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
                          <span className="star-3" />
                        </div>
                        <div className="count-star">(3)</div>
                      </div>
                      <div className="price">
                        <del>$65</del>
                        <ins>$45</ins>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="product-item product-type-variable col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1">
                <div className="product-inner equal-element">
                  <div className="product-top"></div>
                  <div className="product-thumb">
                    <div className="thumb-inner">
                    <Link to="/products/details">
                        <img src="/../../public/assets/img/product14.png" alt="img"/>
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
                          <span className="star-3" />
                        </div>
                        <div className="count-star">(3)</div>
                      </div>
                      <div className="price">
                        <del>$65</del>
                        <ins>$45</ins>
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
                        <span className="text">new</span>
                      </span>
                    </div>
                  </div>
                  <div className="product-thumb">
                    <div className="thumb-inner">
                    <Link to="/products/details">
                        <img src="/../../public/assets/img/product15.jpg" alt="img"/>
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
                          <span className="star-3" />
                        </div>
                        <div className="count-star">(3)</div>
                      </div>
                      <div className="price">
                        <del>$65</del>
                        <ins>$45</ins>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="product-item product-type-variable col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1">
                <div className="product-inner equal-element">
                  <div className="product-top"></div>
                  <div className="product-thumb">
                    <div className="thumb-inner">
                    <Link to="/products/details">
                        <img src="/../../public/assets/img/product16.png" alt="img"/>
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
                          <span className="star-3" />
                        </div>
                        <div className="count-star">(3)</div>
                      </div>
                      <div className="price">
                        <del>$65</del>
                        <ins>$45</ins>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="product-item  col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1">
                <div className="product-inner equal-element">
                  <div className="product-top"></div>
                  <div className="product-thumb">
                    <div className="thumb-inner">
                    <Link to="/products/details">
                        <img src="/../../public/assets/img/product17.png" alt="img"/>
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
                          <span className="star-3" />
                        </div>
                        <div className="count-star">(3)</div>
                      </div>
                      <div className="price">
                        <del>$65</del>
                        <ins>$45</ins>
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
                        <span className="text">new</span>
                      </span>
                    </div>
                  </div>
                  <div className="product-thumb">
                    <div className="thumb-inner">
                    <Link to="/products/details">
                        <img src="/../../public/assets/img/product18.png" alt="img"/>
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
                          <span className="star-3" />
                        </div>
                        <div className="count-star">(3)</div>
                      </div>
                      <div className="price">
                        <del>$65</del>
                        <ins>$45</ins>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="product-item product-type-variable col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1">
                <div className="product-inner equal-element">
                  <div className="product-top"></div>
                  <div className="product-thumb">
                    <div className="thumb-inner">
                    <Link to="/products/details">
                        <img src="/../../public/assets/img/product19.png" alt="img"/>
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
                          <span className="star-3" />
                        </div>
                        <div className="count-star">(3)</div>
                      </div>
                      <div className="price">
                        <del>$65</del>
                        <ins>$45</ins>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="product-item  col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1">
                <div className="product-inner equal-element">
                  <div className="product-top"></div>
                  <div className="product-thumb">
                    <div className="thumb-inner">
                    <Link to="/products/details">
                        <img src="/../../public/assets/img/product20.png" alt="img"/>
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
                          <span className="star-3" />
                        </div>
                        <div className="count-star">(3)</div>
                      </div>
                      <div className="price">
                        <del>$65</del>
                        <ins>$45</ins>
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
                        <span className="text">new</span>
                      </span>
                    </div>
                  </div>
                  <div className="product-thumb">
                    <div className="thumb-inner">
                    <Link to="/products/details">
                        <img src="/../../public/assets/img/product21.png" alt="img"/>
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
                          <span className="star-3" />
                        </div>
                        <div className="count-star">(3)</div>
                      </div>
                      <div className="price">
                        <del>$65</del>
                        <ins>$45</ins>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="product-item  col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1">
                <div className="product-inner equal-element">
                  <div className="product-top"></div>
                  <div className="product-thumb">
                    <div className="thumb-inner">
                    <Link to="/products/details">
                        <img src="/../../public/assets/img/product22.png" alt="img"/>
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
                          <span className="star-3" />
                        </div>
                        <div className="count-star">(3)</div>
                      </div>
                      <div className="price">
                        <del>$65</del>
                        <ins>$45</ins>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="product-item  col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1">
                <div className="product-inner equal-element">
                  <div className="product-top">
                    <div className="flash">
                      <span className="onnew">
                        <span className="text">new</span>
                      </span>
                    </div>
                  </div>
                  <div className="product-thumb">
                    <div className="thumb-inner">
                    <Link to="/products/details">
                        <img src="/../../public/assets/img/product23.png" alt="img"/>
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
                          <span className="star-3" />
                        </div>
                        <div className="count-star">(3)</div>
                      </div>
                      <div className="price">
                        <del>$65</del>
                        <ins>$45</ins>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="product-item  col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-12 style-1">
                <div className="product-inner equal-element">
                  <div className="product-top">
                    <div className="flash">
                      <span className="onnew">
                        <span className="text">new</span>
                      </span>
                    </div>
                  </div>
                  <div className="product-thumb">
                    <div className="thumb-inner">
                    <Link to="/products/details">
                        <img src="/../../public/assets/img/product24.png" alt="img"/>
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
                          <span className="star-3" />
                        </div>
                        <div className="count-star">(3)</div>
                      </div>
                      <div className="price">
                        <del>$65</del>
                        <ins>$45</ins>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className="pagination clearfix style2">
              <div className="nav-link">
                <a href="#" className="page-numbers ">
                  <i className="icon fa fa-angle-left" aria-hidden="true"  />
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
        <div className="sidebar col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <div className="wrapper-sidebar shop-sidebar">
            <div className="widget woof_Widget">
              <div className="widget widget-categories">
                <h3 className="widgettitle">Categories</h3>
                <ul className="list-categories">
                  <li>
                    <input type="checkbox" id="cb1" />
                    <label htmlFor="cb1" className="label-text">
                      New Arrivals
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="cb2" />
                    <label htmlFor="cb2" className="label-text">
                      Shoes
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="cb3" />
                    <label htmlFor="cb3" className="label-text">
                      Tables
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="cb4" />
                    <label htmlFor="cb4" className="label-text">
                      Trousers
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="cb5" />
                    <label htmlFor="cb5" className="label-text">
                      Accessories
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="cb6" />
                    <label htmlFor="cb6" className="label-text">
                      Bags
                    </label>
                  </li>
                </ul>
              </div>
              <div className="widget widget_filter_price">
                <h4 className="widgettitle">Price</h4>
                <div className="price-slider-wrapper">
                  <div
                    data-label-reasult="Range:"
                    data-min={0}
                    data-max={3000}
                    data-unit="$"
                    className="slider-range-price "
                    data-value-min={0}
                    data-value-max={1000}
                  ></div>
                  <div className="price-slider-amount">
                    <span className="from">$45</span>
                    <span className="to">$215</span>
                  </div>
                </div>
              </div>
              <div className="widget widget-brand">
                <h3 className="widgettitle">Brand</h3>
                <ul className="list-brand">
                  <li>
                    <input id="cb7" type="checkbox" />
                    <label htmlFor="cb7" className="label-text">
                      New Arrivals
                    </label>
                  </li>
                  <li>
                    <input id="cb8" type="checkbox" />
                    <label htmlFor="cb8" className="label-text">
                      Shoes
                    </label>
                  </li>
                  <li>
                    <input id="cb9" type="checkbox" />
                    <label htmlFor="cb9" className="label-text">
                      Tables
                    </label>
                  </li>
                  <li>
                    <input id="cb10" type="checkbox" />
                    <label htmlFor="cb10" className="label-text">
                      Trousers
                    </label>
                  </li>
                  <li>
                    <input id="cb11" type="checkbox" />
                    <label htmlFor="cb11" className="label-text">
                      Accessories
                    </label>
                  </li>
                  <li>
                    <input id="cb12" type="checkbox" />
                    <label htmlFor="cb12" className="label-text">
                      Bags
                    </label>
                  </li>
                </ul>
              </div>
              <div className="widget widget_filter_size">
                <h4 className="widgettitle">Size</h4>
                <ul className="list-size">
                  <li>
                    <a href="#">xs</a>
                  </li>
                  <li>
                    <a href="#">s</a>
                  </li>
                  <li className="active">
                    <a href="#">m</a>
                  </li>
                  <li>
                    <a href="#">l</a>
                  </li>
                  <li>
                    <a href="#">xl</a>
                  </li>
                  <li>
                    <a href="#">xxl</a>
                  </li>
                </ul>
              </div>
              <div className="widget widget-color">
                <h4 className="widgettitle">Color</h4>
                <div className="list-color">
                  <a href="#" className="color1" />
                  <a href="#" className="color2 " />
                  <a href="#" className="color3 active" />
                  <a href="#" className="color4" />
                  <a href="#" className="color5" />
                  <a href="#" className="color6" />
                  <a href="#" className="color7" />
                </div>
              </div>
              <div className="widget widget-tags">
                <h3 className="widgettitle">Popular Tags</h3>
                <ul className="tagcloud">
                  <li className="tag-cloud-link">
                    <a href="#">Fashion</a>
                  </li>
                  <li className="tag-cloud-link">
                    <a href="#">Trousers</a>
                  </li>
                  <li className="tag-cloud-link">
                    <a href="#">Hat</a>
                  </li>
                  <li className="tag-cloud-link active">
                    <a href="#">Accessories</a>
                  </li>
                  <li className="tag-cloud-link">
                    <a href="#">Hot</a>
                  </li>
                  <li className="tag-cloud-link">
                    <a href="#">Bags</a>
                  </li>
                  <li className="tag-cloud-link">
                    <a href="#">Shoes</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="widget newsletter-widget">
              <div className="newsletter-form-wrap ">
                <h3 className="title">Subscribe to Our Newsletter</h3>
                <div className="subtitle">
                  More special Deals, Events &amp; Promotions
                </div>
                <input
                  type="email"
                  className="email"
                  placeholder="Your email letter"
                />
                <button type="submit" className="button submit-newsletter">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Products