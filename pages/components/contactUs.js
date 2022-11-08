import Head from "next/head";

const ContactUs = () => {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <button className="transition ease-in-out delay-150  bg-[#38b8ff] hover:-translate-y-1 hover:scale-110 hover:bg-[#38b8ff]-500 duration-200 bg-[#38b8ff] font-mulish text-white ml-4 text-sm py-[8.43px] px-[24.78px] mt-2 ml-8 md:mt-3 md:ml-[36px] md:py-3 md:px-10 md:text-xl lg:ml-[139px] lg:py-[15px] lg:px-[42px] lg:text-2xl rounded-full">
        Contact Us!
      </button>
    </div>
  );
};

export default ContactUs;
