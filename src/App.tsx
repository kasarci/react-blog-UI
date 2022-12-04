import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
          
        <Routes>
          <Route path="/" element={ <Home /> } />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
