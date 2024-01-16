import React, { useState } from "react";
import ProtectedRoute from "../components/utils/ProtectedRoute";
import { Link, useLocation } from "react-router-dom";
import GradientButton from "../components/GradientButton";
import { getMonth, getTimeSlot } from "../utils/helper";
import { makeBooking } from "../api/POST";
import GradientLink from "../components/utils/GradientLink";

const Payment = () => {
    const [paymentStatus, setPaymentStatus] = useState("idle");
    const { state: data } = useLocation();
    const {stationData,day,time,slotType} = data;

    const handlePayment = async ()=>{
        setPaymentStatus("pending")
        const bookingData = {
            stationName:stationData.station_name,
            slotType:slotType.slotType,
            bookingDate:day.dayStamp,
            bookingTime:time,
            registrationNumber:"MH12KJ4562",
        }
        const res = await makeBooking(bookingData)

        if(res.success){
            return setPaymentStatus("success")
        }

        setPaymentStatus("error")
    }
    return (
        <ProtectedRoute>
            <section className=" w-full h-[100vh] relative flex-box flex-col justify-evenly  bg-[#f8f1ff]">
            <div className=" p-7  justify-between  rounded-xl bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-purple-300 to-violet-200 flex-box gap-10 shadow-md  shadow-violet-300">
                    <div className=" h-full flex-box flex-col gap-3  items-start ">
                        <h1 className=" text-5xl font-bold  bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-600 via-violet-600 to-sky-600 shadow-inner  text-transparent bg-clip-text">
                            {stationData.station_name}
                        </h1>
                        <h1 className=" text-3xl font-semibold">
                            {day.day + " " + getMonth(day.month)}
                        </h1>
                        <h1 className=" text-3xl font-semibold">
                            {slotType.slotType}
                        </h1>
                        <h1 className=" text-2xl font-semibold">
                            {getTimeSlot(time)}
                        </h1>
                    </div>
                    {/* <hr className=' outline-none h-full w-[2px] border-none rounded-full bg-violet-800'/> */}
                    <div className=" p-10 h-full flex-box rounded-2xl bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-violet-400 via-violet-600 to-indigo-400 shadow-lg shadow-violet-500">
                        <h1 className=" small-title text-7xl text-white">
                            300 Rs
                        </h1>
                    </div>
                </div>

                <div className="flex-box flex-col gap-5">
                    {paymentStatus == "pending" ? (
                        <div className=" border-2 border-green-400 rounded-md p-3 animate-pulse">
                            <h1 className=" text-xl font-semibold">
                                Payment Processing
                            </h1>
                        </div>
                    ) : paymentStatus == "success" ? (
                        <>
                            <div className=" border-2 bg-green-400 text-white text-center shadow-xl rounded-md p-3">
                                <h1 className=" text-xl font-semibold">
                                    Payment Success
                                </h1>

                            </div>
                            <p>
                                Booking ID -{" "}
                                <Link className=" font-semibold">
                                    76a7def7a76eaff8
                                </Link>
                            </p>
                            <GradientLink url={'/'} replace={true} text={"Redirect to Home"}/>
                        </>
                    ) :  paymentStatus == "error" ? (
                        <>
                            <div className=" border-2 bg-red-400 text-white text-center shadow-xl rounded-md p-3">
                                <h1 className=" text-xl font-semibold">
                                    Payment Failed
                                </h1>
                            </div>
                        </>
                    ) : null
                    }
                </div>

                <GradientButton
                    text={"Make Payment"}
                    onClickHandler={handlePayment}
                    className={`disabled:bg-slate-500 text-white ${ paymentStatus == "success" || paymentStatus == "error" ? " hidden" : " inline"}`}
                    disabled={paymentStatus == "pending" ? true : false}
                />
            </section>
        </ProtectedRoute>
    );
};

export default Payment;
