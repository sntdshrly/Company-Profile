import Navbar from '../components/navbar';
import Hero from '../components/hero';
import About from '../components/about';
import Partner from '../components/partner';
import Portofolio from '../components/portofolio';
import Footer from '../components/footer';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Partner />
      <Portofolio />
      <Footer />
    </>
  );
}

export default HomePage;
