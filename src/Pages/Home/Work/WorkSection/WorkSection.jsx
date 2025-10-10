import React from 'react';
import BookingIcon from "../../../../../public/assets/images/bookingIcon.png"
import WorkCard from '../WorkCard/WorkCard';

const WorkSection = () => {
    const workData = [
  {
    "logo": BookingIcon,
    "title": "Booking Pick & Drop",
    "desc": "From personal packages to business shipments — we deliver on time, every time."
  },
  {
    "logo": BookingIcon,
    "title": "Cash On Delivery",
    "desc": "From personal packages to business shipments — we deliver on time, every time."
  },
  {
    "logo": BookingIcon,
    "title": "Delivery Hub",
   "desc": "From personal packages to business shipments — we deliver on time, every time."
  },
  {
    "logo": BookingIcon,
    "title": "Booking SME & Corporate",
    "desc": "From personal packages to business shipments — we deliver on time, every time."
  }
]

    return (
        // <div className='my-32'> 
        //     <h1>How it Works</h1>

        // <div className='flex items-center align-center bg-[FFFFFF] '>
        //    {
        //     workDetails.map((item, index)=> <WorkCard key={index} WorkCard={item}></WorkCard>)
        //    } 
        // </div>
        // </div>
        <div className='max-w-4xl mx-auto py-[32px]'>

      <h2 className="text-2xl font-bold  text-[#0c1829] mb-8 max-w-6xl mx-auto">How it Works</h2>
        
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto rounded">
        {workData.map((work,index) => (
          <WorkCard key={index} work={work}></WorkCard>
        ))}
      
    </div>
        </div>
    );
};

export default WorkSection;