
import './App.css';
import Container from '@mui/material/Container';
import About from './Componants/About';
import Home from './Componants/Home';
import Service from './Componants/Service';
import Pricing from './Componants/Pricing';
import Review from './Componants/Review';
import Footer from './Componants/Footer';
import Navbar from './Componants/Navbar';

function App() {
  return (
    <div className="App">
   <Navbar/>
    <Home/>
    
    <About/>
    <Service/>
    <Pricing/>
    <Review/>
    <Footer/>

    </div>
  );
}

export default App;
