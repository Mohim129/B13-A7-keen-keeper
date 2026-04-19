import React, { use } from 'react';
import Hero from '../../components/hero/Hero';
import HomeDetails from '../../components/homeDetails/HomeDetails';
import FriendsList from '../../components/friendsList/FriendsList';

const friendsPromise = fetch("/friendData.json").then((res) => res.json());
const Homepage = () => {
    const friends = use(friendsPromise)
    console.log(friends)
    return (
      <div>
        <Hero></Hero>
        <HomeDetails friends={friends}></HomeDetails>
        <FriendsList friends={friends}></FriendsList>
      </div>
    );
};

export default Homepage;