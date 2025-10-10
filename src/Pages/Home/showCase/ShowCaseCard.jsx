import React from "react";

const ShowCaseCard = ({ image, title, description }) => {
  return (
    <div className="flex gap-4 p-8 bg-white rounded-3xl text-[#FFFFFF] shadow-md">
      <div className="flex-shrink-0">
        <img src={image} alt={title} className="w-20 h-20 object-contain" />
      </div>
      <div class="border-l-1 border-dashed border-[#03464D] h-24 mx-6"></div>
      <div className="">
        <h3 className="text-xl font-extrabold text-[#03373D]">{title}</h3>
        <p className="text-[#606060] text-sm font-medium mt-1">{description}</p>
      </div>
    </div>
  );
};

export default ShowCaseCard;
