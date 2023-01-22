import { Routes,Route } from "react-router-dom";
import Baby from "./Baby";
import Home from "./Home";
import Kids from "./Kids";
import Toddler from "./Toddler";
import Holiday from "./Holiday";
import SignIn from "./SignIn";
import CreateAccount from "./Account";

function AllRoutes(){
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/baby" element={<Baby />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/toddler" element={<Toddler />} />
        <Route path="/holiday" element={<Holiday />} />
        <Route path="/my-account" element={<SignIn />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    );
}
export default AllRoutes;