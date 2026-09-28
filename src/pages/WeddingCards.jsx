import "../styles/WeddingCards.css";

import product1 from "../assets/Wedding_card_design_in_red_satin_cloth-removebg-preview.png";
import product2 from "../assets/Download_Decorative_Hindu_Wedding_Card_Vector_for_free-removebg-preview.png";
import product3 from "../assets/Hindu_Low_Cost_Wedding_Invitation_Card_Design-removebg-preview.png";
import product4 from "../assets/download__5_-removebg-preview.png";
import product5 from "../assets/Hindu_Wedding_Cards_Online___Traditional_Designs_for_Sacred_Ceremonies-removebg-preview.png";
import product6 from "../assets/Elegant_Hindu_Wedding_Invitation_Hindu_Wedding_Invite_Simple_Gold_Indian_Wedding_Invitation_Reception_Card_Shaadi_Invitation_Wedding_Card-removebg-preview.png";


const weddingCards = [
  {
    image: product1,
    title: "Red Invite Card with Bride And Groom Names",
    price: "Rs.10.25",
  },
  {
    image: product2,
    title: "Simple Red and Yellow Card Invite with Bride And Groom Names",
    price: "Rs.5.00",
  },
  {
    image: product3,
    title: "Red vertical Personal Invite with Bride And Groom Names",
    price: "Rs.7.00",
  },
  {
    image: product4,
    title: "Red vertical Personal Invite with Bride And Groom Names",
    price: "Rs.7.50",
  },
  {
    image: product5,
    title: "Brown with Vinayagar Picture Invite with Bride And Groom Names",
    price: "Rs.7.00",
  },
  {
    image: product6,
    title: "Maroon card with Rangoli Theme Personal Invite with Bride And Groom Names",
    price: "Rs.9.00",
  },
];


function WeddingCards() {
  return (
    <main className="wedding-cards-page">

      <section className="wedding-cards-section">

        <h1>
          Simple and Affordable Wedding Cards
        </h1>

        <div className="wedding-products-grid">

          {weddingCards.map((card) => (

            <div
              className="wedding-product-card"
              key={card.title}
            >

              <div className="wedding-product-image">

                <img
                  src={card.image}
                  alt={card.title}
                />

              </div>

              <div className="wedding-product-info">

                <h2>
                  {card.title}
                </h2>

                <div className="wedding-product-bottom">

                  <strong>
                    {card.price}
                  </strong>

                  <div className="wedding-product-actions">

                    <button
                      type="button"
                      aria-label="Add to wishlist"
                    >
                      ♡
                    </button>

                    <button
                      type="button"
                      aria-label="Add to cart"
                    >
                      ♧
                    </button>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}

export default WeddingCards;