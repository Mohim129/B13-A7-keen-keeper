import React, { useContext, useState } from 'react';
import { TimelineContext } from '../../context/TimelineContext';
import TimelineCard from '../../components/timelineCard/TimelineCard';
import { ChevronDown } from 'lucide-react';

const Timeline = () => {
        const {timeline} = useContext(TimelineContext)
        // console.log( timeline)
        const [filter, setFilter] = useState("all");
        const filteredTimeline = timeline.filter(event => {
          if (filter === "all") return true;
          return event.action === filter;
        });
    return (
      <div className="container mx-auto mt-20 space-y-6">
        <h2 className=" md:text-5xl sm:text-4xl text-3xl md:text-left text-center font-bold">TimeLine</h2>
        {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
        {/* For TSX uncomment the commented types below */}
        <button
          className="btn text-gray-500 p-4 flex"
          popoverTarget="popover-1"
          style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
        >
          Filter timeline <ChevronDown></ChevronDown>
        </button>

        <ul
          className="dropdown text-gray-500 menu w-52 rounded-box bg-base-100 shadow-sm"
          popover="auto"
          id="popover-1"
          style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}
        >
          <li>
            <a onClick={() => setFilter("all")}>All</a>
          </li>
          <li>
            <a onClick={() => setFilter("call")}>Call</a>
          </li>
          <li>
            <a onClick={() => setFilter("text")}>Text</a>
          </li>
          <li>
            <a onClick={() => setFilter("video")}>Video</a>
          </li>
        </ul>

        <div className="p-4 space-y-6">
          {filteredTimeline.map((e, index) => (
            <TimelineCard key={index} e={e}></TimelineCard>
          ))}
        </div>
      </div>
    );
};

export default Timeline;