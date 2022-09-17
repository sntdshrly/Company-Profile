import Navbar from '../components/navbar';
import Hero from '../components/hero';
import About from '../components/about';
import Partner from '../components/partner';
import Portofolio from '../components/portofolio';
import Footer from '../components/footer';
import Donation from '../components/donation';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Partner />
      <Portofolio />
      <Donation />
      <Footer />
    </>
  );
}

export default HomePage;
