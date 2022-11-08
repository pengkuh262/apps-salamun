import Head from "next/head";
import React from "react";
import ContactUs from "./contactUs";

const Outro = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div>
        <div className="bg-orange-500 rounded-full font-normal mx-8 md:mx-24 xl:mx-[272px] ">
          <div className="flex justify-between ">
            <img className="w-16 h-auto" src="/img/Group8.png" alt="" />
            <div className="flex h-[21px] gap-x-[5.41px]">
              <img src="/img/Rectangle47.png" alt="" />
              <img src="/img/Rectangle48.png" alt="" />
            </div>
          </div>
          <h1 className="text-xs md:text-lg lg:text-2xl xl:text-4xl text-white text-center pb-2 font-normal">
            Have you decide to <br />
            <span className="text-blue-300">Develop your Application </span>? If
            is already <br /> Lets Start by Contacting Us.
          </h1>
          <div className="flex justify-between">
            <div className="flex h-[21px] mt-6 gap-x-[5.41px]">
              <img src="/img/Rectangle48.png" alt="" />
              <img src="/img/Rectangle47.png" alt="" />
            </div>
            <div>
              <ContactUs />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Outro;
