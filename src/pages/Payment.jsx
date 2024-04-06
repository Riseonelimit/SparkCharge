import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { makeBooking, verifyPayment } from "../api/POST";
import GradientButton from "../components/GradientButton";
import GradientLink from "../components/utils/GradientLink";
import ProtectedRoute from "../components/utils/ProtectedRoute";
import { Data } from "../context/DataContext";
import { getMonth, getTimeSlot } from "../utils/helper";

import electric from "/src/assets/electric.png";

const Payment = () => {
    const [paymentStatus, setPaymentStatus] = useState("idle");
    const { state: data } = useLocation();
    const { stationData, day, time, slotType, amount } = data;

    const user = useContext(Data).USER_DATA;
    const handlePayment = async (e) => {
        setPaymentStatus("pending");
        const bookingData = {
            stationName: stationData.station_name,
            slotType: slotType.slotType,
            bookingDate: day.dayStamp,
            bookingTime: time,
            registrationNumber: "MH12KJ4562",
            pickupndrop: true,
        };
        const res = await makeBooking(bookingData);
        if (!res.success) {
            return setPaymentStatus("error");
        }
        var options = {
            key: import.meta.env.VITE_RAZOR_KEY,
            currency: "INR",
            name: "SparkCharge", //your business name
            description: "Booking Payment",
            image: electric,
            order_id: res.orderID, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            handler: async function (response) {
                setPaymentStatus("pending");
                // response.razorpay_payment_id
                // response.razorpay_order_id
                // response.razorpay_signature
                const result = await verifyPayment(response);
                if (result.success) {
                    setPaymentStatus("success");
                } else {
                    setPaymentStatus("error");
                }
            },
            prefill: {
                //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
                name: user.name, //your customer's name
                email: user.email,
                contact: user.phone, //Provide the customer's phone number for better conversion rates
            },
            notes: {
                address: "SparkCharge Pune",
            },
            theme: {
                color: "#8b5cf6",
            },
        };
        var rzp1 = new Razorpay(options);

        rzp1.open();
        e.preventDefault();
        setPaymentStatus("error");
    };
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
                            {Math.round(amount / 100)} Rs
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
                                {/* Booking ID -{" "}
                                <Link className=" font-semibold">
                                    76a7def7a76eaff8
                                </Link> */}
                            </p>
                            <GradientLink
                                url={"/profile/booking"}
                                replace={true}
                                text={"Go to Booking"}
                            />
                        </>
                    ) : paymentStatus == "error" ? (
                        <>
                            <div className=" border-2 bg-red-400 text-white text-center shadow-xl rounded-md p-3">
                                <h1 className=" text-xl font-semibold">
                                    Payment Failed
                                </h1>
                            </div>
                        </>
                    ) : null}
                </div>

                <GradientButton
                    text={"Make Payment"}
                    onClickHandler={handlePayment}
                    className={`disabled:bg-slate-500 text-white ${
                        paymentStatus == "success" || paymentStatus == "error"
                            ? " hidden"
                            : " inline"
                    }`}
                    disabled={paymentStatus == "pending" ? true : false}
                />
            </section>
        </ProtectedRoute>
    );
};

export default Payment;
