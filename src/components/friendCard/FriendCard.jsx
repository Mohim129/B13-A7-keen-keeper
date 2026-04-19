import React from 'react';

const FriendCard = ({friend}) => {
    console.log(friend)
    return (
      <div className="bg-white shadow-sm p-6 rounded-xl">
        <div className="card justify-center items-center gap-2">
          <figure className="w-20 rounded-full mb-1">
            <img src={friend.picture} alt="" />
          </figure>
          <h3>{friend.name}</h3>
          <p>{friend.days_since_contact}d</p>
          <div className="flex">
            {friend.tags.map((tag) => (
              <p className="badge text-xs text-green-600 bg-green-200">{tag}</p>
            ))}
          </div>
          <button
            className={`rounded-full py-1 px-2 text-white ${
              friend.status === "overdue"
                ? "bg-red-500"
                : 
              friend.status === "on-track"
                  ? "bg-emerald-500"
                  : "bg-amber-500"
            }`}
          >
            {friend.status}
          </button>
        </div>
      </div>
    );
};

export default FriendCard;