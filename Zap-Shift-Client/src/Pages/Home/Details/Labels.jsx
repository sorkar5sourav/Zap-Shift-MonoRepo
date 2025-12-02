import React from "react";
import { Link } from "react-router";
import lablePNG1 from "../../../assets/Images/safe-delivery.png";
import lablePNG2 from "../../../assets/Images/live-tracking.png";
import locationPNG from "../../../assets/Images/location-merchant.png";
import styleIMG from "../../../assets/Images/be-a-merchant-bg.png";

const Labels = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="py-20  mx-auto border-y-3 border-dashed border-secondary">
        <div className="p-8 flex items-center bg-white rounded-4xl">
          <img src={lablePNG2} alt="" className="mr-12 hidden md:flex" />
          <div className="border-l-2 border-dashed border-secondary h-20 mr-4 md:h-36"></div>
          <div className="md:pl-12 md:py-12">
            <h3 className="text-2xl text-secondary font-bold mb-6">
              Live Parcel Tracking
            </h3>
            <p>
              Stay updated in real-time with our live parcel tracking feature.
              From pick-up to delivery, monitor your shipment's journey and get
              instant status updates for complete peace of mind.
            </p>
          </div>
        </div>
        <div className="p-8 flex items-center my-8 bg-white rounded-4xl">
          <img src={lablePNG1} alt="" className="mr-12 hidden md:flex" />
          <div className="border-l-2 border-dashed border-secondary h-20 mr-4 md:h-36"></div>
          <div className="md:pl-12 md:py-12">
            <h3 className="text-2xl text-secondary font-bold mb-6">
              100% Safe Delivery
            </h3>
            <p>
              We ensure your parcels are handled with the utmost care and
              delivered securely to their destination. Our reliable process
              guarantees safe and damage-free delivery every time.
            </p>
          </div>
        </div>
        <div className="p-8 flex items-center bg-white rounded-4xl">
          <img src={lablePNG1} alt="" className="mr-12 hidden md:flex" />
          <div className="border-l-2 border-dashed border-secondary h-20 mr-4 md:h-36"></div>
          <div className="md:pl-12 md:py-12">
            <h3 className="text-2xl text-secondary font-bold mb-6">
              24/7 Call Center Support
            </h3>
            <p>
              Our dedicated support team is available around the clock to assist
              you with any questions, updates, or delivery concerns—anytime you
              need us.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-secondary relative flex rounded-4xl my-20 p-10 md:p-20">
        <img
          src={styleIMG}
          className="w-full absolute top-0 md:right-1"
          alt=""
        />
        <div className="max-w-[670px] text-center md:text-left">
          <h2 className="text-white font-bold text-2xl md:text-5xl">
            Merchant and Customer Satisfaction is Our First Priority
          </h2>
          <p className="black5 my-6 max-w-190">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <Link className="btn btn-outline bg-primary w-full md:w-auto font-bold px-8 rounded-full text-secondary hover:bg-secondary hover:text-primary">
              Become a Merchant
            </Link>
            <Link className="btn btn-outline text-primary! w-full md:w-auto btn-primary font-bold px-8 rounded-full hover:text-secondary!">
              Earn with ZapShift Courier
            </Link>
          </div>
        </div>
        <img
          src={locationPNG}
          className="absolute hidden lg:flex right-10 top-10"
          alt=""
        />
      </div>
    </div>
  );
};
export default Labels;
