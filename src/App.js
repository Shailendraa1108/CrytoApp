import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,  Route,Routes}  from "react-router-dom"
import HOme from './Components/HOme';
import Header from './Components/Header';
import Loader from './Components/Loader';
import Exchange from './Components/Exchange';
import BitCoin from './Components/BitCoin';
import CoinDetails from './Components/CoinDetails';
import Footer from './Components/Footer';

function App() {
  return (<Router>
    <Header/>
    <Routes>
      <Route path='/' element={<HOme/>}/>
      <Route path='/exchanges' element={<Exchange/>}/>
      <Route path='/bitcoins' element={<BitCoin/>}/>
      <Route path='/coin/:id' element={<CoinDetails/>}/>
     

    </Routes>
    <Footer/>
  </Router>
  
  );
}

export default App;
