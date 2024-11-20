"use client";
import ProjectCard from "@/components/ProjectCard";
import React from "react";

const Page = () => {
  return (
     <div
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
      className="w-screen h-screen bg-fixed bg-center bg-cover"
    >
      <div className="h-full overflow-y-auto p-4 md:flex md:items-center md:justify-center pt-28 pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[95%] md:max-w-[100%] mx-auto">
          <ProjectCard
            image="SpaceWebsite.png"
            title="Space Themed Highly Interactive Website"
            text="A website built using Next.js, Framer Motion, TailwindCSS, and others. Highly interactive and attractive, the space theme is perfect for showcasing portfolios and abilities."
            link="https://nextjs-space-website.vercel.app/"
          />

          <ProjectCard
            image="WebPortfolio.png"
            title="Modern Next.js Portfolio"
            text="A portfolio website to showcase projects, skills, and abilities. Highly interactive and fun, built with Next.js, TailwindCSS, Framer Motion, etc."
            link="https://example.com/nextjs-portfolio"
          />

          <ProjectCard
            image="CoinStore.png"
            title="CoinHome"
            text="A React-based cryptocurrency website using APIs to fetch and display live and historical data, trends, and insights for trading and investment."
            link="https://example.com/coinhome"
          />

          <ProjectCard
            image="SpaceWebsite.png"
            title="Space Themed Portfolio Website"
            text="A beautifully crafted space-themed portfolio website."
            link="https://nextjs-space-website.vercel.app/"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;

