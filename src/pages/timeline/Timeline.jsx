import React, { useContext } from 'react';
import { TimelineContext } from '../../context/TimelineContext';
import TimelineCard from '../../components/timelineCard/TimelineCard';
import { ChevronDown } from 'lucide-react';

const Timeline = () => {
        const {timeline} = useContext(TimelineContext)
        console.log( timeline)
    return (
      <div className="container mx-auto mt-20 space-y-6">
        <h2 className="text-5xl font-bold">TimeLine</h2>
        <p className='text-gray-500 p-4 flex'>Filter timeline <ChevronDown></ChevronDown></p>
        <div className="p-4 space-y-6">
          {timeline.map((e, index) => (
            <TimelineCard key={index} e={e}></TimelineCard>
          ))}
        </div>
      </div>
    );
};

export default Timeline;