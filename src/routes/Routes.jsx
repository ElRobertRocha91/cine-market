import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Home from "../pages/Home";
import About from "../pages/About";

function Routers(){
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<LandingPage />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/about" element={<About />}/>
            </Routes>
        </div>
    )
}

export default Routers;