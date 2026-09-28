import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

import laserBanner from "../assets/Invitation_Luxury_PSD__High_Quality_Free_PSD_Templates_for_Download___Freepik-removebg-preview.png";

import hinduCard from "../assets/Editable_Indian_Wedding_Invitations___Hindu_Wedding_Invite___Flower_Frame_Wedding_Card___Printable___Instant_Download___Corjl_IWIM_-_Etsy_UK-removebg-preview.png";

import luxuryCard from "../assets/Invitation_Luxury_PSD__High_Quality_Free_PSD_Templates_for_Download___Freepik-removebg-preview.png";

import floralCard from "../assets/Floral_Indian_wedding_invitation_card_design_in_frabic-removebg-preview.png";

import beachCard from "../assets/Beach_Wedding_Invitation_Set__Wedding_Invitation_Template_2_Set__Editable_Wedding_Invitation__Editable_on_Canva___Digital_Download__Seashell-removebg-preview.png";

import birdsCard from "../assets/Evite_Paperless_Wedding_Invitation_Aqua_Love_Birds-removebg-preview.png";

import palaceCard from "../assets/Watercolor_Arabian_Lattice_Arch_Muslim_Wedding_Invitation-removebg-preview.png";

import product1 from "../assets/Wedding_card_design_in_red_satin_cloth-removebg-preview.png";

import product2 from "../assets/Download_Decorative_Hindu_Wedding_Card_Vector_for_free-removebg-preview.png";

import product3 from "../assets/Hindu_Low_Cost_Wedding_Invitation_Card_Design-removebg-preview.png";

import product4 from "../assets/download__5_-removebg-preview.png";

import product5 from "../assets/Hindu_Wedding_Cards_Online___Traditional_Designs_for_Sacred_Ceremonies-removebg-preview.png";

import product6 from "../assets/Elegant_Hindu_Wedding_Invitation_Hindu_Wedding_Invite_Simple_Gold_Indian_Wedding_Invitation_Reception_Card_Shaadi_Invitation_Wedding_Card-removebg-preview.png";

import collection1 from "../assets/Digital_Indian_Hindu_Wedding_Customised_Save_the_Date_Invitation__Wedding_Invitation__Custom_Design_-_Etsy-removebg-preview.png";

import collection2 from "../assets/Premium Vector _ Wedding stationery for indian couple with oriental ornaments.jpg";

import collection3 from "../assets/Indian_Wedding_Digital_Invite_as_Indian_Wedding_invitation_card_Hindu__Indian_invite_template___Indian_invitations_Hindu_Wedding_card_Indian-removebg-preview.png";

import collection4 from "../assets/Elegant_Kerala_Hindu_Wedding_Invitation-removebg-preview.png";


const categories = [
  [hinduCard, "Hindu Wedding Cards"],
  [luxuryCard, "Luxury Cards"],
  [floralCard, "Floral Wedding Cards"],
];


const themes = [
  [beachCard, "Beach Theme Cards"],
  [birdsCard, "Birds Theme Cards"],
  [palaceCard, "Palace Theme Cards"],
];


const products = [
  [
    product1,
    "Red Invite Card with Bride And Groom Names",
    "Rs.10.25"
  ],
  [
    product2,
    "Simple Red and Yellow Card Invite with Bride and Groom Names",
    "Rs.5.00"
  ],
  [
    product3,
    "Red vertical Personal Invite with Bride And Groom Names",
    "Rs.7.00"
  ],
  [
    product4,
    "Red vertical Personal Invite with Bride And Groom Names",
    "Rs.7.50"
  ],
  [
    product5,
    "Brown with Vinayagar Picture Invite with Bride And Groom Names",
    "Rs.7.00"
  ],
  [
    product6,
    "Maroon card with Rangoli Theme Personal Invite with Bride And Groom Names",
    "Rs.9.00"
  ],
];


const collections = [
  [
    collection1,
    "Hindu Invitation Collections"
  ],
  [
    collection2,
    "Christian Invitation Collections"
  ],
  [
    collection3,
    "Muslim Invitation Collections"
  ],
  [
    collection4,
    "Interfaith Invitation Collections"
  ],
];


const reviews = [
  {
    name: "James",
    text: "We were blown away by the quality and elegance of our wedding invitations. The paper felt luxurious, and the printing was flawless."
  },
  {
    name: "Harshitha",
    text: "We wanted something simple but unique, and they absolutely nailed it. Colors, fonts, wording — everything was exactly how we imagined."
  },
  {
    name: "Santhosh",
    text: "We were on a tight budget, but didn't want to compromise on style. These invites were not only affordable but looked premium."
  }
];


function SectionHeading({ title, subtitle }) {
  return (
    <div className="section-heading">
      <span className="heading-flower">✦</span>

      <h2>{title}</h2>

      {subtitle && (
        <p>{subtitle}</p>
      )}

      <div className="heading-line">
        <span>❦</span>
      </div>
    </div>
  );
}


function Home() {
const navigate = useNavigate();
  return (

    <main className="home-page">

      {/* ================= HERO ================= */}

      <section className="hero-section">

        <div className="hero-decoration hero-decoration-one">
          ❦
        </div>

        <div className="hero-decoration hero-decoration-two">
          ❦
        </div>

        <div className="hero-mini-photo hero-mini-one">
          <img src={hinduCard} alt="" />
        </div>

        <div className="hero-mini-photo hero-mini-two">
          <img src={floralCard} alt="" />
        </div>

        <div className="hero-card">

          <span className="hero-small-text">
            TOGETHER WITH LOVE
          </span>

          <div className="hero-ornament">
            ❦
          </div>

          <h1>
            Your Love Story
            <br />
            Begins Here
          </h1>

          <p>
            Create stunning wedding invitations that
            capture the essence of your special day.
            Elegant designs, heartfelt words, and
            everything you need to make your first
            impression unforgettable.
          </p>

       <button onClick={() => navigate("/wedding-cards")}>
  Get your style
</button>
          <div className="hero-bottom-ornament">
            ✧ ❦ ✧
          </div>

        </div>

      </section>


      {/* ================= LASER CUT ================= */}

      <section className="laser-section section-space">

        <div className="laser-banner">

          <div className="laser-image-frame">

            <img
              src={laserBanner}
              alt="Laser cut wedding invitations"
            />

          </div>

          <div className="laser-content">

            <span>
              ELEGANT • UNIQUE • BEAUTIFUL
            </span>

            <h3>
              Laser Cut Invitations
            </h3>

            <p>
              Make your special day unforgettable
              with our elegant laser cut designs.
            </p>

            <button>
              Shop Now →
            </button>

          </div>

          <div className="laser-flower">
            ❦
          </div>

        </div>

      </section>


      {/* ================= UNIQUE CARDS ================= */}

      <section className="section-space category-section">

        <div className="side-decoration side-left">
          ❦
        </div>

        <div className="side-decoration side-right">
          ❦
        </div>

        <SectionHeading
          title="Unique & Exclusive Invitation Cards"
          subtitle="Because Each Wedding is Truly Unique and Memorable"
        />

        <div className="three-grid category-grid">

          {categories.map(([image, title], index) => (

            <div
              className="category-item"
              key={title}
            >

              <div className="category-image">

                <div className="category-inner">

                  <img
                    src={image}
                    alt={title}
                  />

                </div>

                <span className="category-heart">
                  ♡
                </span>

              </div>

              <h3>
                {title}
              </h3>

              <button className="category-link">
                Explore Collection →
              </button>

            </div>

          ))}

        </div>

      </section>


      {/* ================= THEME CARDS ================= */}

      <section className="section-space theme-section">

        <SectionHeading
          title="Theme Based Invitation"
          subtitle="Theme Based Invitation"
        />

        <div className="three-grid category-grid">

          {themes.map(([image, title]) => (

            <div
              className="category-item"
              key={title}
            >

              <div className="category-image theme-image">

                <div className="category-inner">

                  <img
                    src={image}
                    alt={title}
                  />

                </div>

                <span className="category-heart">
                  ♡
                </span>

              </div>

              <h3>
                {title}
              </h3>

              <button className="category-link">
                Explore Theme →
              </button>

            </div>

          ))}

        </div>

      </section>


      {/* ================= OFFERS ================= */}

      <section className="offer-section section-space">

        <div className="offer-card offer-one">

          <div className="offer-decoration">
            ✦
          </div>

          <div>

            <span className="offer-small">
              A LITTLE SOMETHING FOR YOU
            </span>

            <p>
              Join our love-letters list and enjoy
            </p>

            <h3>
              20% off your first set of wedding invitations.
            </h3>

            <span>
              Simple, beautiful, and easy on your budget.
            </span>

          </div>

          <div className="offer-badge">

            <strong>
              20%
            </strong>

            <span>
              Get Off
            </span>

          </div>

        </div>


        <div className="offer-card offer-two">

          <div className="offer-badge">

            <strong>
              FREE
            </strong>

            <span>
              20 Extra Invites
            </span>

          </div>

          <div>

            <span className="offer-small">
              PLAN AHEAD & SAVE
            </span>

            <h3>
              Planning ahead pays off!
            </h3>

            <p>
              Book your order 60+ days in advance
              and get a free set of 20 extra invites
              for last-minute guests.
            </p>

          </div>

        </div>

      </section>


      {/* ================= PRODUCTS ================= */}

      <section className="products-section section-space">

        <SectionHeading
          title="Simple and Affordable Wedding Cards"
          subtitle="Beautiful designs for every celebration"
        />

        <div className="product-grid">

          {products.map(
            ([image, title, price], index) => (

              <div
                className="product-card"
                key={index}
              >

                <div className="product-image-wrap">

                  <span className="product-flower">
                    ❦
                  </span>

                  <span className="product-heart">
                    ♡
                  </span>

                  <img
                    src={image}
                    alt={title}
                  />

                </div>

                <div className="product-title">
                  {title}
                </div>

                <div className="product-bottom">

                  <strong>
                    {price}
                  </strong>

                  <div className="product-icons">

                    <button>
                      ♡
                    </button>

                    <button>
                      🛒
                    </button>

                  </div>

                </div>

              </div>

            )
          )}

        </div>

      </section>


      {/* ================= SUMMER OFFER ================= */}

      <section className="summer-banner">

        <div className="summer-decoration summer-left">
          ❦
        </div>

        <div className="summer-decoration summer-right">
          ❦
        </div>

        <div className="summer-content">

          <div>

            <span className="summer-small">
              LIMITED TIME
            </span>

            <div className="summer-title">
              SUMMER
            </div>

            <h2>
              Special Offer
            </h2>

          </div>

          <div className="summer-offers">

            <p>
              Flat 20% OFF on selected wedding invitations
            </p>

            <p>
              Buy more & save more
            </p>

            <button>
              SHOP NOW
            </button>

            <small>
              Offer available for a limited time only.
              Terms and conditions apply.
            </small>

          </div>

        </div>

      </section>


      {/* ================= COLLECTIONS ================= */}

      <section className="collection-section section-space">

        <SectionHeading
          title="Our Invitation Collections"
          subtitle="Explore beautiful wedding invitation designs"
        />

        <div className="collection-grid">

          {collections.map(
            ([image, title]) => (

              <div
                className="collection-card"
                key={title}
              >

                <div className="collection-image">

                  <img
                    src={image}
                    alt={title}
                  />

                </div>

                <div className="collection-info">

                  <h3>
                    {title}
                  </h3>

                  <button>
                    Explore →
                  </button>

                </div>

              </div>

            )
          )}

        </div>

      </section>


      {/* ================= REVIEWS ================= */}

      <section className="reviews-section section-space">

        <SectionHeading
          title="Happy Customers"
          subtitle="Real words from couples who trusted us"
        />

        <div className="reviews-grid">

          {reviews.map(
            (review, index) => (

              <div
                className="review-card"
                key={review.name}
              >

                <div className={`review-avatar avatar-${index + 1}`}>

                  <span>
                    {review.name.charAt(0)}
                  </span>

                </div>

                <div className="review-stars">
                  ★★★★★
                </div>

                <h3>
                  {review.name}
                </h3>

                <strong>
                  Happy Customer
                </strong>

                <p>
                  “{review.text}”
                </p>

                <div className="review-bottom">
                  ❦
                </div>

              </div>

            )
          )}

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}

      <section className="how-section section-space">

        <SectionHeading
          title="How It Works"
          subtitle="Your perfect invitation in just a few simple steps"
        />

        <div className="steps-grid">

          <div className="step-item">

            <div className="step-icon">
              🔍
            </div>

            <span className="step-number">
              01
            </span>

            <h3>
              Explore
            </h3>

            <p>
              Browse our beautiful collection
              of wedding invitations.
            </p>

          </div>


          <div className="step-item">

            <div className="step-icon">
              ❤️
            </div>

            <span className="step-number">
              02
            </span>

            <h3>
              Choose
            </h3>

            <p>
              Select the design that
              matches your celebration.
            </p>

          </div>


          <div className="step-item">

            <div className="step-icon">
              ✏️
            </div>

            <span className="step-number">
              03
            </span>

            <h3>
              Customize
            </h3>

            <p>
              Add your names, date and
              special wedding details.
            </p>

          </div>


          <div className="step-item">

            <div className="step-icon">
              🛒
            </div>

            <span className="step-number">
              04
            </span>

            <h3>
              Order
            </h3>

            <p>
              Place your order securely
              online.
            </p>

          </div>


          <div className="step-item">

            <div className="step-icon">
              💌
            </div>

            <span className="step-number">
              05
            </span>

            <h3>
              Receive
            </h3>

            <p>
              Get your beautiful wedding
              invitations ready for your guests.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;