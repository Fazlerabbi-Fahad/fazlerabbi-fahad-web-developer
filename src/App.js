import './App.css';
import Header from "./Pages/Home/Header/Header";
import Nav from "./Pages/Home/Nav/Nav";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Experience from "./Pages/Experience/Experience";
import Footer from "./Pages/Footer/Footer";
import Portfolio from "./Pages/Portfolio/Portfolio"


function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <About></About>
      <Experience></Experience>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
