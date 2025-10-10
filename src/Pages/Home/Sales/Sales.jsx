import React from "react";
import Marquee from "react-fast-marquee";
import SalesCard from "./SalesCard";

// import your logos
import casioLogo from "../../../../public/assets/brands/casio.png";
import amazonLogo from "../../../../public/assets/brands/amazon_vector.png";
import moonstarLogo from "../../../../public/assets/brands/moonstar.png";
import starPlusLogo from "../../../../public/assets/brands/start.png";
import startPeopleLogo from "../../../../public/assets/brands/start-people 1.png";
import randstadLogo from "../../../../public/assets/brands/randstad.png";

const Sales = () => {
  const salesClients = [
  { logo: casioLogo, alt: "CASIO", width: 123, height: 24 },
  { logo: amazonLogo, alt: "Amazon", width: 93, height: 28 },
  { logo: moonstarLogo, alt: "Moonstar", width: 176, height: 24 },
  { logo: starPlusLogo, alt: "Star+", width: 93, height: 24 },
  { logo: startPeopleLogo, alt: "Start People", width: 178, height: 24 },
  { logo: randstadLogo, alt: "Randstad", width: 162, height: 24 },
];


  return (
    <section className=" py-10 max-w-4xl mx-auto">
      <h2 className="text-center text-[#03373D] text-xl font-extrabold mb-6">
        We've helped thousands of sales teams
      </h2>

      <Marquee gradient={false} speed={50}>
        {salesClients.map((client, index) => (
          <SalesCard key={index} logo={client.logo} alt={client.alt} width={client.width} height={client.height} />
        ))}
      </Marquee>
    </section>
  );
};

export default Sales;
