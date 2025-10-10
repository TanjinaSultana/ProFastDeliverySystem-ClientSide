import React from 'react';
import Service from '../Service/Service';

const Services = () => {
  const servicesData = [
      {
        "Title": "Express & Standard Delivery",
        "Description": "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off."
      },
      {
        "Title": "Nationwide Delivery",
        "Description": "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours."
      },
      {
        "Title": "Fulfillment Solution",
        "Description": "We also offer customized service with inventory management support, online order processing, packaging, and after sales support."
      },
      {
        "Title": "Cash on Home Delivery",
        "Description": "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product."
      },
      {
        "Title": "Corporate Service / Contract In Logistics",
        "Description": "Customized corporate services which include warehouse and inventory management support."
      },
      {
        "Title": "Parcel Return",
        "Description": "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants."
      }
    
    ]
console.log(servicesData);
    return (
        <div>
           <section className="bg-[#03373D] rounded-3xl py-16 px-6 md:px-12 lg:px-20 text-white">
      <div className="text-center mb-12">
        <h2 className="text-[#FFFFFF] text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        Our Services
        </h2>
        <p className="text-[#dadada] font-medium max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
         Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, index) => (
          <Service
            key={index}
            service={service}/>
          
        ))}
      </div>
    </section>  
        </div>
    );
};

export default Services;