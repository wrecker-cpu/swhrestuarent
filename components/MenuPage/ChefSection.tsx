import { ChefData, MenuItemData } from "@/data/data";
import { LoopsSvg } from "@/svgs/svg";
import Image from "next/image";
import React from "react";
import award from "@/public/award.png";

export default function ChefSection() {
  return (
    <div className="max-w-[1200px] mx-auto mb-24  esm:mb-28 em:mb-32 ew:mb-36 vem:mb-48">
      <div className="mb-48">
        <ul className="flex flex-wrap vem:flex-row gap-4  justify-center ">
          {ChefData.title.map((item) => (
            <li
              key={item.id}
              className="w-[10rem] py-3 px-auto font-semibold hover:bg-[#6F8867] hover:text-[#F8EDE3] border border-[#F8EDE3] rounded-xl text-[#BDD2B6] font-montserrat h-full flex justify-center  cursor-pointer"
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full mb-12 esm:mb-14 em:mb-16  flex justify-center">
      <div className="w-[16rem] esm:w-[18rem] em:w-[20rem] relative h-auto">
      <LoopsSvg/>
          <div className="w-[11rem] esm:w-[13rem] em:w-[15rem] h-auto absolute top-[50%] left-[50%] translate-x-[-45%] translate-y-[-50%] z-0">
            <img className="w-full h-full object-cover" src="https://s3-alpha-sig.figma.com/img/9991/a336/e33935448270b19d64aa4c4dd63e71dd?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R4JBXGqax4X2RJwYGpykdLzehXbqd2JNHOfb2BVFh4-Uk2cNSH5UTgYaknTOPOL8qE4YsPcGD1Tf37uMTpCsSFtiMRcKnBU4kIDdMZIHMG~s6gOO1WEU6GFOObGzU80tFwcISbgadIllnHSSS~xaGKyTICoUiBaxG22bGt~NU88Y0chCw5Y~X3tEseYB6joUY5sB2QIezruZTmOKv64fYXn-oipAJXcVD1KyafcLQZz7ZKql3k1naVn2ARhwP0XAX5686eYabzfRHE7U5RwWNMEzd56TfVvBWZfN5kQh3V~Y01ZVMpTlUYqN1wIFqBnOEPLUSHylkQJxmVWYklSAPg__" alt="wth"></img>
          </div>

      </div>
      </div>
      <div className="flex flex-col md:flex-row mb-10 gap-4 items-center  justify-between">
          {
            ChefData.achievements.map((item)=>{
                return(
                    <div key={item.id} className="max-w-full em:max-w-[22rem] w-[70%] mx-auto em:w-full sticky top-0 py-12 px-2 flex flex-col gap-2 items-center z-10 bg-[#FFFFFF] shadow-[0_2px_15px_rgba(0,0,0,0.2)] rounded-xl">
            <div className="flex items-center gap-4">
            <Image src={award} alt="wth"/>
            <p className="text-[#EB952D] font-andada text-[24px] ">{item.date}</p>
            </div>
            <div><p className="text-[#707070] w-[90%] mx-auto text-center font-montserrat">{item.description}</p></div>
          </div>
                )
            })
          }
      </div>
      <div className=" w-[90%] sm:w-full sm:max-w-[39rem] flex flex-col justify-center items-center mx-auto">
        <p className="text-[3vw] lsm:text-[2.5vw] em:text-[14px] mb-4 text-center text-[#6C6C6C]">LksLorem ipsum dolor sit amet, consectetur adipiscing elit. Velit neque dui, enim vel neque ultrices fringilla ullamcorper viverra. Tempus, ut adipiscing fames libero, tempor, diam sed r adipiscing. Etiam eu aliquam nunc, ultricies lacus, adipiscing eleifend sapien. , ut ultricies urna. Sit consectetur orci euismod ultrices purus mi </p>
        <p className="uppercase text-[14px] font-bold mb-2 ">GORDAN RAMSEY</p>
        <div className="">
        <svg width="144" height="43" viewBox="0 0 144 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 22.5973C9.38681 19.0701 28.2842 11.0772 37.4336 7.38528C42.8579 5.19653 50.8946 1 57.2468 1C63.71 1 62.0989 7.17586 59.4065 10.7657C52.4848 19.9946 41.1138 26.8947 31.7057 33.2081C31.0431 33.6527 13.8372 42.4718 13.9584 42.1287C16.6737 34.4352 32.3488 25.9911 39.4995 23.3485C49.6166 19.6095 43.4974 32.4967 40.2507 35.7434C34.2131 41.781 42.8174 33.005 44.9457 31.424C51.6644 26.4329 47.7195 32.3525 50.392 34.0532C52.3671 35.3101 64.2773 27.4042 66.543 25.9777C70.0983 23.7392 73.8163 24.2875 77.905 24.2875C80.3247 24.2875 97.2104 22.5417 96.0279 23.7241C88.0888 31.6633 75.168 38.5925 63.9138 39.2178C60.9684 39.3814 50.5904 36.841 58.7492 36.0251C60.5262 35.8474 78.3745 32.7586 78.3745 37.058C78.3745 40.1785 65.1299 43.2384 67.2942 41.847C76.7113 35.7931 94.9357 27.9271 106.263 30.485C110.713 31.4898 112.708 35.53 116.311 37.8092C124.875 43.2277 136.009 33.3934 142.979 29.3581" stroke="black" stroke-linecap="round"/>
</svg>

        </div>
      </div>
    </div>
  );
}
