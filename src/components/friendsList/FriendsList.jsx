import React from 'react';
import FriendCard from '../friendCard/FriendCard';



const FriendsList = ({ friends }) => {
  return (
    <div className="container mx-auto p-2">
      <h4 className="text-2xl font-semibold mb-4 md:text-left text-center">Your Friends</h4>
      <div className='grid gap-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
        {
            friends.map(friend=><FriendCard key={friend.id} friend={friend}></FriendCard>)
        }
      </div>
    </div>
  );
};

export default FriendsList;