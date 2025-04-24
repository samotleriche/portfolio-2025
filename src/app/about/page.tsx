import { Metadata } from "next";
import Image from "next/image";
import React from "react";
// import profile from "./profileCap.jpg";
import profile2 from "./profilePic.jpg";
import { GradleLogo } from "@/components/icons";

export const metadata: Metadata = {
  title: "Tomas Leriche | About",
  description:
    "Tomas Leriche is a software engineer and motion designer currently based in Santa Monica, California.",
};

function About() {
  return (
    <div className="pt-[var(--h-navbar)] h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="w-section p-section">
        <div className="relative justify-center flex gap-8">
          <div className="relative rounded-xl size-40">
            <Image
              src={profile2}
              fill
              alt="Me standing in front of the Pilar Dunes in Cap Ferret, France."
              className="object-cover rounded-xl border-white border-2"
            />
          </div>
          <div className="flex justify-center items-center">
            <h1 className="flex flex-col gap-3">
              <div>
                <span>Hi, I&apos;m</span>{" "}
                <span className="bg-gradient-to-br from-teal-400 to-violet-500 bg-clip-text text-transparent">
                  Tomas Leriche!
                </span>
              </div>
              <div>
                <span>
                  I&apos;m a{" "}
                  <span className="border-b-4 border-teal-500">
                    Senior Software Enginer
                  </span>{" "}
                  at
                </span>
              </div>
              <div className="flex gap-3">
                <span>Gradle.</span>
                <GradleLogo className="size-10" />
              </div>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
