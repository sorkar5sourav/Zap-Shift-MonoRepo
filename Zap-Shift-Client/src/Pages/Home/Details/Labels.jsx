import React from "react";
import lablePNG1 from "../../../assets/Images/safe-delivery.png";
import lablePNG2 from "../../../assets/Images/live-tracking.png";
import locationPNG from "../../../assets/Images/location-merchant.png";
import styleIMG from "../../../assets/Images/be-a-merchant-bg.png";

const Labels = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="py-20  mx-auto border-y-3 border-dashed border-secondary">
        <div className="p-8 flex items-center bg-white rounded-4xl">
          <img src={lablePNG2} alt="" className="mr-12" />
          <div className="border-l-2 border-dashed border-secondary h-36"></div>
          <div className=" pl-12 py-12">
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
          <img src={lablePNG1} alt="" className="mr-12" />
          <div className="border-l-2 border-dashed border-secondary h-36"></div>
          <div className=" pl-12 py-12">
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
          <img src={lablePNG1} alt="" className="mr-12" />
          <div className="border-l-2 border-dashed border-secondary h-36"></div>
          <div className=" pl-12 py-12">
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
      <div className="bg-secondary flex rounded-4xl p-20">
        <div className="max-w-[670px]">
          <h2 className="text-white font-bold text-5xl">
            Merchant and Customer Satisfaction is Our First Priority
          </h2>
          <p className="black5 mt-6 max-w-190">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
        </div>
        <img src={locationPNG} alt="" />
      </div>
    </div>
  );
};
export default Labels;
