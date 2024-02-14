import { useState } from "react";
import jeremy from "../assets/image-jeremy.png";
import { data } from "./data/carddata";

const Cards = () => {
  const [visible, setVisible] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState("daily");

  const toggleVisibility = (timeframe) => {
    setVisible(visible);
    // setVisible(!visible);

    setSelectedTimeframe(timeframe);
  };

  return (
    <div
      className="flex  justify-center font-rubik 
      max-sm:flex-col max-sm:items-center 
      sm:flex-col
      md:flex-col  md:my-[7.849rem]  
      lg:flex-row 
    ">
      <div
        className="bg-[#1c204b] rounded-[15px]  
        max-sm:w-[327px] max-sm:h-[203px]
        sm:w-[327px] sm:h-[203px] sm:m-auto
        md:w-[600px] md:h-[300px] md:m-auto  
        lg:w-[255px] lg:h-[518px] lg:m-0  
        ">
        <div
          className="bg-[#5747ea] rounded-[15px]  p-[32px]
          max-sm:h-[133px] max-sm:flex max-sm:items-center max-sm:gap-5
          sm:h-[133px] sm:flex sm:items-center sm:gap-5
          md:h-[200px] md:flex md:items-center md:gap-14 md:space-y-10  
          lg:h-[354px] lg:flex-col lg:items-start lg:gap-0     
  ">
          <div>
            <img
              className="border-[3px] rounded-full
              max-sm:w-[64px] max-sm:h-[64px]
              sm:w-[64px] sm:h-[64px]
              md:w-[78px] md:h-[78px]
 "
              src={jeremy}
              alt=""
            />
          </div>
          <div>
            <div className="text-[15px] font-[400] text-[#bbc0ff]">
              Report for
            </div>
            <div
              className="text-[40px] font-[300] text-[#FFF]
              max-sm:text-[24px] max-sm:flex max-sm:gap-2 
              sm:text-[24px] sm:flex sm:gap-2  
              md:text-[40px] md:flex md:gap-2 
              lg:flex-col lg:gap-0    
 ">
              <div>Jeremy</div>
              <div>Robson</div>
            </div>
          </div>
        </div>
        <div
          className="rounded-t-none rounded-b-xl 
          max-sm:py-6 max-sm:flex max-sm:justify-around max-sm:items-center
          sm:py-6 sm:flex sm:justify-around sm:items-center    
          md:p-[32px] md:flex md:justify-around md:items-center   
          lg:space-y-3 lg:flex-col lg:items-start  
">
          <div
            className={`text-[18px] font-[400] text-[#7078c9] cursor-pointer ${
              selectedTimeframe === "daily" && "text-[#FFF]"
            }`}
            onClick={() => toggleVisibility("daily")}>
            Daily
          </div>
          <div
            className={`text-[18px] font-[400] text-[#7078c9] cursor-pointer ${
              selectedTimeframe === "weekly" && "text-[#FFF]"
            }`}
            onClick={() => toggleVisibility("weekly")}>
            Weekly
          </div>
          <div
            className={`text-[18px] font-[400] text-[#7078c9] cursor-pointer ${
              selectedTimeframe === "monthly" && "text-[#FFF]"
            }`}
            onClick={() => toggleVisibility("monthly")}>
            Monthly
          </div>
        </div>
      </div>
      <div
        className="grid 
        max-sm:grid-cols-1 max-sm:gap-[3rem] max-sm:mt-[2rem]
        sm:grid-cols-1 sm:gap-[3rem] sm:mt-[2rem] sm:m-auto
        md:grid-cols-2 md:gap-[8rem] md:mt-20 md:m-auto   
        lg:grid-cols-3 lg:gap-[1.5rem] lg:mt-0 lg:m-0 lg:ml-[1.5rem]
">
        {data?.map((spendingtime) => (
          <div
            className={`cursor-pointer 
            max-sm:w-[327px] max-sm:h-[160px] max-sm:rounded-tl-[5px] max-sm:rounded-[15px]
            sm:w-[327px] sm:h-[160px] sm:rounded-tl-[5px] sm:rounded-[15px]
            md:w-[255px] md:h-[150px] md:rounded-[15px] ${
              spendingtime.title === "Work"
                ? "bg-[#ff8b64]"
                : spendingtime.title === "Play"
                ? "bg-[#55c2e6]"
                : spendingtime.title === "Study"
                ? "bg-[#ff5e7d]"
                : spendingtime.title === "Exercise"
                ? "bg-[#4bcf82]"
                : spendingtime.title === "Social"
                ? "bg-[#7335d2]"
                : spendingtime.title === "Self Care"
                ? "bg-[#f1c75b]"
                : ""
            }`}
            key={spendingtime?.id}>
            <div
              className=" max-sm:w-[327px]
            sm:w-[327px]
            md:w-[255px]">
              <img
                className="w-[74.65px] relative mr-4 float-end"
                src={spendingtime.profile}
                alt=""
              />
            </div>
            <div
              className="relative bg-[#1c204b] p-7  top-12 rounded-[15px] 
             max-sm:w-[327px] max-sm:h-[122px]
             sm:w-[327px] sm:h-[122px]
             md:w-full md:h-[199px] ">
              <div className="flex justify-between">
                <div className="text-[18px] text-[#FFF] font-[500]">
                  {spendingtime?.title}
                </div>
                <img
                  className="h-[5px] my-auto mr-[-4rem] "
                  src={spendingtime?.ellip}
                  alt=""
                />
              </div>
              <div>
                {/* { visible ? ( */}
                {
                  !visible && (
                    <div>
                      {selectedTimeframe === "daily" && (
                        <div
                          className="max-sm:flex  max-sm:items-center 
                        sm:flex sm:items-center md:flex-col md:items-start">
                          <div
                            className="font-[300] text-[#FFF] 
                          md:text-[56px] max-sm:text-[32px] sm:text-[32px]
                          ">
                            {spendingtime?.timeframes.daily.current}hrs
                          </div>
                          <div
                            className=" right-0 text-[15px] text-[#bbc0ff] font-[400]
                            max-sm:w-[125px] max-sm:absolute sm:absolute sm:right-6 md:static
                           ">
                            Last day - {spendingtime?.timeframes.daily.previous}
                            hrs
                          </div>
                        </div>
                      )}
                      {selectedTimeframe === "weekly" && (
                        <div
                          className="max-sm:flex  max-sm:items-center 
                        sm:flex sm:items-center md:flex-col md:items-start">
                          <div
                            className="font-[300] text-[#FFF] 
                          md:text-[56px] max-sm:text-[32px] sm:text-[32px]">
                            {spendingtime?.timeframes.weekly.current}hrs
                          </div>
                          <div
                            className=" right-6 text-[15px] text-[#bbc0ff] font-[400] 
                          max-sm:absolute sm:absolute sm:right-6 md:static">
                            Last Week -{" "}
                            {spendingtime?.timeframes.weekly.previous}
                            hrs
                          </div>
                        </div>
                      )}
                      {selectedTimeframe === "monthly" && (
                        <div
                          className="max-sm:flex max-sm:items-center 
                        sm:flex sm:items-center md:flex-col md:items-start">
                          <div
                            className=" font-[300] text-[#FFF] 
                            md:text-[56px] max-sm:text-[32px] sm:text-[32px]">
                            {spendingtime?.timeframes.monthly.current}hrs
                          </div>
                          <div
                            className="right-6 text-[15px] text-[#bbc0ff] font-[400]
                            max-sm:absolute sm:absolute sm:right-6 md:static">
                            Last month -{" "}
                            {spendingtime?.timeframes.monthly.previous}hrs
                          </div>
                        </div>
                      )}
                    </div>
                  )
                  // : (
                  //   <div className="text-[15px] text-[#bbc0ff] font-[400]">
                  //     Select a timeframe
                  //   </div>
                  // )
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
