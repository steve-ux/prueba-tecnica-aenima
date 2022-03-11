import Navigator from "../components/Navigator/Navbar";
import Header from "../components/Header";
import Tendencias from "./Tendencias";

function Home() {
  return (
    <div>
      <Navigator />      
      <Header />
      <Tendencias/>
    </div>
  );
}

export default Home;
