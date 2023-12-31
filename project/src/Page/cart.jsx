import React, { useState, useEffect } from 'react';
import '../css/Cart/cartdesign.css';
import $ from 'jquery';
import Payment from '../components/Payment/Payment01';
import { useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';
window.$ = $;

const Cart = () => {
  const location = useLocation();
  const [cookies, setCookie] = useCookies(['cart']);

  const Prod_id = location.state ? location.state.Prod_id : null;
  const imageURL = location.state ? location.state.imageURL : null;
  const titleName = location.state ? location.state.titleName : null;
  const descriptionS = location.state ? location.state.descriptionS : null;
  const prices = location.state ? location.state.prices : null;

  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const cartItems = cookies.cart || [];
    setProducts(cartItems);
  }, [cookies]);

  useEffect(() => {
    if (Prod_id && imageURL && titleName && descriptionS && prices) {
      const newProduct = {
        id: Prod_id,
        image: imageURL,
        title: titleName,
        description: descriptionS,
        price: prices,
        quantity: 1,
        linePrice: prices,
      };

      setProducts((prevProducts) => {
        const existingProduct = prevProducts.find((product) => product.id === newProduct.id);

        if (existingProduct) {
          const updatedProduct = {
            ...existingProduct,
            quantity: existingProduct.quantity + 1,
            linePrice: existingProduct.linePrice + newProduct.price,
          };

          const updatedProducts = prevProducts.map((product) =>
            product.id === existingProduct.id ? updatedProduct : product
          );

          setCookie('cart', updatedProducts, { path: '/' });
          return updatedProducts;
        } else {
          const updatedProducts = [...prevProducts, newProduct];
          setCookie('cart', updatedProducts, { path: '/' });
          return updatedProducts;
        }
      });
    }
  }, [Prod_id, imageURL, titleName, descriptionS, prices, setCookie]);

  /* Set rates + misc */
  const fadeTime = 300;

  /* Remove item from cart */
  const removeItem = (id) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.filter((product) => product.id !== id);
      setCookie('cart', updatedProducts, { path: '/' });
      return updatedProducts;
    });

    recalculateCart();
  };

  /* Recalculate cart */
  const recalculateCart = () => {
    const subtotal = products.reduce((total, product) => total + product.linePrice, 0);

    /* Calculate totals */
    setTotal(subtotal);

    /* Update totals display */
    $('.totals-value').fadeOut(fadeTime, function () {
      $('#cart-subtotal').html(subtotal.toFixed(0));
      $('.totals-value').fadeIn(fadeTime);
    });
  };

  /* Update quantity */
  const updateQuantity = (id, quantity) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === id) {
          const linePrice = product.price * quantity;
          return { ...product, quantity, linePrice };
        }
        return product;
      })
    );
  };

  useEffect(() => {
    recalculateCart();
  }, [products]);

  return (
    <>
      <div className='mainSec cart'>
        <h2>장바구니</h2>
      </div>

      <div className="contentBox">
        <div className='innercart'>

        
          <div className="column-labels">
            <label className="product-image">Image</label>
            <label className="product-details">Product</label>
            <label className="product-price">Price</label>
            <label className="product-quantity">Quantity</label>
            <label className="product-removal">Remove</label>
            <label className="product-line-price">Total</label>
          </div>

          {products.map((product) => (
            <div className="product" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt="Product" />
              </div>
              <div className="product-details">
                <div className="product-title">{product.title}</div>
                <p className="product-description">{product.description}</p>
              </div>
              <div className="product-price">⠀{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
              <div className="product-quantity">
                <input
                  type="number"
                  value={product.quantity}
                  min="1"
                  onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
                />
              </div>
              <div className="product-removal">
                <button className="remove-product" onClick={() => removeItem(product.id)}>
                  Remove
                </button>
              </div>
              <div className="product-line-price">⠀{product.linePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
            </div>
          ))}

<div className="totals-item" style={{
                                    marginLeft:1350,
                                    fontSize:30}}>
              <label>Subtotal</label>
              <div className="totals-value" id="cart-subtotal"></div>
              <Payment Total={{total}} />
              </div>
          <div className="totals">
            
          </div>

          </div>
      </div>
      </>
  );
};

export default Cart;
