import React from "react";
import GradientButton from "./GradientButton";
import { MapPin } from "lucide-react";
import GradientLink from "./utils/GradientLink";

const SearchStationCard = ({stationData}) => {
    return (
        <div className=" w-full flex-box p-5 gap-5 bg-violet-200  bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-200  to-purple-200 rounded-2xl flex-col shadow-lg">
            <div className=" w-full flex-box justify-between">
                <div className="w-[70%] flex-box flex-col items-start gap-1">
                    <h1 className=" text-2xl font-bold">{stationData.station_name}</h1>
                    <div className=' flex-box gap-1 text-sm'>
                        <MapPin className=" size-5" />
                        <h1 className=" capitalize">{stationData.city.toLowerCase()}</h1>
                    </div>
                    <GradientLink url={stationData._id} text={"Book Slot"} state={stationData} />
                </div>
                <div className=" flex-box flex-col flex-wrap gap-2 text-md font-semibold justify-end">
                    {
                        stationData.availslottype.map(slotName=>{
                            return <span className=" px-2 py-1  text-center rounded-md border-2 border-violet-600 ">{slotName}</span>
                        })
                    }
                </div>
            </div>


            {/* TIME-SLOTS */}
            
            {/* <div className=" w-full flex-box flex-col gap-3">
                <h1 className=" self-start text-xl font-bold">Todays Slots</h1>
                <div className=" w-full flex-box  flex-wrap justify-evenly gap-2">
                    <h1 className=" p-2 rounded-lg text-sm font-semibold bg-violet-300">
                        12 Am - 03 Am
                    </h1>
                    <h1 className=" p-2 rounded-lg text-sm  font-semibold bg-red-200">
                        12 Am - 03 Am
                    </h1>
                    <h1 className=" p-2 rounded-lg text-sm  font-semibold bg-violet-300">
                        12 Am - 03 Am
                    </h1>
                    <h1 className=" p-2 rounded-lg text-sm  font-semibold bg-violet-300">
                        12 Am - 03 Am
                    </h1>
                    <h1 className=" p-2 rounded-lg text-sm  font-semibold bg-red-200">
                        12 Am - 03 Am
                    </h1>
                    <h1 className=" p-2 rounded-lg text-sm  font-semibold bg-violet-300">
                        12 Am - 03 Am
                    </h1>
                    <h1 className=" p-2 rounded-lg text-sm  font-semibold bg-violet-300">
                        12 Am - 03 Am
                    </h1>
                    <h1 className=" p-2 rounded-lg text-sm  font-semibold bg-red-200">
                        12 Am - 03 Am
                    </h1>
                </div>
            </div> */}
        </div>
    );
};

export default SearchStationCard;
