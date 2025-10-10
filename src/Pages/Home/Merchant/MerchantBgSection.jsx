import React from "react";
import topImage from "../../../../public/assets/images/be-a-merchant-bg.png"; // your top image path

const MerchantBgSection = () => {
  return (
 <section className="relative bg-[#03373D] max-w-4xl mx-auto rounded-xl mt-20 py-20 overflow-visible">
  {/* Content */}
  <div className="text-center text-white space-y-4 px-6">
    <h2 className="text-3xl font-bold">Merchant Section</h2>

    {/* Image absolutely positioned */}
    <div className="absolute top-0 left-0 w-full">
  <img
    src={topImage}
    alt="Top Decoration"
    className="w-full object-cover"
  />
</div>

  </div>
</section>



  );
};

export default MerchantBgSection;
