import React from "react";
import servicePng from "../../../assets/Images/service.png";
const Services = () => {
  const services = [
    {
      id: 1,
      title: "Express  & Standard Delivery",
      description:
        "We deliver parcels within 24 to 72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      id: 2,
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
      id: 3,
      title: "Fulfillment Solution",
      description:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
      id: 4,
      title: "Cash on Home Delivery",
      description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      id: 5,
      title: "Corporate Service / Contract In Logistics",
      description:
        "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
      id: 6,
      title: "Parcel Return",
      description:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
  ];
  return (
    <div className="text-center bg-secondary p-5 md:p-10 lg:p-20 rounded-4xl my-20">
      <h2 className="text-white text-5xl font-bold mb-4">Our Services</h2>
      <p className="black5 max-w-190 mx-auto mb-8">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
        {services.map((service, i) => (
          <div
            key={i}
            className="flex flex-col justify-start items-center rounded-3xl bg-base-100 z-10 p-8 hover:bg-primary md:w-80 md:h-85 lg:w-full shadow-sm transition-all duration-300"
          >
            <div className="h-20 w-20 bg-linear-to-b from-[#EEEDFC] to-[#fff/0] rounded-full hidden md:flex justify-center items-center">
              <img src={servicePng} className="max-h-14 w-14" alt="" />
            </div>
            <div className="text-center">
              <h2 className="mb-4 text-secondary md:my-4 text-2xl font-bold">
                {service.title}
              </h2>
              <p className="black8">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
