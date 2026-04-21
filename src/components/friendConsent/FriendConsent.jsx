import React, { use } from 'react';
import HomeDetails from "../../components/homeDetails/HomeDetails";
import FriendsList from "../../components/friendsList/FriendsList";

const friendsPromise = fetch("/friendData.json").then((res) => res.json());
const FriendConsent = () => {
    const friends = use(friendsPromise);
    return (
      <div>
          <HomeDetails friends={friends}></HomeDetails>
          <FriendsList friends={friends}></FriendsList>
      </div>
    );
};

export default FriendConsent;