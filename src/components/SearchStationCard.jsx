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
                    <GradientLink url={stationData._id} text={"Book Slot"} />
                </div>
                <div className=" w-[30%]  flex-box flex-wrap justify-end gap-2">
                    <h1 className=" p-2 rounded-xl text-sm font-bold bg-violet-100">
                        TypeA
                    </h1>
                    <h1 className=" p-2 rounded-xl text-sm font-bold bg-violet-100">
                        TypeA
                    </h1>
                    <h1 className=" p-2 rounded-xl text-sm font-bold bg-violet-100">
                        TypeA
                    </h1>
                    <h1 className=" p-2 rounded-xl text-sm font-bold bg-violet-100">
                        TypeA
                    </h1>
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
