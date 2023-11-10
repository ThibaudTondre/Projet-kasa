import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import Banner from './component/Banner/Banner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    
    <Home />
    <Navbar />
    <Banner />
      </header>
    </div>
  );
}


export default App;

