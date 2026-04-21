import { Archive, BellMinus, MessageSquareText, PhoneCall, Trash2, Video } from 'lucide-react';
import React, { use, useState } from 'react';
import { useParams } from 'react-router';


const friendsPromise = fetch("/friendData.json").then(res => res.json())

const [timeline, setTimeline] = useState([])
const handleTimeline = (id,action)=>{
console.log(id,action)
}

const FriendDetails = () => {
    const {id} = useParams()
    const friends = use(friendsPromise)
    // console.log(friends)

    const expectedFriend = friends.find(friend=> friend.id == id)
    // console.log(expectedFriend)

    const { name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date } = expectedFriend;

    return (
      <div className=" grid md:flex gap-6 container mt-20 mx-auto">
        <div className="flex-1">
          <div className="bg-white shadow-sm p-6 rounded-xl  mb-4 ">
            <div className="card justify-center items-center gap-2">
              <figure className="w-20 rounded-full mb-1">
                <img src={picture} alt="" />
              </figure>
              <h3>{name}</h3>
              <button
                className={`rounded-full py-1 px-2 text-white ${
                  status === "overdue"
                    ? "bg-red-500"
                    : status === "on-track"
                      ? "bg-emerald-500"
                      : "bg-amber-500"
                }`}
              >
                {status}
              </button>
              <div className="flex">
                {tags.map((tag, index) => (
                  <p
                    key={index}
                    className="badge text-xs text-green-600 bg-green-200"
                  >
                    {tag}
                  </p>
                ))}
              </div>
              <p className="text-[#64748B] text-center">{`"${bio}"`}</p>
              <p className="text-[#64748B] text-center">{`Email: ${email}`}</p>
            </div>
          </div>
          <div className="bg-white flex gap-1 justify-center items-center text-center mb-2 p-4 rounded-xl text-gray-700 font-medium shadow-sm">
            <BellMinus></BellMinus>
            <p>Snooze 2 weeks</p>
          </div>
          <div className="bg-white flex gap-1 justify-center items-center text-center  mb-2 p-4 rounded-xl text-gray-700 font-medium shadow-sm">
            <Archive></Archive>
            <p>Archive</p>
          </div>
          <div className="bg-white flex gap-1 justify-center items-center text-center  mb-2 p-4 rounded-xl text-error font-medium shadow-sm">
            <Trash2></Trash2>
            <p>Delete</p>
          </div>
        </div>
        <div className="flex-2 grid gap-6">
          <div className="sm:flex md:gap-6 sm:gap-3 space-y-2 ">
            <div className="card w-full px-8 justify-center items-center bg-white shadow-xs">
              <h3 className="text-[2rem] font-semibold text-[#244D3F]">
                {days_since_contact}
              </h3>
              <p className="text-[#64748B] ">Days Since Contact</p>
            </div>
            <div className="card w-full px-8 justify-center items-center bg-white shadow-xs">
              <h3 className="text-[2rem] font-semibold text-[#244D3F]">
                {goal}
              </h3>
              <p className="text-[#64748B]">Goal (Days)</p>
            </div>
            <div className="card w-full px-8 justify-center items-center bg-white shadow-xs">
              <h3 className="lg:text-[2rem] text-[1.5rem] font-semibold text-[#244D3F]">
                {next_due_date}
              </h3>
              <p className="text-[#64748B]">Next Due</p>
            </div>
          </div>
          {/*  */}
          <div className="flex px-8 rounded-xl bg-white shadow-xs justify-between items-center">
            <div className=" space-y-2 text-left ">
              <h3 className="text-2xl font-medium text-[#244D3F]">
                Relationship Goal
              </h3>
              <p className="text-[#64748B] font-medium text-[18px]">
                Connect every{" "}
                <span className="font-bold text-black">{goal}Days</span>
              </p>
            </div>
            <div>
              <button>Edit</button>
            </div>
          </div>
          {/*  */}

          <div className="px-8 grid items-center rounded-xl bg-white shadow-xs w-full">
            <div className="text-left ">
              <h3 className="text-2xl font-medium text-[#244D3F]">
                Quick Check-In
              </h3>
            </div>
            <div className="flex">
              <div onClick={()=> handleTimeline(id, 'call')} className="p-4 flex-1 gap-2 grid justify-center items-center">
                <PhoneCall></PhoneCall>
                <p>Call</p>
              </div>
              <div className="p-4 flex-1 gap-2 grid justify-center items-center">
                <MessageSquareText></MessageSquareText>
                <p>Text</p>
              </div>
              <div className="p-4 flex-1 gap-2 grid justify-center items-center">
                <Video></Video>
                <p>Video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FriendDetails;