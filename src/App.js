import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Welcome from './components/Welcome.js';
import About from './components/About.js';
import Menu from './components/Menu.js';
import Reviews from './components/Reviews.js';
import Questions from './components/Questions.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <div class="container-fluid">
      <Nav />
      <Main />
      <Welcome />
      <About />
      <Menu />
      <Reviews />
      <Questions />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
