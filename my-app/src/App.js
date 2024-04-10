// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from './Components/Header';

import Home from './Pages/Home';
import {
  Route,
  Routes
} from 'react-router-dom';

import Footer from './Components/Footer';
import Contacts from './Pages/Contacts';
import NotFound from './Pages/NotFound';
import Flight_Controller from './Pages/Flight_controller';

import Raspberry_pi from './Pages/Raspberry_pi';


function App() {
  return (
      <>
        <Header />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Pages/Contacts' element={<Contacts />} />
            <Route path='*' element={<NotFound/>} />
            <Route path='/Flight_controller' element={<Flight_Controller/>} />
            <Route path='/Raspberry_pi' element={<Raspberry_pi/>} />
            
        </Routes>
        <Footer />
      </> 
  );
}

export default App;
