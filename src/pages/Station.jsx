import { CalendarDays, Clock4, Fuel, Car, MapPin, Plug } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { getSlotData, getUserVehicle } from "../api/GET";
import Button from "../components/Button";
import SlotType from "../components/SlotType";
import GradientLink from "../components/utils/GradientLink";
import { getMonth, getTimeSlot } from "../utils/helper";

import grid from "../assets/test.svg";

const Station = () => {
    const day1 = useRef(new Date());
    const day2 = useRef(new Date());
    day2.current.setDate(day1.current.getDate() + 1);
    const day3 = useRef(new Date());
    day3.current.setDate(day2.current.getDate() + 1);

    const [day, setDay] = useState({
        id: null,
        dayStamp: "",
        day: "",
        month: "",
    });

    const [slotType, setSlotType] = useState(null);
    const [selectedVehicle, setSelectedVehicle] = useState([]);
    const [time, setTime] = useState(null);

    const { state: stationData } = useLocation();
    const [isPickUp, setIsPickUp] = useState(false);

    const [vehicle, setVehicle] = useState([]);
    const [slotData, setSlotData] = useState([]);

    useEffect(() => {
        const fetchSlotData = async () => {
            const res = await getSlotData(stationData.station_name);
            const vehicleResponse = await getUserVehicle();
            if (res.success && vehicleResponse.success) {
                setSlotData(res.slotData.data);
                setVehicle(vehicleResponse.vehicles);
            }
        };
        fetchSlotData();
    }, []);

    const handleSlotBtnClick = (e) => {
        setTime(e.target.value);
    };

    return (
        <section className=" w-full h-[100vh] relative flex-box flex-col justify-evenly overflow-hidden  bg-[#f8f1ff]">
            <div className=" w-3/5 flex-box justify-between gap-2 p-5 mt-[2em] z-10">
                <div className="flex-box flex-col items-start">
                    <div className=" inline-flex justify-center items-center gap-3">
                        <Fuel className=" size-8" />
                        <h1 className=" small-title text-4xl">
                            {stationData?.station_name}
                        </h1>
                    </div>
                    <div className=" flex-box gap-2">
                        <MapPin />
                        <h1 className=" text-lg font-[400] ml-3 capitalize">
                            {stationData?.city.toLowerCase()}
                        </h1>
                    </div>
                </div>
                <div className=" w-[20%] grid grid-cols-2 gap-3 font-semibold "></div>
            </div>
            <div className=" w-3/5  flex-box justify-between gap-2 p-10 z-10 backdrop-blur-md bg-white/40 rounded-2xl ">
                <div className=" w-[70%]  flex-box flex-col gap-8 items-start">
                    <div className=" flex-box flex-col gap-3 items-start">
                        <h1 className=" small-title text-2xl inline-flex items-center justify-center gap-2">
                            <CalendarDays /> Select Day:
                        </h1>
                        <div className=" inline-flex">
                            <button
                                value={day1.current.toLocaleDateString(
                                    "zh-Hans-CN"
                                )}
                                onClick={(e) => {
                                    setDay({
                                        id: 1,
                                        dayStamp:
                                            day1.current.toLocaleDateString(
                                                "zh-Hans-CN"
                                            ),
                                        day: day1.current.getDate(),
                                        month: day1.current.getMonth(),
                                    });
                                }}
                                className={` border-2  border-r-0 border-violet-500 px-3 py-2 rounded-s-lg  text-md font-bold hover:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-400 via-violet-600 to-sky-600 hover:text-white  ${
                                    day.id === 1
                                        ? " bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-400 via-violet-600 to-sky-600 text-white "
                                        : null
                                }`}
                            >
                                {day1.current.getDate() +
                                    " " +
                                    getMonth(day1.current.getMonth())}
                            </button>

                            <button
                                value={day2.current.toLocaleDateString(
                                    "zh-Hans-CN"
                                )}
                                onClick={(e) =>
                                    setDay({
                                        id: 2,
                                        dayStamp:
                                            day2.current.toLocaleDateString(
                                                "zh-Hans-CN"
                                            ),
                                        day: day2.current.getDate(),
                                        month: day2.current.getMonth(),
                                    })
                                }
                                className={`border-2 border-violet-500 px-3 py-2  text-md font-bold hover:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-400 via-violet-600 to-sky-600  hover:text-white  ${
                                    day.id === 2
                                        ? " bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-400 via-violet-600 to-sky-600 text-white"
                                        : null
                                }`}
                            >
                                {day2.current.getDate() +
                                    " " +
                                    getMonth(day2.current.getMonth())}
                            </button>

                            <button
                                value={day3.current.toLocaleDateString(
                                    "zh-Hans-CN"
                                )}
                                onClick={(e) =>
                                    setDay({
                                        id: 3,
                                        dayStamp:
                                            day3.current.toLocaleDateString(
                                                "zh-Hans-CN"
                                            ),
                                        day: day3.current.getDate(),
                                        month: day3.current.getMonth(),
                                    })
                                }
                                className={` border-2 border-l-0 border-violet-500 px-3 py-2 rounded-e-lg  text-md font-bold hover:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-400 via-violet-600 to-sky-600 hover:text-white  ${
                                    day.id === 3
                                        ? " bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-400 via-violet-600 to-sky-600 text-white"
                                        : null
                                }`}
                            >
                                {day3.current.getDate() +
                                    " " +
                                    getMonth(day3.current.getMonth())}
                            </button>
                        </div>
                    </div>
                    <div className=" flex-box flex-col gap-3 items-start">
                        <h1 className=" small-title text-2xl inline-flex items-center justify-center gap-2">
                            <Plug size={30} />
                            Select Slot Type
                        </h1>
                        <div className=" w-full flex-box justify-start flex-wrap gap-2">
                            {slotData && slotData.length != 0
                                ? slotData.map((slotData) => {
                                      return (
                                          <Button
                                              value={slotData._id}
                                              onClick={(e) => {
                                                  setSlotType({
                                                      slotID: e.target.value,
                                                      slotType: slotData.type,
                                                  });
                                              }}
                                              text={slotData.type}
                                              className={
                                                  slotType?.slotID ==
                                                  slotData._id
                                                      ? " bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-400 via-violet-600 to-sky-600 text-white"
                                                      : ""
                                              }
                                          />
                                      );
                                  })
                                : null}
                        </div>
                    </div>

                    <div className=" flex-box flex-col gap-3 items-start">
                        <h1 className=" small-title text-2xl inline-flex items-center justify-center gap-2">
                            <Car size={30} />
                            Select Vehicle
                        </h1>
                        <select
                            onChange={(e) => setSelectedVehicle(e.target.value)}
                            className="w-full p-2 rounded-lg border-2 border-violet-700 bg-transparent "
                        >
                            {vehicle && vehicle.length > 0
                                ? vehicle.map((vehicle) => (
                                      <option
                                          className=" bg-violet-200"
                                          value={vehicle.registrationNumber}
                                      >
                                          {vehicle.registrationNumber}
                                      </option>
                                  ))
                                : null}
                        </select>
                    </div>

                    <div className=" flex-box  gap-3 ">
                        <h1 className="small-title text-lg inline-flex items-center justify-center gap-2">
                            PickUp And Drop? (Additional 100rs)
                        </h1>

                        <input
                            type="checkbox"
                            onChange={(e) =>
                                setIsPickUp(e.target.checked ? true : false)
                            }
                            className=" size-6 accent-violet-500 bg-violet-300"
                        />
                    </div>
                    {day.day == null && slotType == null ? null : (
                        <div className=" flex-box flex-col gap-3 items-start">
                            <h1 className=" small-title text-2xl inline-flex items-center justify-center gap-2">
                                <Clock4 />
                                Available Time Slots
                            </h1>
                            {/* TODO: Change to Grid Layout */}
                            <div className=" w-full  flex-box justify-start flex-wrap gap-2">
                                {slotData
                                    .filter((e) => e._id == slotType?.slotID)
                                    .map((e) => {
                                        return e.availableSlot[
                                            parseInt(day.day)
                                        ]?.map((e2) => {
                                            return (
                                                <SlotType
                                                    key={e2}
                                                    value={e2}
                                                    onClick={handleSlotBtnClick}
                                                    text={getTimeSlot(e2)}
                                                    time={time}
                                                />
                                            );
                                        });
                                    })}
                            </div>
                        </div>
                    )}

                    <div className=" inline-flex gap-3">
                        <GradientLink
                            url={`/payment/${stationData._id}`}
                            state={{
                                stationData,
                                day,
                                time,
                                slotType,
                                selectedVehicle,
                                isPickUp,
                                amount: isPickUp ? "30000" : "20000",
                            }}
                            text={"Proceed to Pay"}
                        />
                    </div>
                </div>
            </div>

            <img
                src={grid}
                alt="background"
                className=" w-full h-full object-cover absolute top-[15%] "
                draggable={false}
            />
        </section>
    );
};

export default React.memo(Station);
