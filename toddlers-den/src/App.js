import NavBar from './components/Navbar';
import './App.css';
import AllRoutes from './pages/AllRoutes';
import Footer from './components/footer';



function App() {
  return (
    <div className="App">
     <NavBar/>
     <AllRoutes/>
     <Footer/>
    </div>
  );
}

export default App;
