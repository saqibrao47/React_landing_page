import Workflow from './components/Workflow'
import Features from './components/Features'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Price from './components/Price'

const App = () => {
  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <HeroSection />
    <Features />
    <Workflow />
    <Price />
    </div>
  
   
   </>
   
  );
}

export default App