import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import WeddingCards from "./pages/WeddingCards";
import CategoryPage from "./pages/CategoryPage";
import ScrollInvitation from "./pages/ScrollInvitation";

import Search from "./pages/Search";
import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* WEDDING INVITATION */}
        <Route
          path="/wedding-cards"
          element={<WeddingCards />}
        />

        {/* SPECIAL OCCASIONS */}
        <Route
          path="/special-occasions/:category"
          element={<CategoryPage />}
        />

        {/* THEME CARDS */}
        <Route
          path="/theme-cards/:category"
          element={<CategoryPage />}
        />

        {/* SCROLL INVITATION */}
        <Route
          path="/scroll-invitation"
          element={<ScrollInvitation />}
        />

        {/* DIGITAL INVITATION */}
        <Route
          path="/digital-invitations/:category"
          element={<CategoryPage />}
        />

        {/* SEARCH */}
        <Route
          path="/search"
          element={<Search />}
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* WISHLIST */}
        <Route
          path="/wishlist"
          element={<Wishlist />}
        />

        {/* CART */}
        <Route
          path="/cart"
          element={<Cart />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;