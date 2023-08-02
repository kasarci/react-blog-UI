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
import { Box } from "@mui/material";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
//import { hasValidJWT } from "./components/shared/RouteGuard";
import PrivateRoute from "./components/routeGuard/PrivateRoute";
import CreatePost from "./pages/CreatePost";
import ManagePosts from "./pages/ManagePosts";
import { ConfirmProvider } from "material-ui-confirm";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <Box>
      <Router>
        <ConfirmProvider>
          <Navbar />
          <Box minHeight='calc(100vh - 470px)'>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/blogs/" element={<Blogs />} />
              <Route path="/blogs/page/:page" element={<Blogs />} />
              <Route path="/blog" element={<Blogs />} />
              <Route path="/blog/:id" element={<Blog />} />

              <Route path="/category/:categoryName/" element={<Category />} />
              <Route path="/category/:categoryName/page/:page" element={<Category />} />

              <Route path="/post" element={<Post />} />

              <Route path="/contact" element={<ContactMe />} />

              <Route path="/login" element={<Login />} />

              <Route
                path="/Admin/*"
                element={<PrivateRoute component={Admin} />}
              />
              <Route
                path="/createPost/*"
                element={<PrivateRoute component={CreatePost} />}
              />
              <Route 
              path="/EditPost/:id" 
              element={<PrivateRoute component={EditPost} />}
              />
              <Route
                path="/managePosts/*"
                element={<PrivateRoute component={ManagePosts} />}
              />
              <Route
                path="/managePosts/page/:page"
                element={<PrivateRoute component={ManagePosts} />}
              />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
          <Footer />
        </ConfirmProvider>
      </Router>
    </Box>
  );
}

export default App;
