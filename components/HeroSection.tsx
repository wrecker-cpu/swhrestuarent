import { FirstVector, SecondVector, StarVector, ThirdVector } from "@/svgs/svg";
import Image from "next/image";
import React from "react";
import Magnetic from "./Magnetic";

export default function HeroSection() {
  return (
    <div className="max-w-[1200px] px-10 mx-auto mb-24  esm:mb-28 em:mb-32 ew:mb-36 vem:mb-40">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between mb-24  ew:mb-28 vem:mb-32">
        <div className=" max-w-full md:max-w-[50%]  w-full">
          <div className="hero-container">
            <p className="text-[12vw] esm:text-[12vw] ew:text-[12vw] vew:text-[11vw] md:text-[5.5vw] 2xl:text-[77.5px] text-center md:text-left leading-[1.2] mb-6 text-[#F3F3F3] md:text-[#6F8867] font-bold font-abril ">
              Choosing Quality Food.
            </p>
            <p className="text-[#F3F3F3] md:text-[#555555] w-[90%]  md:w-full text-[18px]  font-normal text-center md:text-left mx-auto md:mx-0 max-w-[33rem] mb-6 ">
              Lorem ipsum dolor sit amet consectetur. A ornare lacus in ac tellus
              dignissim diam aliquet velit. Est eu augue eu vel vestibulum arcu
              enim dignissim.
            </p>
            <div className="w-full flex justify-center md:justify-start">
              <Magnetic>
              <button className="mb-5 px-12 py-2 bg-[#6F8867] text-white rounded-xl">
                Book Now
              </button>
              </Magnetic>
            </div>
          </div>
        </div>
        <div className="relative hidden md:block w-full">
          <div className="w-[30rem] md:w-[24rem] lg:w-[26rem] xlg:w-[28rem] xl:w-[30rem] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]   h-auto">
            <FirstVector />
          </div>
          <div className="w-[30rem] md:w-[24rem] lg:w-[26rem] xlg:w-[28rem] xl:w-[30rem] absolute h-auto top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  ">
            <SecondVector />
          </div>
          <div className="w-[30rem] md:w-[24rem] lg:w-[26rem] xlg:w-[28rem] xl:w-[30rem] absolute h-auto top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]   overflow-visible">
            <ThirdVector />
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto">
        <div className="w-full flex justify-between gap-4 items-center">
          <div className="border-[0.5px] border-[#BDD2B6] w-full h-0"></div>
          <div className="w-10 h-10">
            <StarVector />
          </div>
          <div className="border-[0.5px] border-[#BDD2B6] w-full h-0"></div>
        </div>
      </div>
    </div>
  );
}
