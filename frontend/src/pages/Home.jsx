import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import BestSeller from "../components/home/BestSeller";
import Testimonials from "../components/home/Testimonials";
import Newsletter from "../components/home/Newsletter";
import Collection from "../components/home/Collection";
import WhyChoose from "../components/home/WhyChoose";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Collection />
      <WhyChoose />

      <Categories/>
      <FeaturedProducts />
      <BestSeller />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;