import Head from "next/head";

const Contact = () => {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <button className="transition ease-in-out delay-150 bg-[#38b8ff] hover:-translate-y-1 hover:scale-110 hover:bg-[#38b8ff]-500 duration-200 bg-[#38b8ff] text-xs md:text-base font-mulish text-white px-4 py-2 rounded-3xl">
        Contact Us!
      </button>
    </div>
  );
};

export default Contact;
