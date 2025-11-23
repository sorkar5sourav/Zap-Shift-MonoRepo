import Banner from "./Banner/Banner";
import Brands from "./Brands/Brands";
import Reviews from "./Reviews/Reviews";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());

const HomePage = () => {
  return (
    <div className="">
      <Banner />
      <Brands />
      <Reviews reviewsPromise={reviewsPromise} />
    </div>
  );
};

export default HomePage;
