import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Post from "./pages/Post";
import NotFound from "./pages/NotFound";
import Blogs from "./pages/Blogs";
import ContactMe from "./pages/ContactMe";
import Blog from "./pages/Blog";
import Category from "./pages/Category";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
          
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/blogs" element={ <Blogs /> } />
          <Route path="/blog" element={ <Blogs /> } />
          <Route path="/blog/:id" element={ <Blog /> } />
          <Route path="/category/:categoryName" element={ <Category/> } />
          <Route path="/post" element={ <Post /> } />
          <Route path="/contact" element={ <ContactMe /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
