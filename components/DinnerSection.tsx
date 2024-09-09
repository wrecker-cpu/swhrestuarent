import { DinnerData } from "@/data/data";
import { DinnerFirstVector, DinnerSecondVector, DinnerThirdVector } from "@/svgs/svg";
import Magnetic from "./Magnetic";


export default function DinnerSection() {
  return (
    <div className="max-w-[1200px] mx-auto mb-40">
        <div className="flex flex-col md:flex-row justify-between">
      <div className="relative mt-52 mb-72 md:mb-0 md:mt-0 w-full h-auto">
        <div className="absolute top-[50%] z-0 left-[50%] translate-x-[-50%] translate-y-[-50%]  w-[17rem]  esm:w-[19rem]  em:w-[20rem] ew:w-[23rem] vem:w-[24rem] sm:w-[25rem]  md:w-[20rem] lg:w-[21rem] xlg:w-[23rem] xl:w-[25rem]   h-auto"><DinnerFirstVector/></div>
        <div className="absolute top-[50%] z-10 left-[50%] translate-x-[-55%] translate-y-[-50%]  w-[17rem] esm:w-[19rem]  em:w-[21rem] ew:w-[24rem] vem:w-[25rem] sm:w-[26rem]  md:w-[21rem] lg:w-[22rem] xlg:w-[24rem] xl:w-[26rem]   h-auto"><DinnerSecondVector/></div>
        <div className="absolute top-[50%] z-50 left-[50%] translate-x-[-50%] translate-y-[-50%] w-[17rem]  esm:w-[19rem] em:w-[18rem] ew:w-[22rem] vem:w-[23rem] sm:w-[24rem]  md:w-[19rem] lg:w-[20rem] xlg:w-[22rem] xl:w-[24rem]   h-auto"><DinnerThirdVector/></div>
      </div>
      <div className="w-full max-w-[32rem] mx-auto emd:mx-0 emd:max-w-[78rem]">
        <p className="text-[#292929] w-[90%] mx-auto esm:mx-0 esm:w-full font-medium text-center mb-4 md:text-start text-[17.5px] lsm:text-[19px] esm:text-[20px] sm:text-[22px] md:text-[24px] font-montserrat">Come Check out our restaurant. Find info about our dinner, Pub and club bellow</p>
        <ul className="text-[#F3F3F3] font-abril md:block mb-4 flex flex-col items-center  mx-auto md:mx-0 w-[50%] font-normal">
            {
              DinnerData.links.map((item)=>{
                return(
                  <Magnetic key={item.id}>
                  <li className="cursor-pointer text-[62px] lsm:text-[64px] esm:text-[68px] em:text-[70px] ew:text-[72px] inline-block hover:text-[#6F8867]" >{item.title}</li>
                  </Magnetic>
                )
              })
            }
        </ul>
        <div className="flex flex-col mx-auto md:mx-0 gap-4 w-[95%] font-montserrat">
        <p className="text-[#292929] text-center md:text-start w-[90%] mx-auto esm:mx-0 esm:w-full text-[17.5px] lsm:text-[19px] esm:text-[20px] sm:text-[22px] md:text-[24px] mb-4 em:mb-0 lg:text-lg font-medium ">Enjoy a nice meal with views over the harbor in our all new dinner.</p>
        <p className="text-[#555555] text-center md:text-start  ">Close to the open kitchen, you'll find the dinner with its harbor views. It is a cozy and romantic space with terrazzo tables, mordern couches, and chairs the perfect spot for having dinner with loads of guests.</p>
        <p className="text-[#555555] text-center md:text-start  ">Dictum a libero at pretium. Vestibulum vitae tortor non nibh porttitor pulvinar vel eu mag fusce vestibulum porta doler sit amet.</p>
        </div>
      </div>
      </div>
    </div>
  )
}
