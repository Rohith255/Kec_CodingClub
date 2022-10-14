import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero';
import Cards from './Components/Cards';
import Campus from './Components/Campus';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Hero/>
      <Cards/>
      <Campus/>
      <Footer/>
    </div>
  );
}

export default App;
