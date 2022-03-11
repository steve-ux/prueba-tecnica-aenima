import Navigator from "../components/Navigator/Navbar";
import Header from "../components/Header";
import Tendencias from "../components/Tendencias";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navigator />      
      <Header />      
      <Tendencias/>
      <Footer/>
    </div>
  );
}

export default Home;
