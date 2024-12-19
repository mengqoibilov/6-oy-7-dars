import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Services from './pages/Services';



function App() {
  return (
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route path="/services" element={<Services/>} />
    </Routes>
  )
}

export default App




