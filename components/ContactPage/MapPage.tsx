"use client"

import { CheckBoxSvg } from '@/svgs/svg'
import React, { useState } from 'react'
import Magnetic from '../Magnetic';


interface SubjectItem {
  id: string; // Adjust this type based on your actual id type
  title: string;
}

const ContactPageData = {
  subject: [
        {id:"1",title:"Dinner"},
        {id:"2",title:"Lunch "},
        {id:"3",title:"Online Order"},
        {id:"4",title:"Takeaway"},
    // Add more options as needed
  ],
};

export default function MapPage() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  return (
<div className="max-w-[1200px] px-10 mx-auto mb-24 esm:mb-28 em:mb-32 ew:mb-36 vem:mb-28">
  <div className="flex flex-col items-center md:flex-row justify-between gap-10 md:items-start">
    <div>
      <div className='md:hidden block mb-10'><p className='text-4xl font-abril text-[#6F8867] text-center'>Our Location</p></div>
    <div className=" w-[270px] h-[270px] lsm:w-[280px] lsm:h-[280px] esm:w-[300px] esm:h-[300px] em:w-[400px] em:h-[400px]  md:hover:scale-100 md:w-[100px] md:h-[400px] lg:w-[400px] lg:h-[400px] hover:w-[400px] hover:h-[400px] transition-all duration-500 ease-in-out rounded-2xl border-2 border-[#BDD2B6] overflow-hidden">
      <iframe
        className="rounded-2xl "
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.496898237713!2d72.49884367537537!3d23.07889921422373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9d61b056cb41%3A0x1e36380ab233f9cf!2sJamstacky%20-%20JAMstack%20and%20Headless%20Web%20Development%20Agency!5e0!3m2!1sen!2sin!4v1725346911168!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </div>
    <div className="max-w-auto lg:max-w-[40rem] w-full">
      <form>
        <div className="flex flex-col md:flex-row w-[90%] mx-auto md:w-full gap-12 mb-8">
          <div className="flex-1">
            <label className="text-[#6F8867] text-[10px] font-montserrat block mb-1">
              First Name
            </label>
            <input
              className="w-full text-xs text-[#6F8867] pr-4 border-b border-b-[#BDD2B6] focus:outline-none"
              type="text"
            />
          </div>
          <div className="flex-1">
            <label className="text-[#6F8867] text-[10px] font-montserrat block mb-1">
              Last Name
            </label>
            <input
              className="w-full text-xs text-[#6F8867] pr-4 border-b border-b-[#BDD2B6] focus:outline-none"
              type="text"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-[90%] mx-auto  md:w-full gap-12 mb-8">
          <div className="flex-1">
            <label className="text-[#6F8867] text-[10px] font-montserrat block mb-1">
              Your Email
            </label>
            <input
              className="w-full text-xs text-[#667d5e] pr-4 border-b border-b-[#BDD2B6] focus:outline-none"
              type="email"
            />
          </div>
          <div className="flex-1">
            <label className="text-[#6F8867] text-[10px] font-montserrat block mb-1">
              Phone Number
            </label>
            <input
              className="w-full text-xs text-[#6F8867] pr-4 border-b border-b-[#BDD2B6] focus:outline-none"
              type="text"
            />
          </div>
        </div>

        <div className="mb-10 w-[90%] mx-auto  md:w-full">
          <p className="text-[#6F8867] font-semibold mb-4">Select Subject ?</p>

          <ul className="flex flex-col em:flex-row justify-between gap-10 em:border-none em:gap-2 max-w-[20rem]">
            {ContactPageData.subject.map((item: SubjectItem) => (
              <li
                key={item.id}
                className="text-[#6F8867] em:border-none border em:py-0 py-3 pl-3 em:pl-0 border-[#6F8867] inline-block em:flex items-center gap-1 text-[12px] font-normal"
              >
                <input
                  type="radio"
                  id={item.id}
                  name="subject"
                  value={item.title}
                  checked={selectedItem === item.id}
                  onChange={() => setSelectedItem(item.id)}
                  className="hidden"
                />
                <label
                  htmlFor={item.id}
                  className="flex items-center gap-1 cursor-pointer"
                >
                  {selectedItem === item.id && <CheckBoxSvg />}{" "}
                  
                  {item.title}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-10 w-[90%] mx-auto  md:w-full">
          <label className="text-[#6F8867] text-[14px] font-medium  block">
            Message
          </label>
          <input
            className="w-full text-xs pt-2 pb-3 placeholder-[#BDD2B6] text-[#667d5e] pr-4 border-b border-b-[#BDD2B6] focus:outline-none"
            type="text"
            placeholder="Write your message"
          />
        </div>
        <div className=" w-[90%] mx-auto  md:w-full flex justify-center em:justify-end">
          <Magnetic>
          <button
            className="w-full max-w-[10rem] text-[24px] font-normal font-montserrat py-2  px-4 rounded-xl border border-[#F8EDE3] bg-[#6F8867] text-white hover:bg-[#5f7658] transition"
            type="submit"
          >
            Submit
          </button>
          </Magnetic>
        </div>
      </form>
    </div>
  </div>
</div>

  )
}
