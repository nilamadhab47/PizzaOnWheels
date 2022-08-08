import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import Registration from './pages/Registration';
import Loginscreen from './pages/Loginscreen';
import Filter from './components/Filter';
import StripeCheckOut from './components/StripeCheckOut';
import AdminPanel from './components/AdminPanel';
import OrderPage from './pages/OrderPage';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="cart" element={<CartPage/>} />
        <Route path="registration" element={<Registration/>} />
        <Route path="login" element={<Loginscreen/>} />
        <Route path="order" element={<OrderPage/>} />
        <Route path="stripe" element={<StripeCheckOut/>} />
        <Route path="admin/*" element={<AdminPanel/>}  />


      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
