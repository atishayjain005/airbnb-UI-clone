import Navbar from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Liveanywhere from "./components/liveanywhere/Liveanywhere";
import Discover from "./components/discover/Discover";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
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
