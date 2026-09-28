import { Link } from "react-router-dom";
import "../styles/Wishlist.css";

import wishlistImage from "../assets/Hindu_Wedding_Cards_Online___Traditional_Designs_for_Sacred_Ceremonies-removebg-preview.png";

function Wishlist() {
  return (
    <main className="wishlist-page">

      <h1>Wishlist</h1>

      <section className="wishlist-product">

        <button className="wishlist-heart">
          ♡
        </button>

        <div className="wishlist-image">
          <img
            src={wishlistImage}
            alt="The blue Wedding Cards"
          />
        </div>

        <div className="wishlist-info">

          <h2>The blue Wedding Cards</h2>

          <strong>Rs. 72.25</strong>

          <div className="wishlist-buttons">

            <Link to="/wedding-cards">
              Continue Shopping
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Wishlist;