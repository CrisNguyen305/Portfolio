import logo from './logo.svg';
import './App.css';
import NavBar from './navigation bar/NavBar';
import SideBar from './side bar/SideBar';
import Home from './MainContent/Home/Home';
import About from './MainContent/About/About';
import Contact from './MainContent/Contact/Contact';
import { BrowserRouter, Route , Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <dov className="navbar">
          <NavBar></NavBar>
        </dov>
        <SideBar></SideBar>
        <Home></Home>
        <About></About>
        <Contact></Contact>
        {/* <About></About> */}
        {/* <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/about' element={<About></About>} />
        </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
