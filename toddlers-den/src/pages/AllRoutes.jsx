import { Routes,Route } from "react-router-dom";
import Baby from "./Baby";
import Home from "./Home";
import Kids from "./Kids";
import Toddler from "./Toddler";


function AllRoutes(){
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/baby" element={<Baby />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/toddler" element={<Toddler />} />
      </Routes>
    );
}
export default AllRoutes;