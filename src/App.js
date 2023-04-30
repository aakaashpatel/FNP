import './App.css';
import Navbar from "./component/Navbar";
import Navbardown from './component/Navbardown';
import Image from './component/Image';
import FirstCard from './component/FirstCard';
import Card from './component/Card';
import FootBar from './component/FootBar'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Navbardown/>
      <Image/>
      <FirstCard/>
      <Card/>
      <FootBar/>
      
    </div>
  );
}

export default App;
