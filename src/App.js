import './App.css';
import Category from './Components/category/Category';
import Footer from './Components/footer/Footer';
import Hakset from './Components/hakimindset/Hakset';
import Hakiteam from './Components/hakiteam/Hakiteam';
import HeroSection from './Components/herosection/HeroSection';
import Herosectwo from './Components/herosectiontwo/Herosectwo';
import Navbar from './Components/navbar/Navbar';
import Rarity from './Components/Rarity/Rarity';
import Roadmap from './Components/roadmap/Roadmap';

function App() {
  return (
    <>
    <Navbar/>
    {/* <HeroSection/> */}
    <Herosectwo/>
    <Rarity/>
    <Category/>
    <Roadmap/>
    <Hakset/>
    <Hakiteam/>
    <Footer/>
    </>
  );
}

export default App;
