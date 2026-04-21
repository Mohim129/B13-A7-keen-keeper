import React from 'react';
import fb from './../../../assets/facebook.png'
import insta from './../../../assets/instagram.png'
import twitter from './../../../assets/twitter.png'

const Footer = () => {
    return (
      <div className="bg-[#244D3F] text-center md:pt-20 pt-15 pb-8 md:mt-20 mt-12 mx-auto grid justify-center items-center">
        <footer className="text-white container  space-y-4">
          <h1 className="lg:text-7xl md:text-5xl text-4xl font-semibold">
            <span className="font-extrabold">Keen</span>Keeper
          </h1>
          <p className="px-4 text-gray-300">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <div className="grid mt-2 mb-6 gap-4">
            <h4>Social Links</h4>
            <div className="flex gap-2 justify-center items-center">
              <figure className="rounded-full bg-white  ">
                <img src={fb} alt="" />
              </figure>
              <figure className="rounded-full bg-white  ">
                <img src={insta} alt="" />
              </figure>
              <figure className="rounded-full bg-white  ">
                <img src={twitter} alt="" />
              </figure>
            </div>
          </div>
          <hr className="text-gray-500 font-extralight mb-7" />

          <div className="grid lg:grid-cols-2 w-full lg:justify-between justify-center items-center">
            <p className="text-gray-500">
              © 2026 KeenKeeper. All rights reserved.
            </p>
            <div className="flex gap-4">
              <p className="text-gray-500">Privacy Policy</p>
              <p className="text-gray-500">Terms of Service</p>
              <p className="text-gray-500">Cookies</p>
            </div>
          </div>
        </footer>
      </div>
    );
};

export default Footer;