import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const TimelineContext = createContext();

const TimelineProvider = ({children}) => {

        const [timeline, setTimeline] = useState([]);

        const callImg = "https://i.ibb.co.com/N6chPMtp/call.png";
        const videoImg = "https://i.ibb.co.com/Ldsv28c5/video.png";
        const textImg = "https://i.ibb.co.com/Cs7HDCsb/text.png";

        const handleTimeline = (name, action, time) => {

            // let callCount = 0;
            // let textCount = 0;
            // let videoCount = 0;

          if (action === "call") {
            const newLog = {
              name: name,
              action: action,
              time: time,
              image: callImg,
              
            };
            toast("You made a call");
            setTimeline([...timeline, newLog]);
          } else if (action === "video") {
            const newLog = {
              name: name,
              action: action,
              time: time,
              image: videoImg,
            };
            toast("You made a Video");
            setTimeline([...timeline, newLog]);
          } else {
            const newLog = {
              name: name,
              action: action,
              time: time,
              image: textImg,
            };
            toast("You sent a text");
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