import { useParams, Link } from "react-router-dom";
import "../styles/CategoryPage.css";

import product1 from "../assets/Wedding_card_design_in_red_satin_cloth-removebg-preview.png";
import product2 from "../assets/Download_Decorative_Hindu_Wedding_Card_Vector_for_free-removebg-preview.png";
import product3 from "../assets/Hindu_Low_Cost_Wedding_Invitation_Card_Design-removebg-preview.png";
import product4 from "../assets/download__5_-removebg-preview.png";
import product5 from "../assets/Hindu_Wedding_Cards_Online___Traditional_Designs_for_Sacred_Ceremonies-removebg-preview.png";
import product6 from "../assets/Elegant_Hindu_Wedding_Invitation_Hindu_Wedding_Invite_Simple_Gold_Indian_Wedding_Invitation_Reception_Card_Shaadi_Invitation_Wedding_Card-removebg-preview.png";

const categoryData = {
  "birthday-invitations": {
    title: "Birthday Invitations",
    subtitle: "Beautiful and memorable invitations for your special day.",
    products: [
      {
        image: product1,
        name: "Elegant Birthday Invitation Card",
        price: "Rs.7.50",
      },
      {
        image: product2,
        name: "Traditional Birthday Invitation Card",
        price: "Rs.8.00",
      },
    ],
  },

  "puperty-cards": {
    title: "Puperty Cards",
    subtitle: "Special invitation cards for beautiful celebrations.",
    products: [
      {
        image: product3,
        name: "Classic Puperty Invitation Card",
        price: "Rs.7.00",
      },
      {
        image: product4,
        name: "Elegant Puperty Invitation Card",
        price: "Rs.8.50",
      },
    ],
  },

  "luxury-invitations": {
    title: "Luxury Invitations",
    subtitle: "Premium invitation designs with an elegant finish.",
    products: [
      {
        image: product5,
        name: "Luxury Wedding Invitation",
        price: "Rs.12.00",
      },
      {
        image: product6,
        name: "Premium Golden Invitation",
        price: "Rs.15.00",
      },
    ],
  },

  "ear-boring-cards": {
    title: "Ear Boring Cards",
    subtitle: "Traditional invitation designs for your special celebration.",
    products: [
      {
        image: product1,
        name: "Traditional Ear Boring Invitation",
        price: "Rs.7.00",
      },
      {
        image: product4,
        name: "Elegant Ear Boring Invitation",
        price: "Rs.8.00",
      },
    ],
  },

  "engagement-cards": {
    title: "Engagement Cards",
    subtitle: "Celebrate your beautiful beginning with elegant invitations.",
    products: [
      {
        image: product2,
        name: "Classic Engagement Invitation",
        price: "Rs.8.50",
      },
      {
        image: product6,
        name: "Golden Engagement Invitation",
        price: "Rs.10.00",
      },
    ],
  },

  "house-warming": {
    title: "House Warming",
    subtitle: "Invite your loved ones to your new beginning.",
    products: [
      {
        image: product3,
        name: "Traditional House Warming Invitation",
        price: "Rs.7.00",
      },
      {
        image: product5,
        name: "Elegant House Warming Invitation",
        price: "Rs.8.50",
      },
    ],
  },

  "anniversary-cards": {
    title: "Anniversary Cards",
    subtitle: "Celebrate love and togetherness with beautiful cards.",
    products: [
      {
        image: product4,
        name: "Classic Anniversary Invitation",
        price: "Rs.7.50",
      },
      {
        image: product6,
        name: "Elegant Anniversary Invitation",
        price: "Rs.9.00",
      },
    ],
  },

  "beach-theme-cards": {
    title: "Beach Theme Cards",
    subtitle: "Fresh and beautiful invitation designs inspired by the beach.",
    products: [
      {
        image: product1,
        name: "Beach Theme Invitation Card",
        price: "Rs.8.00",
      },
      {
        image: product2,
        name: "Elegant Beach Wedding Card",
        price: "Rs.9.00",
      },
    ],
  },

  "bride-theme-cards": {
    title: "Bride Theme Cards",
    subtitle: "Beautiful designs celebrating the bride and her special day.",
    products: [
      {
        image: product5,
        name: "Beautiful Bride Theme Card",
        price: "Rs.8.50",
      },
      {
        image: product6,
        name: "Elegant Bride Invitation",
        price: "Rs.10.00",
      },
    ],
  },

  "box-cards": {
    title: "Box Cards",
    subtitle: "Elegant box-style invitation designs.",
    products: [
      {
        image: product3,
        name: "Classic Box Invitation Card",
        price: "Rs.9.00",
      },
      {
        image: product4,
        name: "Premium Box Invitation Card",
        price: "Rs.10.00",
      },
    ],
  },

  "single-sheet-cards": {
    title: "Single Sheet Cards",
    subtitle: "Simple and elegant single sheet invitation designs.",
    products: [
      {
        image: product2,
        name: "Simple Single Sheet Card",
        price: "Rs.6.00",
      },
      {
        image: product5,
        name: "Elegant Single Sheet Card",
        price: "Rs.7.50",
      },
    ],
  },

  "whatsapp-cards": {
    title: "Whatsapp Cards",
    subtitle: "Share your special invitation easily with your loved ones.",
    products: [
      {
        image: product1,
        name: "Digital Whatsapp Invitation",
        price: "Rs.5.00",
      },
      {
        image: product6,
        name: "Premium Whatsapp Invitation",
        price: "Rs.7.00",
      },
    ],
  },

  "save-the-date-cards": {
    title: "Save the Date Cards",
    subtitle: "Let your guests know your special date in advance.",
    products: [
      {
        image: product4,
        name: "Elegant Save the Date Card",
        price: "Rs.6.00",
      },
      {
        image: product5,
        name: "Traditional Save the Date Card",
        price: "Rs.7.00",
      },
    ],
  },
};

function CategoryPage() {
  const { category } = useParams();

  const data = categoryData[category];

  if (!data) {
    return (
      <main className="category-page">
        <div className="category-not-found">
          <h1>Page Not Found</h1>
          <Link to="/wedding-cards">Go to Wedding Invitation</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="category-page">

      <section className="category-header">
        <h1>{data.title}</h1>
        <p>{data.subtitle}</p>
      </section>

      <section className="category-products">

        {data.products.map((product, index) => (
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

export default CategoryPage;