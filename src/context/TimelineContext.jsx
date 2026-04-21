import React, { createContext, useState } from 'react';

export const TimelineContext = createContext();

const TimelineProvider = ({children}) => {

        const [timeline, setTimeline] = useState([]);

        const callImg = "https://ibb.co.com/27G2QTWP";
        const videoImg = "https://ibb.co.com/d4H7zrVg";
        const textImg = "https://ibb.co.com/cXFrVfX6";

        const handleTimeline = (name, action) => {

            // let callCount = 0;
            // let textCount = 0;
            // let videoCount = 0;

          if (action === "call") {
            const newLog = {
              name: name,
              action: action,
              image: callImg,
              
            };
            // callCount=callCount+1
            setTimeline([...timeline, newLog]);
          } else if (action === "video") {
            const newLog = {
              name: name,
              action: action,
              image: videoImg,
            };
            // textCount= textCount+1
            setTimeline([...timeline, newLog]);
          } else {
            const newLog = {
              name: name,
              action: action,
              image: textImg,
            };
            setTimeline([...timeline, newLog]);
          }
        };
        const data ={
            timeline,
            setTimeline,
            handleTimeline,
        }
    return (
        <TimelineContext.Provider value={data}>
            {children}
        </TimelineContext.Provider>
    );
};

export default TimelineProvider;