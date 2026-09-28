import "../styles/Search.css";

import product1 from "../assets/Wedding_card_design_in_red_satin_cloth-removebg-preview.png";
import product2 from "../assets/Download_Decorative_Hindu_Wedding_Card_Vector_for_free-removebg-preview.png";
import product3 from "../assets/Hindu_Low_Cost_Wedding_Invitation_Card_Design-removebg-preview.png";
import product4 from "../assets/download__5_-removebg-preview.png";
import product5 from "../assets/Hindu_Wedding_Cards_Online___Traditional_Designs_for_Sacred_Ceremonies-removebg-preview.png";
import product6 from "../assets/Elegant_Hindu_Wedding_Invitation_Hindu_Wedding_Invite_Simple_Gold_Indian_Wedding_Invitation_Reception_Card_Shaadi_Invitation_Wedding_Card-removebg-preview.png";

function Search() {
  const ideas = [
    {
      image: product1,
      title: "Hindu wedding Card",
    },
    {
      image: product2,
      title: "Simple wedding Card",
    },
    {
      image: product3,
      title: "Muslim wedding Card",
    },
    {
      image: product4,
      title: "Scroll wedding Card",
    },
    {
      image: product5,
      title: "Luxury wedding Card",
    },
  ];

  const popular = [
    {
      image: product6,
      title: "Post Theme Wedding Card",
    },
    {
      image: product1,
      title: "Scroll Wedding Card",
    },
    {
      image: product2,
      title: "Theme Wedding Card",
    },
    {
      image: product3,
      title: "Customize Wedding Card",
    },
    {
      image: product4,
      title: "Laser Wedding Card",
    },
    {
      image: product5,
      title: "Hindu Wedding Card",
    },
  ];

  return (
    <main className="search-page">

      <section className="search-intro">
        <h1>Everything You Need, to Plan your Dream Wedding</h1>

        <p>
          Search for vendors, cards, ideas and real wedding stories and more!
        </p>
      </section>

      <div className="search-main-box">

        <div className="search-all">
          <span>All</span>
          <strong>Search</strong>
        </div>

        <div className="search-tags">
          <span>Wedding Cards ×</span>
          <span>Scroll Cards ×</span>
          <span>Theme Cards ×</span>
          <span>Birthday Cards ×</span>
          <span>Engagement Cards ×</span>
        </div>

      </div>

      <section className="search-section">

        <h2>Ideas for you</h2>

        <div className="search-grid">

          {ideas.map((item, index) => (
            <div className="search-result-card" key={index}>

              <img src={item.image} alt={item.title} />

              <h3>{item.title}</h3>

            </div>
          ))}

        </div>

      </section>

      <section className="search-section">

        <h2>Popular on this</h2>

        <div className="search-grid">

          {popular.map((item, index) => (
            <div className="search-result-card" key={index}>

              <img src={item.image} alt={item.title} />

              <h3>{item.title}</h3>

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}

export default Search;