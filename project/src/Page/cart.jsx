import React, { useState, useEffect } from 'react';
import '../css/Cart/cartdesign.scss'
import $ from 'jquery';
import Payment from '../components/Payment/Payment01';
import { useLocation } from 'react-router-dom';
window.$ = $;

const Cart = ({}) => {

  const location = useLocation();

  const Prod_id = location.state.Prod_id;
  const imageURL = location.state.imageURL;
  const titleName = location.state.titleName
  const descriptionS = location.state.descriptionS;
  const prices = location.state.prices;
  const [products, setProducts] = useState([
    {
      id: Prod_id,
      image: imageURL,
      title: titleName,
      description: descriptionS,
      price: prices,
      quantity: 1,
      linePrice: prices,
    }
  ]);

  

  /* Set rates + misc */
 
  const fadeTime = 300;

  /* Remove item from cart */
  const removeItem = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    recalculateCart();
  };

  /* Recalculate cart */
  const recalculateCart = () => {
    const subtotal = products.reduce((total, product) => total + product.linePrice, 0);

    /* Calculate totals */
    
   
    const total = subtotal 

    /* Update totals display */
    $('.totals-value').fadeOut(fadeTime, function () {
      $('#cart-subtotal').html(subtotal.toFixed(0));
     
      if (total === 0) {
        $('.checkout').fadeOut(fadeTime);
      } else {
        $('.checkout').fadeIn(fadeTime);
      }
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
    <div>
      <h1>Shopping Cart</h1>

      <div className="shopping-cart">
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
            <div className="product-price">{product.price}</div>
            <div className="product-quantity">
              <input
                type="number"
                value={product.quantity}
                min="1"
                onChange={(e) => updateQuantity(product.id, (e.target.value))}
              />
            </div>
            <div className="product-removal">
              <button className="remove-product" onClick={() => removeItem(product.id)}>
                Remove
              </button>
            </div>
            <div className="product-line-price">{product.linePrice}</div>
          </div>
        ))}

        <div className="totals">
          <div className="totals-item">
            <label>Subtotal(물품 총합값)</label>
            <div className="totals-value" id="cart-subtotal"></div>
          </div>
        
        </div>

        <Payment/>
      </div>
    </div>
  );
};

export default Cart;
