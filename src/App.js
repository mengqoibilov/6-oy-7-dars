import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/home";
import Company from "./pages/company/Company";
import Servicecom from "./home/Servicecom";
import Careeerycom from "./home/careerycom";
import Footer from "./home/Footer";
import Birinchi from "./Birinchi/Birinchi";
import ProductDetails from "./product/DetailPage"; 
import Login from "./pages/layout/Login";

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<><Home /><Birinchi /></>} />
                    <Route path="/company" element={<Company />} />
                    <Route path="/servicecom" element={<Servicecom />} />
                    <Route path="/career" element={<Careeerycom />} />
                    <Route path="/photo/:id" element={<ProductDetails />} /> 
                </Routes>
                <Login/>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
