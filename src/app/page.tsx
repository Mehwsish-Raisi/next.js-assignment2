
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Hero from "./components/Hero/hero";

const Home =() => {
  return (
    <div>
      <h1 id="main">My Home Page </h1>
      <br />
      <center>
      <Header></Header>
      <br />
     <Hero></Hero>
     <br />
     <Footer></Footer>
     
     </center>
    </div>
  )
}
export default Home;