import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Api from "./components/Api";

function App() {
  return (
    <div className="w-screen h-screen">
      <NavBar />

      <div className="flex justify-center align-center">
        <Home />
      </div>
      <About />
      <Projects />
      <Api />
      <Footer />
    </div>
  );
}

export default App;
