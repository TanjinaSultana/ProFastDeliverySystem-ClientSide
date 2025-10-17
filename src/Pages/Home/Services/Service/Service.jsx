import React from 'react';
import serviceImg from "../../../../../public/assets/images/service.png"

const Service = ({ service }) => {
  return (
    <div  data-aos="flip-right" data-aos-delay="1000" className="bg-white p-4 rounded-2xl shadow-md hover:bg-[#CAEB66] transition-colors duration-300 text-center">
      <div className="mb-4">
        <img
          src={serviceImg}
          alt={service.Title||'no'}
          className="mx-auto w-[30px] rounded-full h-[30px] object-contain "
        />
      </div>
      <h3 className="text-lg font-bold text-[#03373D] mb-2">{service.Title || 'no'}</h3>
      <p className="text-[#606060] font-medium text-[10px] ">{service.Description||'no'}</p>
    </div>
  );
};

export default Service;
