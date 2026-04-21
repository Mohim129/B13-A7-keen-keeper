import React, { useContext } from 'react';
import { TimelineContext } from '../../context/TimelineContext';

const Timeline = () => {
        const {timeline} = useContext(TimelineContext)
        console.log( timeline)
    return (
        <div className='container mx-auto'>
            <h2 className='text-5xl font-bold'>TimeLine</h2>
            <div>
                {
                    timeline.map(e=><div><p>name:{e.name}, action: {e.action}, </p> <img src={e.image} alt="" /></div>)
                }
            </div>
        </div>
    );
};

export default Timeline;