
// import './App.css';
import Container from '@mui/material/Container';
import About from './Componants/About';
import Home from './Componants/Home';
import Service from './Componants/Service';
import Pricing from './Componants/Pricing';
import Review from './Componants/Review';
import Footer from './Componants/Footer';

function App() {
  return (
    <div className="App">
    <Container>
    <Home/>
    <About/>
    <Service/>
    <Pricing/>
    <Review/>
    <Footer/>

    </Container>

    </div>
  );
}

export default App;
