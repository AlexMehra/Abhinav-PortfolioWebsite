import ContactForm from "@/components/ContactForm";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(bg-3.jpg)" }}
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
    >
      <div
        id="box"
        style={{ backgroundImage: "Cats Memes.gif" }}
        className="h-[80%] w-[90%] sm:h-[69%] sm:w-[70%] md:w-[50%] py-3.5  relative bg-cover bg-center rounded-xl border border-white"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[95%] sm:w-[80%] md:w-[70%]">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
