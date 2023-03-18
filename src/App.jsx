import { useState } from 'react'
import './App.css'
import Navbar from "./components/NavBar/Navbar.jsx";
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Routing from "./routing/Routing.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
          <div className="fullsize">
              <BrowserRouter>
                  <Navbar/>
                  <Routing/>
                  <Footer/>
              </BrowserRouter>

          </div>

  )
}

export default App
