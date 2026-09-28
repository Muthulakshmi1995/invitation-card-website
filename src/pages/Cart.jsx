import { Link } from "react-router-dom";
import "../styles/Cart.css";

function Cart() {
  const quantity = 2;
  const unitPrice = 65;
  const taxRate = 18;

  const subtotal = quantity * unitPrice;
  const totalTax = subtotal * (taxRate / 100);
  const total = subtotal + totalTax;

  return (
    <main className="cart-page">

      <section className="cart-table">

        <div className="cart-header">
          <strong>Product</strong>
          <strong>Qty</strong>
          <strong>Unit Price</strong>
          <strong>Tax</strong>
          <strong>Price</strong>
        </div>

        <div className="cart-row">

          <div className="cart-product">
            <strong>SKU: KSN0054</strong>
            <strong>SN (SN 54)</strong>
          </div>

          <span>{quantity}</span>

          <span>Rs.65.00</span>

          <span>18%</span>

          <span>Rs.130.00</span>

        </div>

      </section>

      <section className="cart-summary">

        <div>
          <span>Sub Total:</span>
          <strong>Rs.{subtotal.toFixed(2)}</strong>
        </div>

        <div>
          <span>Total Tax:</span>
          <strong>Rs.{totalTax.toFixed(2)}</strong>
        </div>

        <div className="cart-total">
          <span>Total:</span>
          <strong>Rs.{total.toFixed(2)}</strong>
        </div>

      </section>

      <p className="cart-warning">
        TO CHECKOUT PLEASE ADD MINIMUM 100 ITEMS TO THE CART
      </p>

      <div className="cart-buttons">

        <Link
          to="/wedding-cards"
          className="continue-shopping"
        >
          Continue Shopping
        </Link>

        <Link
          to="/checkout"
          className="checkout-button"
        >
          Checkout
        </Link>

      </div>

    </main>
  );
}

export default Cart;