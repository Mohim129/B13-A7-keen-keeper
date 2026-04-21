import { CaseUpper } from 'lucide-react';
import React from 'react';

const TimelineCard = ({e}) => {
   
    console.log(e)
    return (
      <div className="flex gap-4 bg-white rounded-xl shadow-sm p-4">
        <figure>
          <img src={e.image} alt="" />
        </figure>
        <div>
          <p className="text-gray-500">
            <span className="text-[#244D3F] font-medium text-xl">
              {e.action.toUpperCase()}{" "}
            </span>
            with {e.name}
          </p>
          <p className="text-gray-400">{e.time.toDateString()}</p>
        </div>
      </div>
    );
};

export default TimelineCard;