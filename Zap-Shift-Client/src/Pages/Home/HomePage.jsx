import Banner from "./Banner/Banner";
import Brands from "./Brands/Brands";
import HowWorks from "./Details/HowWorks";
import Labels from "./Details/Labels";
import FAQ from "./FAQ/FAQ";
import Reviews from "./Reviews/Reviews";
import Services from "./Services/Services";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());

const HomePage = () => {
  return (
    <div className="">
      <Banner />
      <HowWorks />
      <Services />
      <Brands />
      <Labels />
      <Reviews reviewsPromise={reviewsPromise} />
      <FAQ />
    </div>
  );
};

export default HomePage;
