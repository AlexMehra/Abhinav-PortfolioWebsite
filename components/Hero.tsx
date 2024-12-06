

"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="w-screen h-screen relative">
      {/* Static background elements */}
      <div className="fixed inset-0 -z-10">
        {/* Background Image */}
        <div
          className="w-full h-full bg-cover bg-center flex items-center fixed inset-0 -z-10"
          style={{ backgroundImage: "url(/main-bg.webp)" }}
        ></div>


        {/* Static Cliff */}
        <div className="absolute bottom-0 right-0">

          <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
        </div>

        {/* Static Trees */}
        <div className="absolute bottom-0 w-full h-auto">
          <Image
            src="/trees.webp"
            alt="trees"
            width={2000}
            height={2000}
            className="w-full h-full"
          />
        </div>

        {/* Static Stars */}
        <Image
          src="/stars.png"
          alt="stars"
          height={300}
          width={300}
          className="absolute top-0 left-0"
          unoptimized
        />
        <Image
          src="/stars.png"
          alt="stars"
          height={300}
          width={300}
          className="absolute top-0 right-0"
          unoptimized
        />
      </div>

      {/* Scrollable Content */}
      <div
        className="relative w-full h-full overflow-y-auto md:pt-36 "
        id="scroll"
      >
        <div className="min-h-screen px-5 md:px-40 py-20 flex flex-col gap-20">
          {/* Section 1 */}
          <section className="flex flex-col gap-5 max-w-[750px]">
            <h1 className="text-[48px] md:text-[60px] text-white font-semibold">
              Make anything possible with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                {" "}
                web dev Akki {" "}
              </span>
              (Abhinav)
            </h1>
            <p className="text-gray-200 hidden md:block text-base md:text-lg  my-5 max-w-[90%] md:max-w-[600px]">
              I&apos;m a Full Stack Software Engineer with experience in Website,
              Mobile, and Software development. Check out my projects and skills.

            </p>

            <div className="flex flex-col md:flex-row gap-2 pt-14 pb-20" >
              <Link
                href="https://drive.google.com/file/d/1xP9YUJanb7onBFTL35povXa-F7VxwYi5/view?usp=drive_link"
                className="rounded-[20px] group relative bg-blue-700 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
              >
                My Resume
              </Link>
              <Link
                href="/my-projects"
                className="rounded-[20px] group relative bg-transparent px-5 border border-white py-3 text-lg text-white max-w-[200px] hover:bg-white hover:text-black"
              >
                My projects
              </Link>
              <Link
                href="/contact-me"
                className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px] hover:bg-white hover:text-black"
              >
                Contact me
              </Link>
            </div>


            <div className=" pl-16 md:absolute right-1 left-10 md:left-auto bottom-1 md:bottom-56 md:right-10  md:flex justify-center items-center w-full md:w-72 md:h-72 py-2.5">
              <div className="bg-white rounded-full bg-opacity-25 md:bg-opacity-25  md:flex items-center justify-center w-40 h-40 md:w-60 md:h-60 ">
                <Image
                  src="/download.gif"
                  alt="GIF"
                  height={300}
                  width={300}
                  className="md:absolute md:right-[55px] md:top-[40px]  md:scale-100 scale-150 pt-7"
                />
              </div>
            </div>








          </section>



          {/* Section 2 */}
          <section>
            <h2 className="text-white text-[40px] font-bold">
              Explore more possibilities
            </h2>
            <p className="text-gray-200">
              Get to know me and Hire me 😺
            </p>
          </section>


          <div id="about-me" className="flex flex-col items-center py-20 space-y-10 ">
            {/* Header section */}
            <div className="z-[5]">
              <h1

                className="text-[50px] font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
              >
                About me
              </h1>
            </div>

            {/* Content section */}
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-10 space-y-6 md:space-y-0 w-full px-4">

              {/* Text Section */}
              <div className="text-gray-200 text-center md:text-left text-base md:text-lg my-5 max-w-full md:max-w-[600px]">
                <h1 className="text-2xl font-semibold mb-2">Let me introduce myself.</h1>
                <p>
                  I&apos;m Abhinav Singh Mehra, a dynamic Computer Science Engineering student from Uttarakhand. With a strong passion
                  for technology, I thrive on constant learning and aspire to be a skilled full-stack web developer. Join me on
                  this exhilarating journey as we explore new opportunities and shape the future of computer science together.
                  Let&apos;s make innovation happen.
                </p>
              </div>





              {/* GIF Section */}
              <div className="w-full md:w-1/3 max-w-xs mx-auto">
                <Image
                  src="/Bongo Cat.gif"
                  alt="Dancing Cat GIF"
                  width={300}
                  height={300}
                  className="w-full h-auto rounded-full"
                />
              </div>
            </div>



            {/* Button Section */}
            <div className="flex flex-row space-x-14">

              <Link
                href="/my-skills"
                target="_blank"
                className="button-primary py-2 text-center min-w-[100px]  bg-blue-700 hover:bg-blue-500  text-white cursor-pointer rounded-[20px] px-6 w-36"
              >
                My Skills
              </Link>


              <Link
                href="/contact-me"
                target="_blank"
                className="button-primary py-2 text-center  min-w-[100px] bg-transparent border text-white border-white text-lg hover:bg-white hover:text-black cursor-pointer rounded-[20px] px-6 w-36"
              >
                Hire me
              </Link>

            </div>



          </div>

          {/* Text Section */}
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-10 space-y-6 md:space-y-0 w-full px-4">
            <div className="text-gray-200 text-center md:text-left text-base md:text-lg my-5 max-w-full md:max-w-[600px]">
              <h1 className="text-2xl font-semibold mb-2">More of my credentials.</h1>
              <p>
                Throughout my academic journey, I have developed a profound interest in the field of technology. This curiosity has driven me to work on numerous projects, allowing me to refine my skills and expand my knowledge.
              </p>


            </div>
            {/* GIF Section */}
            <div className="w-full md:w-1/3 max-w-xs mx-auto">
              <Image
                src="/Dancing Duck.gif"
                alt="Dancing Duck GIF"
                width={300}
                height={300}
                className="w-full h-auto rounded-full"
              />
            </div>

          </div>

          {/* Resume */}
          <section className="mt-20">
            <div className="z-[5]">
              <h1
                className="text-[50px] font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
              >
                My Resume and Details
              </h1>
            </div>
            <div className="w-full h-[500px] border border-gray-300 rounded-lg overflow-hidden ">
              <iframe
                src="/Abhinav-resume7.pdf.pdf"
                className="w-full h-full"
                title="PDF Viewer"
              ></iframe>
            </div>
          </section>




        </div>
      </div>
    </main>

  );
}
