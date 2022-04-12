import logo from './logo.svg';
import './App.css';
import NavBar from './navigation bar/NavBar';
import SideBar from './side bar/SideBar';
import Home from './MainContent/Home/Home';
import About from './MainContent/About/About';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <SideBar></SideBar>
      <div className="pages">
        <Home></Home>
        <About></About>
      </div>
    </div>
  );
}

export default App;
