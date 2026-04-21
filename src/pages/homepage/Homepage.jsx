import React, { Suspense } from 'react';
import Hero from '../../components/hero/Hero';

import FriendConsent from '../../components/friendConsent/friendConsent';

const Homepage = () => {
    

    return (
      <div>
        <Hero></Hero>
        <Suspense
          fallback={
            <div className="flex justify-center">
              <span className="loading loading-spinner loading-xl"></span>
            </div>
          }
        >
          <FriendConsent></FriendConsent>
        </Suspense>
      </div>
    );
};

export default Homepage;