import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/home';
import Company from './pages/company/Company';
import Servicecom from "./home/Servicecom";
import Careeerycom from "../src/home/careerycom";
import Footer from "../src/home/Footer"; 

function App() {
  return (
    <Router>
      <div>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/servicecom" element={<Servicecom />} />
          <Route path="/career" element={<Careeerycom />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
