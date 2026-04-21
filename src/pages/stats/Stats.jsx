import React, { useContext } from 'react';
import { TimelineContext } from '../../context/TimelineContext';
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const Stats = () => {
    const {timeline} = useContext(TimelineContext)
    if (!timeline) return <div className="text-center p-10">Loading...</div>;

    
    let callCount = 0;
    let textCount = 0;
    let videoCount = 0;
    timeline.forEach(e=> {
      if(e.action === 'call'){
        callCount = callCount+1;
      }else if(e.action === 'text'){
        textCount =textCount+1;
      }else if(e.action === 'video'){
        videoCount = videoCount+1;
      }
    })
    const data = [
      { name: "Text", value: textCount, color: "#7E35E1" },
      { name: "Call", value: callCount, color: "#244D3F" },
      { name: "Video", value: videoCount, color: "#37A163" },
    ];
    return (
      <div className="container mx-auto mt-20 space-y-6">
        <h2 className="md:text-5xl sm:text-4xl text-3xl md:text-left text-center font-bold">
          Friendship Analytics
        </h2>
        <div className="rounded-xl bg-white shadow-sm sm:p-8 p-6">
          <p className="text-[#244D3F]">By Interaction Type</p>
          <div>
            {/* *************************** */}
            <div className="flex flex-col justify-center items-center">
              <div className="w-full h-75">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={data}
                      innerRadius="70%"
                      outerRadius="90%"
                      paddingAngle={8}
                      cornerRadius={10}
                      dataKey="value"
                      stroke="none"
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            {/* ******************************* */}
            <div className="flex justify-center items-center gap-6">
              <div className="flex justify-center items-center gap-1">
                <div className="bg-[#7E35E1] w-2 h-2 rounded-full"></div>
                <p>Text</p>
              </div>
              <div className="flex justify-center items-center gap-1">
                <div className="bg-[#244D3F] w-2 h-2 rounded-full"></div>
                <p>Call</p>
              </div>
              <div className="flex justify-center items-center gap-1">
                <div className="bg-[#37A163] w-2 h-2 rounded-full "></div>
                <p>Video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Stats;