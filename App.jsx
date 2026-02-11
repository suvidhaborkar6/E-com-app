import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LaptopList from "./components/LaptopList";
import AddLaptop from "./components/AddLaptop";
import EditLaptop from "./components/EditLaptop";
import './App.css';
import './index.css';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LaptopList />} />
        <Route path="/add" element={<AddLaptop />} />
        <Route path="/edit/:id" element={<EditLaptop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

