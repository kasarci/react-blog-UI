import Categories from "./components/category/Categories";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Recents from "./components/recents/Recents";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <Recents />
    </div>
  );
}

export default App;
