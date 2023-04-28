import { Route, Routes } from "react-router-dom";
import Header from "./base/Header";
import Footer from "./base/Footer";
import Home from "./home/Home";
import About from "./about/About";
import Contact from "./contact/Contact";
import Privacy from "./privacy/Privacy";
import Performance from "./performance/Performance";
import useLocalization from "hooks/useLocalization";

function App() {
  const strings = useLocalization();

  return (
    <>
      <Header strings={strings} />
      <Routes>
        <Route path="/" element={<Home strings={strings} />} end index />
        <Route path="/about-us" element={<About strings={strings} />} />
        <Route
          path="/performance"
          element={<Performance strings={strings} />}
        />
        <Route
          path="/contact-us"
          element={<Contact strings={strings.contactUs} />}
        />
        <Route
          path="/privacy-policy"
          element={<Privacy strings={strings.policy} />}
        />
      </Routes>
      <Footer strings={strings.footer} />
    </>
  );
}

export default App;
