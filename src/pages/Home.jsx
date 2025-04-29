import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SearchBar from "../components/SearchBar";
import TrustedBy from "../components/TrustedBy";
import FeaturedWorkers from "../components/FeaturedWorkers";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SearchBar />
      <TrustedBy />
      <FeaturedWorkers />
    </>
  );
};

export default Home;
