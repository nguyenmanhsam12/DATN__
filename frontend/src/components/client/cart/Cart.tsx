import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Cart = (props: Props) => {
  return (
    <div><div className="site-content">
    <main className="site-main  main-container no-sidebar">
      <div className="container">
        <div className="breadcrumb-trail breadcrumbs">
          <ul className="trail-items breadcrumb">
            <li className="trail-item trail-begin">
              <a href="#">
                <span>Home</span>
              </a>
            </li>
            <li className="trail-item trail-end active">
              <span>Shopping Cart</span>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="main-content-cart main-content col-sm-12">
            <h3 className="custom_blog_title">Shopping Cart</h3>
            <div className="page-main-content">
              <div className="shoppingcart-content">
                <form className="cart-form">
                  <table className="shop_table">
                    <thead>
                      <tr>
                        <th className="product-remove" />
                        <th className="product-thumbnail" />
                        <th className="product-name" />
                        <th className="product-price" />
                        <th className="product-quantity" />
                        <th className="product-subtotal" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="cart_item">
                        <td className="product-remove">
                          <a href="#" className="remove" />
                        </td>
                        <td className="product-thumbnail">
                          <a href="#">
                          <img src="/src/assets/img/seller3.png" alt="img" />
                          </a>
                        </td>
                        <td className="product-name" data-title="Product">
                          <a href="#" className="title">
                            Mini swing dress
                          </a>
                          <span className="attributes-select attributes-color">
                            Black,
                          </span>
                          <span className="attributes-select attributes-size">
                            XXL
                          </span>
                        </td>
                        <td className="product-quantity" data-title="Quantity">
                          <div className="quantity">
                            <div className="control">
                              <a
                                className="btn-number qtyminus quantity-minus"
                                href="#"
                              >
                                -
                              </a>
                              <input
                                type="text"
                                data-step={1}
                                data-min={0}
                                defaultValue={1}
                                title="Qty"
                                className="input-qty qty"
                                size={4}
                              />
                              <a
                                href="#"
                                className="btn-number qtyplus quantity-plus"
                              >
                                +
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="product-price" data-title="Price">
                          <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            45
                          </span>
                        </td>
                      </tr>
                      <tr className="cart_item">
                        <td className="product-remove">
                          <a href="#" className="remove" />
                        </td>
                        <td className="product-thumbnail">
                          <a href="#">
                          <img src="/src/assets/img/seller1.png" alt="img" />
                          </a>
                        </td>
                        <td className="product-name" data-title="Product">
                          <a href="#" className="title">
                            Square neck top
                          </a>
                          <span className="attributes-select attributes-color">
                            White,
                          </span>
                          <span className="attributes-select attributes-size">
                            M
                          </span>
                        </td>
                        <td className="product-quantity" data-title="Quantity">
                          <div className="quantity">
                            <div className="control">
                              <a
                                className="btn-number qtyminus quantity-minus"
                                href="#"
                              >
                                -
                              </a>
                              <input
                                type="text"
                                data-step={1}
                                data-min={0}
                                defaultValue={1}
                                title="Qty"
                                className="input-qty qty"
                                size={4}
                              />
                              <a
                                href="#"
                                className="btn-number qtyplus quantity-plus"
                              >
                                +
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="product-price" data-title="Price">
                          <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            45
                          </span>
                        </td>
                      </tr>
                      <tr className="cart_item">
                        <td className="product-remove">
                          <a href="#" className="remove" />
                        </td>
                        <td className="product-thumbnail">
                          <a href="#">
                          <img src="/src/assets/img/seller2.png" alt="img" />

                          </a>
                        </td>
                        <td className="product-name" data-title="Product">
                          <a href="#" className="title">
                            Long Sleeve Midi
                          </a>
                          <span className="attributes-select attributes-color">
                            Brown,
                          </span>
                          <span className="attributes-select attributes-size">
                            XS
                          </span>
                        </td>
                        <td className="product-quantity" data-title="Quantity">
                          <div className="quantity">
                            <div className="control">
                              <a
                                className="btn-number qtyminus quantity-minus"
                                href="#"
                              >
                                -
                              </a>
                              <input
                                type="text"
                                data-step={1}
                                data-min={0}
                                defaultValue={1}
                                title="Qty"
                                className="input-qty qty"
                                size={4}
                              />
                              <a
                                href="#"
                                className="btn-number qtyplus quantity-plus"
                              >
                                +
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="product-price" data-title="Price">
                          <span className="woocommerce-Price-amount amount">
                            <span className="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            45
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="actions">
                          <div className="coupon">
                            <label className="coupon_code">Coupon Code:</label>
                            <input
                              type="text"
                              className="input-text"
                              placeholder="Promotion code here"
                              style={{marginLeft: "10px"}} 
                            />
                            <a href="#" className="button" />
                          </div>
                          <div className="order-total">
                            <span className="title">Total Price: </span>
                            <span className="total-price">$135</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
                <div className="control-cart">
                  <Link to="/">
                  <button className="button btn-continue-shopping">
                  CONTINUE SHOPPING
                  </button>
                  </Link>
                  <Link to="/cart/checkout">
                  <button className="button btn-cart-to-checkout">
                    CHECK OUT
                  </button>
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  </div>
  )
}

export default Cart