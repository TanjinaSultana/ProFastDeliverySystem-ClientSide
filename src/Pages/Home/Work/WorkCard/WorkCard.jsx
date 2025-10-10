import React from 'react';

const WorkCard = ({work}) => {
    
    return (
       <div  className="bg-white p-5 shadow-md ">
            <img 
              src={work.logo}
              alt={work.title}
              className=" mb-4 w-10 h-10 object-contain"
            />
            <h3 className="text-[13px] font-bold text-[#0c1829] mb-2">{work.title}</h3>
            <p className="text-gray-600 text-sm">{work.desc}</p>
          </div>
    );
};

export default WorkCard;