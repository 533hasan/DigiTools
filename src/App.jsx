import './App.css'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import StatsBanner from './Components/StatsBanner'
import Models from './Components/Models'
import { useState } from 'react'
import Cart from './Components/Cart'
import Tab from './Components/Tab'
import Start from './Components/Start'
import Footer from './Components/Footer'
import Workflow from './Components/Workflow'
import PricingSection from './Components/PricingSection'
const fetchData = async () => {
  const res = await fetch("data.json");
  return res.json();
}

const fetchPromise = fetchData();

function App() {
  const [activeTab, setActiveTab] = useState("product");
  const [cartData, setCartData] = useState([]);

  return (
    <div>
      <Navbar />
      <Banner />
      <StatsBanner />
      <Tab activeTab={activeTab} setActiveTab={setActiveTab} cartData={cartData} />

      {activeTab === "product" ? (
        <>
          <Models fetchPromise={fetchPromise} cartData={cartData} setCartData={setCartData} />
          <Start></Start>
        </>
      ) :
        (
          <Cart cartData={cartData} setCartData={setCartData} />
        )}
      <PricingSection></PricingSection>
      <Workflow></Workflow>
      <Footer></Footer>
    </div>
  );
}

export default App;