import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const ProductDetails = (props: Props) => {
  const [selectedSize, setSelectedSize] = useState('39'); // Default size
  const [selectedColor, setSelectedColor] = useState('color1'); // Default color
  const [quantity, setQuantity] = useState(1); // Default quantity
  const price = 45; 

  // size 
  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  // color 
  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  // quantity
  const handleQuantityChange = (change: number) => {
    setQuantity((prev) => Math.max(prev + change, 1)); 
  };

  return (
    <div className="main-content main-content-details single no-sidebar">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-trail breadcrumbs">
              <ul className="trail-items breadcrumb">
                <li className="trail-item trail-begin">
                  <Link to="/">Home</Link>
                </li>
                <li className="trail-item trail-end active">Product Details</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="content-area content-details full-width col-lg-9 col-md-8 col-sm-12 col-xs-12">
            <div className="site-main">
              <div className="details-product">
                <div className="details-thumd">
                  <div className="image-preview-container image-thick-box image_preview_container">
                    <img
                      id="img_zoom"
                      data-zoom-image="assets/images/details-item-1.jpg"
                      src="/../../public/assets/img/product13.png" alt="img"/>
                    <a href="#" className="btn-zoom open_qv">
                      <i className="fa fa-search" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="product-preview image-small product_preview">
                    <div
                      id="thumbnails"
                      className="thumbnails_carousel owl-carousel"
                      data-nav="true"
                      data-autoplay="false"
                      data-dots="false"
                      data-loop="false"
                      data-margin={10}
                      data-responsive='{"0":{"items":3},"480":{"items":3},"600":{"items":3},"1000":{"items":3}}'
                    >
                      <a href="#" data-image="assets/images/details-item-1.jpg" data-zoom-image="assets/images/details-item-1.jpg" className="active">
                        <img src="assets/images/details-item-1.jpg" data-large-image="assets/images/details-item-1.jpg" alt="img" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="details-infor">
                  <h1 className="product-title">Eclipse Pendant Light</h1>
                  <div className="stars-rating">
                    <div className="star-rating">
                      <span className="star-5" />
                    </div>
                    <div className="count-star">(7)</div>
                  </div>
                  <div className="availability">availability: <a href="#">in Stock</a></div>
                  <div className="price">
                    <span>${price}</span>
                  </div>
                  <div className="product-details-description">
                    <ul>
                      <li>Vestibulum tortor quam</li>
                      <li>Imported</li>
                      <li>Art.No. 06-7680</li>
                    </ul>
                  </div>
                  <div className="variations">
                    <div className="attribute attribute_color">
                      <div className="color-text text-attribute">Color:</div>
                      <div className="list-color list-item">
                        <a  className={`color1 ${selectedColor === 'color1' ? 'active' : ''}`} onClick={() => handleColorChange('color1')} style={{ cursor: 'pointer' }}/>
                        <a  className={`color2 ${selectedColor === 'color2' ? 'active' : ''}`} onClick={() => handleColorChange('color2')} style={{ cursor: 'pointer' }}/>
                        <a  className={`color3 ${selectedColor === 'color3' ? 'active' : ''}`} onClick={() => handleColorChange('color3')} style={{ cursor: 'pointer' }}/>
                        <a  className={`color4 ${selectedColor === 'color4' ? 'active' : ''}`} onClick={() => handleColorChange('color4')} style={{ cursor: 'pointer' }}/>
                      </div>
                    </div>
                    <div className="attribute attribute_size">
                      <div className="size-text text-attribute">Size:</div>
                      <div className="list-size list-item">
                        {['37', '38', '39', '40', '41'].map(size => (
                          <a
                            key={size}
                            className={selectedSize === size ? 'active' : ''}
                            onClick={() => handleSizeChange(size)}
                            style={{ cursor: 'pointer' }}
                          >
                            {size}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="group-button">
                    <div className="quantity-add-to-cart">
                      <div className="quantity">
                        <div className="control">
                          <a className="btn-number qtyminus quantity-minus"  onClick={() => handleQuantityChange(-1)} style={{ cursor: 'pointer' }}>-</a>
                          <input
                            type="text"
                            data-step={10}
                            data-min={1}
                            value={quantity}
                            title="Qty"
                            className="input-qty qty"
                            size={4}
                            readOnly
                            
                          />
                          <a className="btn-number qtyplus quantity-plus"  onClick={() => handleQuantityChange(1)} style={{ cursor: 'pointer' }}>+</a>
                        </div>
                      </div>
                      <Link to="/cart">
                        <button className="single_add_to_cart_button button">
                          Add to cart
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-details-product">
              </div>
              <div style={{ clear: "left" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
