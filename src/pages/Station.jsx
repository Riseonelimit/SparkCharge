import { CalendarDays, Clock4, Fuel, MapPin, Plug, PlugZap } from "lucide-react";
import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import SlotType from "../components/SlotType";
import Button from "../components/Button";
import { Link, useLocation, useParams } from "react-router-dom";
import { getMonth, getTimeSlot } from "../utils/helper";
import GradientLink from "../components/utils/GradientLink";
import { getSlotData } from "../api/GET";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import mapStyle from "../utils/mapStyle";

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

    const [slotType,setSlotType] = useState(null)
    const [time, setTime] = useState(null);

    const { state: stationData } = useLocation();
    
    const [slotData,setSlotData] = useState([]);

    // const { extend, isLoaded } = useJsApiLoader({
    //     googleMapsApiKey: "AIzaSyBQ0mIXZ7BR7KvXfMpS0hPx0LYnbhb6AKI",
    //     libraries: ["places"],
    //     mapIds: ["77e9b6d157be5f17"],
    // });

    // const onLoad = useCallback(function callback(map) {

    //     const bounds = new window.google.maps.LatLngBounds(location);
    //     bounds.extend(location);
    //     map.setZoom(15);
    //     // map.fitBounds(bounds);
    //     setMap(map);
    // }, []);

    useEffect(()=>{
        const fetchSlotData = async ()=>{
            const res = await getSlotData(stationData.station_name)
            if(res.success){
                setSlotData(res.slotData.data)
            }
        }
        fetchSlotData()
    },[])
    
    const handleSlotBtnClick = (e) => {
        setTime(e.target.value);
    };


    return (
        <section className=" w-full h-[100vh] relative flex-box flex-col justify-evenly  bg-[#f8f1ff]">
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
                <div className=" w-[20%] grid grid-cols-2 gap-3 font-semibold ">
                    {/* <GoogleMap
                        center={location}
                        zoom={12}
                        onLoad={onLoad}
                        options={{
                            styles: mapStyle,
                            disableDefaultUI: true,
                            maxZoom: 16,
                            minZoom: 7,
                        }}
                        mapContainerStyle={{
                            width: "100%",
                            height: "100%",
                        }}
                    ></GoogleMap> */}
                </div>
            </div>
            <div className=" w-3/5  flex-box justify-between gap-2 p-5 z-10 ">
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

                    {day.day == null && slotType == null ? null : (
                        <div className=" flex-box flex-col gap-3 items-start">
                            <h1 className=" small-title text-2xl inline-flex items-center justify-center gap-2">
                                <Clock4 />
                                Avaliable Time Slots
                            </h1>
                            <div className=" w-full flex-box justify-start flex-wrap gap-2">
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
                            state={{ stationData, day, time, slotType , amount: true ? "10000" : "6000" }}
                            text={"Proceed to Pay"}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
    };

export default React.memo(Station);
