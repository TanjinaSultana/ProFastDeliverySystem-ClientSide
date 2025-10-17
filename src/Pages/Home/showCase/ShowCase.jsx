import React, { useEffect } from "react";
import ShowCaseCard from "./ShowCaseCard";
import AOS from "aos";
import "aos/dist/aos.css";

// Import images
import liveTrackingImg from "../../../../public/assets/images/live-tracking.png";
import safeDeliveryImg from "../../../../public/assets/images/safe-delivery.png";


const showCases = [
  {
    image: liveTrackingImg,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
  },
  {
    image: safeDeliveryImg,
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
  },
  {
    image: safeDeliveryImg,
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
  },
];

const ShowCase = () => {
  return (
    <div data-aos="fade-right" data-aos-delay="500" className="flex flex-col max-w-4xl mx-auto gap-6 py-12">
        <div class="border-t-1 border-dashed border-[#03464D]  mb-16"></div>
      {showCases.map((item, index) => (
        <ShowCaseCard
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
      <div class="border-t-1 border-dashed border-[#03464D] mt-12 mb-16"></div>
    </div>
  );
};

export default ShowCase;
