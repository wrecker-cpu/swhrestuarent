import { MenuItemData } from "@/data/data";
import React from "react";
import Magnetic from "../Magnetic";
import Image from "next/image";

export default function MenuItem() {
  return (
    <div className="max-w-[1200px] mx-auto mb-24  esm:mb-28 em:mb-32 ew:mb-36 vem:mb-40">
      <div className="flex flex-col px-10 md:flex-row items-center md:items-start mb-40 justify-between">
        <div className="max-w-full md:max-w-[30rem] emd:max-w-[35rem] mb-10 md:mb-0 w-full">
          <div>
            <p className="text-[32px] md:text-[3.5vw] emd:text-[32px] text-center md:text-left md:whitespace-nowrap font-montserrat font-semibold mb-4 text-[#292929]">
              Meet our delicious dishes.
            </p>
          </div>
          <div>
            <p className="text-[18px] md:text-[1.75vw] emd:text-[18px] md:text-left text-center w-[80%] md:w-full mx-auto  font-montserrat text-[#555555]">
              Lorem ipsum dolor sit amet consectetur. A ornare lacus in ac
              tellus dignissim diam aliquet velit. Est eu augue eu vel
              vestibulum arcu enim dignissim.
            </p>
          </div>
        </div>
        <div>
          <ul className="flex max-w-full w-full emd:max-w-[33rem] flex-wrap  gap-4 ml-0 md:ml-6 emd:ml-12 justify-center md:justify-end ">
            {MenuItemData.links.map((item) => (
             
              <li
                key={item.id}
                className="w-[10rem] py-3 px-12 font-semibold hover:bg-[#6F8867] hover:text-[#F8EDE3] border border-[#F8EDE3] rounded-2xl text-[#BDD2B6] font-montserrat h-full flex justify-center  cursor-pointer"
              >
                {item.title}
              </li>

            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col px-3 md:flex-row items-center justify-between ">
        {
            MenuItemData.items.map((item)=>{
                return(
                  <Magnetic key={item.id}>
                    <div  className="group sticky top-10 z-[1] flex md:block gap-2 justify-between items-center ">
          <div className="relative w-[288px] h-[421px] md:w-[248px] md:h-[360px] emd:w-[268px]  emd:h-[380px] lg:w-[288px] lg:h-[401px]  mb-20 transition-transform  duration-300 ease-in-out hover:scale-100 md:group-hover:scale-125 ">
            <img
              className="w-full h-full rounded-full group-hover:backdrop-blur-xl object-cover"
              src={item.img}
              alt="wth"
            ></img>
            <div className="max-w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  md:static md:top-0 md:left-0 md:translate-x-[0%] md:translate-y-[0%] transition-opacity duration-300  md:mb-0 ease-in-out group-hover:opacity-100 opacity-0">
            <p className="text-white md:text-[#1E1E1E] text-[21px] md:text-[19px] text-center font-montserrat font-medium">
              {item.name}
            </p>
            <p className="text-white md:text-[#1E1E1E] text-[16px] md:text-[12px] font-montserrat text-center ">{item.quantity}</p>
            <div className="w-full flex justify-center"><button className="w-[6rem]  bg-[#1E1E1E] text-white py-1 rounded-lg">Order</button></div>
          </div>
          </div>
          
        </div>
        </Magnetic>
                )
            })
        }
        
      </div>
    </div>
  );
}
