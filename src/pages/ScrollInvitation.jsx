import "../styles/CategoryPage.css";

import product1 from "../assets/download__5_-removebg-preview.png";
import product2 from "../assets/Elegant_Hindu_Wedding_Invitation_Hindu_Wedding_Invite_Simple_Gold_Indian_Wedding_Invitation_Reception_Card_Shaadi_Invitation_Wedding_Card-removebg-preview.png";

function ScrollInvitation() {
  const products = [
    {
      image: product1,
      name: "Traditional Scroll Wedding Invitation",
      price: "Rs.10.00",
    },
    {
      image: product2,
      name: "Elegant Scroll Wedding Invitation",
      price: "Rs.12.00",
    },
  ];

  return (
    <main className="category-page">

      <section className="category-header">
        <h1>Scroll Invitation</h1>
        <p>
          Elegant scroll-style invitations for your memorable celebration.
        </p>
      </section>

      <section className="category-products">
        {products.map((product, index) => (
          <div className="category-card" key={index}>

            <div className="category-image">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="category-info">
              <h2>{product.name}</h2>

              <div className="category-bottom">
                <strong>{product.price}</strong>

                <div className="category-icons">
                  <button type="button">♡</button>
                  <button type="button">🛍</button>
                </div>
              </div>
            </div>

          </div>
        ))}
      </section>

    </main>
  );
}

export default ScrollInvitation;