import Navbar from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Liveanywhere from "./components/liveanywhere/Liveanywhere";
import Discover from "./components/discover/Discover";
import { useState } from "react";
import "./app.scss";

function App() {
  const [dropdownMenuOpen,setDropdownMenuOpen] = useState(false)
  return (
    <div className="app">
      <Navbar dropdownMenuOpen={dropdownMenuOpen} setDropdownMenuOpen={setDropdownMenuOpen} />
      <div className="sections">
        <Main />
        <Liveanywhere />
        <Discover />
        <Contact />
        <Footer />
      </div>
    </div>

  );
}

export default App;
