import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/globals.css";
import { Routes, Route } from "react-router-dom";
import { AppContainer } from "./components/Container";
import HomeView from "./views/HomeView";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Toaster position="bottom-right" />
      <AppContainer>
        <Routes>
          <Route path="/" element={<HomeView />} />
        </Routes>
      </AppContainer>
      <Footer />
    </div>
  );
}

export default App;
