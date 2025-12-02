import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const FAQ = () => {
  const faqData = [
    {
      question: "How can I track my parcel's current location?",
      answer:
        'You can easily track your parcel using the unique tracking number provided in your confirmation email. Enter this number into the "Track Parcel" section on our homepage for real-time updates on its location and estimated delivery window. Notifications are available by email or SMS so you receive timely alerts about status changes, delays, and successful delivery confirmations.',
    },
    {
      question: "What are your standard delivery hours?",
      answer:
        "Our standard delivery hours are Monday to Friday, from 9:00 AM to 5:00 PM local time. We also offer optional weekend and evening delivery slots, which can be selected during checkout for your convenience. Drivers follow safety protocols; you can request delivery instructions and contactless drop-offs to improve convenience and meet specific timing needs.",
    },
    {
      question: "What should I do if my package arrives damaged?",
      answer:
        "Please photograph any damage immediately upon arrival. Contact our customer support within 48 hours to report the issue and initiate a claim. We will process your request promptly to arrange a replacement or issue a full refund. Keep original packaging and receipts; our claims team may request additional documentation and will coordinate with insurers to resolve claims.",
    },
    {
      question: "Are there any items you cannot deliver?",
      answer:
        "We prohibit shipping hazardous materials, illegal goods, live animals, and certain perishable items for safety and legal reasons. A comprehensive list of restricted items is available on our website's detailed Shipping Policy page. If unsure, contact customer support before booking; incorrect items may be returned at sender's expense and could incur penalties thereby.",
    },
    {
      question: "Do you offer international shipping services?",
      answer:
        "Yes, we provide reliable international shipping to over 150 countries worldwide. When checking out, you can instantly see estimated transit times and customs fees for your destination. Ensure all necessary documentation is completed for smooth delivery. Deliveries may be subject to customs inspections; duties vary by country—track clearance progress and prepare to respond quickly to customs requests.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(0);

  const toggleOpen = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };
  return (
    <div className="max-w-7xl mx-auto px-6 text-center md:px-20">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-4xl font-bold text-secondary">
          Frequently Asked Question (FAQ)
        </h3>
        <p className="mt-6 text-black8">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <div className="my-10 flex flex-col gap-6">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`p-6 text-left rounded-2xl  ${
              openIndex === index
                ? "bg-[#E6F2F3] border border-[#067A87]"
                : "bg-white"
            }`}
          >
            <div className="flex items-center justify-between">
              <h4 className="text-secondary text-xl font-bold">
                {item.question}
              </h4>
              <button
                aria-expanded={openIndex === index}
                aria-controls={`faq-desc-${index}`}
                onClick={() => toggleOpen(index)}
                className="text-2xl text-secondary p-2 rounded"
              >
                {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
            </div>
            <div className="border-top border-secondary">
              {openIndex === index && (
                <p id={`faq-desc-${index}`} className="mt-4 text-black8">
                  {item.answer}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
