import Navigator from "../components/Navigator/Navbar";
import Header from "../components/Header";
import Tendencias from "../components/Tendencias";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navigator />      
      <Header />      
      <Tendencias/>
      <div className="blog">
      <h2 className="titleBlog">Blog</h2>
      <Blog/>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
