import React from 'react';

const HomeDetails = ({friends}) => {
  const onTrack = friends.filter(
    (friend) => friend.status === "on-track",
  ).length;

  const needAttention = friends.filter(
    (friend) => friend.status === "overdue",
  ).length;

  const currentDate = new Date().getDate();
  const interactionsThisMonth = friends.filter(
    (friend) => friend.days_since_contact <= currentDate,
  ).length;

    return (
      <div className="flex justify-center items-center container mx-auto ">
        <div className="grid gap-6 lg:grid-cols-4 sm:grid-cols-2 mb-20">
          <div className="card w-65 py-8 items-center bg-white shadow-xs">
            <h3 className="text-[2rem] font-semibold text-[#244D3F] ">
              {friends.length}
            </h3>
            <p className="text-[#64748B]">Total Friends</p>
          </div>
          <div className="card w-65 py-8 items-center bg-white shadow-xs">
            <h3 className="text-[2rem] font-semibold text-[#244D3F]">
              {onTrack}
            </h3>
            <p className="text-[#64748B]">On Track</p>
          </div>
          <div className="card w-65 py-8 items-center bg-white shadow-xs">
            <h3 className="text-[2rem] font-semibold text-[#244D3F]">
              {needAttention}
            </h3>
            <p className="text-[#64748B]">Need Attention</p>
          </div>
          <div className="card w-65 py-8 items-center bg-white shadow-xs">
            <h3 className="text-[2rem] font-semibold text-[#244D3F]">{interactionsThisMonth}</h3>
            <p className="text-[#64748B]">Interactions This Month</p>
          </div>
        </div>
      </div>
    );
};

export default HomeDetails;