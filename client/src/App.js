
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Education from './Components/Education';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact'


function App() {
  return (
    <div  >
        <Navbar/>
        <About/>
        <Education/>
        <Portfolio/>
        <Contact/>
      
    </div>
  );
}

export default App;
