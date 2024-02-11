import { useState } from "react";
import jeremy from "../assets/image-jeremy.png";
import { data } from "./data/carddata";

const Cards = () => {
  const [visible, setVisible] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState("daily");

  const toggleVisibility = (timeframe) => {
    setVisible(!visible);
    setSelectedTimeframe(timeframe);
  };

  return (
    <div className="flex justify-center my-[20rem]">
      <div className="bg-[#1c204b] rounded-xl w-[255px] h-[518px]">
        <div className="bg-[#5747ea] rounded-xl h-[354px] p-[32px] space-y-10">
          <div>
            <img className="w-[78px] h-[78px]" src={jeremy} alt="" />
          </div>
          <div>
            <div className="text-[15px] font-[400] text-[#bbc0ff]">
              Report for
            </div>
            <div className="text-[40px] font-[300] text-[#FFF]">
              <div>Jeremy</div>
              <div>Robson</div>
            </div>
          </div>
        </div>
        <div className="rounded-t-none rounded-b-xl p-[32px] space-y-3">
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
      <div className="grid grid-cols-3 gap-[1.5rem] ml-[1.5rem]">
        {data?.map((spendingtime) => (
          <div
            className={`h-[150px] w-[255px] rounded-xl ${
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
            <div className="w-[255px]">
              {/* Make sure 'spendingtime.profile' exists in your data */}
              <img
                className="w-[74.65px] relative mr-4 float-end"
                src={spendingtime.profile}
                alt=""
              />
            </div>
            <div className="relative bg-[#1c204b] p-7 h-[199px] top-12 rounded-xl">
              <div className="flex justify-between">
                <div className="text-[18px] text-[#FFF] font-[500]">
                  {spendingtime?.title}
                </div>
                <img
                  className="h-[5px] my-auto"
                  src={spendingtime?.ellip}
                  alt=""
                />
              </div>
              <div>
                {visible ? (
                  <div>
                    {selectedTimeframe === "daily" && (
                      <div>
                        <div className="text-[56px] font-[300] text-[#FFF]">
                          {spendingtime?.timeframes.daily.current}hrs
                        </div>
                        <div className="text-[15px] text-[#bbc0ff] font-[400]">
                          Last day - {spendingtime?.timeframes.daily.previous}
                          hrs
                        </div>
                      </div>
                    )}
                    {selectedTimeframe === "weekly" && (
                      <div>
                        <div className="text-[56px] font-[300] text-[#FFF]">
                          {spendingtime?.timeframes.weekly.current}hrs
                        </div>
                        <div className="text-[15px] text-[#bbc0ff] font-[400]">
                          Last Week - {spendingtime?.timeframes.weekly.previous}
                          hrs
                        </div>
                      </div>
                    )}
                    {selectedTimeframe === "monthly" && (
                      <div>
                        <div className="text-[56px] font-[300] text-[#FFF]">
                          {spendingtime?.timeframes.monthly.current}hrs
                        </div>
                        <div className="text-[15px] text-[#bbc0ff] font-[400]">
                          Last month -{" "}
                          {spendingtime?.timeframes.monthly.previous}hrs
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-[15px] text-[#bbc0ff] font-[400]">
                    Select a timeframe
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
