import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Wrapper component to use hooks like useLocation
const LayoutWrapper = () => {
  const location = useLocation();
  const showNavAndFooter = location.pathname === "/" || location.pathname === "/profile";

  return (
    <>
      {showNavAndFooter && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {showNavAndFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
}

export default App;
