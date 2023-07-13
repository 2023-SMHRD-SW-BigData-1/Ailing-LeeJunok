import React, { useState, useEffect } from 'react';
import '../css/Cart/cartdesign.scss'
import $ from 'jquery';
window.$ = $;

const Cart = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: 'https://s.cdpn.io/3/dingo-dog-bones.jpg',
      title: '요것도 품목 이름이에오',
      description: '언제 끝날까 이거',
      price: 1000,
      quantity: 1,
      linePrice: 1000,
    }, // 첫번째 물품의 정보들 id 임의로 로직을 따로 짜야할 것 같고 title image price(lineprice와 동일한 값 사용)은 DB의 정보 description은 임의 작성 혹은 가벼운 정보를 띄우는 것이 괜찮아 보입니다.
    {
      id: 2,
      image: 'https://s.cdpn.io/3/large-NutroNaturalChoiceAdultLambMealandRiceDryDogFood.png',
      title: '이거는 품목 이름이에오',
      description: '으악',
      price: 3000,
      quantity: 1,
      linePrice: 3000,
    },
  ]);

  /* Set rates + misc */
  const taxRate = 0.1;
  const shippingRate = 0.198;
  const fadeTime = 300;

  /* Remove item from cart */
  const removeItem = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    recalculateCart();
  };

  /* Recalculate cart */
  const recalculateCart = () => {
    const subtotal = products.reduce((total, product) => total + parseFloat(product.linePrice), 0);

    /* Calculate totals */
    const tax = subtotal * taxRate;
    const shipping = subtotal > 0 ? shippingRate : 0;
    const total = subtotal + tax + shipping;

    /* Update totals display */
    $('.totals-value').fadeOut(fadeTime, function () {
      $('#cart-subtotal').html(subtotal.toFixed(2));
      $('#cart-tax').html(tax.toFixed(2));
      $('#cart-shipping').html(shipping.toFixed(2));
      $('#cart-total').html(total.toFixed(2));
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
          const linePrice = parseFloat(product.price) * quantity;
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
                onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
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
          <div className="totals-item">
            <label>부가가치세(10%)</label>
            <div className="totals-value" id="cart-tax"></div>
          </div>
          <div className="totals-item">
            <label>카드 수수료예요~</label>
            <div className="totals-value" id="cart-shipping"></div>
          </div>
          <div className="totals-item totals-item-total">
            <label>위에 있는 요소 전부 합친 값</label>
            <div className="totals-value" id="cart-total"></div>
          </div>
        </div>

        <button className="checkout">구매하기</button>
      </div>
    </div>
  );
};

export default Cart;
