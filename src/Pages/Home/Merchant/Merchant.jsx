import React from 'react';
import MerchantLocationImg from "../../../../public/assets/images/location-merchant.png"
import topImage from "../../../../public/assets/images/be-a-merchant-bg.png"; 

const Merchant = () => {
    return (
     <section className="relative bg-[#03373D] max-w-4xl mx-auto rounded-xl mb-8 mt-20 py-20 overflow-visible">
       {/* Content */}
       <div className="text-center text-white space-y-4 px-6">
 {/* Image absolutely positioned */}
         <div className="absolute top-0 left-0 w-full">
       <img
         src={topImage}
         alt="Top Decoration"
         className="w-full object-cover"
       />
     </div>
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">
        
        {/* Left Side — Text */}
        <div className="flex-1 text-left text-white space-y-6">
 <h1 className="text-xl md:text-2xl font-extrabold leading-tight">
  Merchant and Customer Satisfaction is Our First Priority
</h1>

  <p className="text-sm text-[#DADADA]">
    We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
  </p>

  {/* Buttons */}
  <div className="flex space-x-4 mt-4">
    <button className="bg-none border border-[#CAEB66] text-[#CAEB66] text-sm font-normal px-6 py-2 rounded-full 
                       hover:bg-[#CAEB66] hover:text-[#1F1F1F] hover:font-bold transition-all duration-300">
      Become a Merchant
    </button>

    <button className="bg-none border border-[#CAEB66] text-[#CAEB66] text-sm font-normal px-4 py-2 rounded-full 
                       hover:bg-[#CAEB66] hover:text-[#1F1F1F] hover:font-bold transition-all duration-300">
      Earn with Profast Courier
    </button>
  </div>
</div>


        {/* Right Side — Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
  src={MerchantLocationImg}
  alt="Merchant"
  className="w-[400px] h-[200px] rounded-xl shadow-lg object-cover"
/>
        </div>
      </div>
       </div>
     </section>
    );
};

export default Merchant;