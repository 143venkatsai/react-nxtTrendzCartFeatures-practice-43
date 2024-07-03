import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      let summaryAmount = 0
      cartList.forEach(eachCartItem => {
        summaryAmount += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <>
          <div className="cart-summary-container">
            <h1 className="cart-summary-heading">
              Order Total:{' '}
              <span className="summary-amount"> Rs {summaryAmount}/- </span>
            </h1>
            <p className="cart-summary-para">{cartList.length} items in cart</p>
            <button type="button" className="order-summary-button-lg">
              Checkout
            </button>
          </div>
          <button type="button" className="order-summary-button-sm">
            Checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
