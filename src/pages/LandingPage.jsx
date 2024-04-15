import React from "react";
import { easeInOut, motion } from "framer-motion";
import blurBg from "/src/assets/blur.svg";
import wave from "/src/assets/wave.svg";
import spiralBg from "/src/assets/spiral.svg";
import blob from "/src/assets/blob.svg";
import evImg from "/src/assets/ev_img.jpg";
import grid from "/src/assets/gridbg.png";
import gridWhite from "/src/assets/grid-white.png";
import powerGirl from "/src/assets/power_girl.svg";
import AnimatedWordText from "../components/framer-motion/AnimatedWordText";
import Button from "../components/Button";
import GradientButton from "../components/GradientButton";
import { Car, TimerOff, Zap } from "lucide-react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();

    const container = {
        hidden: {
            opacity: 0,
            //   clipPath: "inset(100% 0% 0% 0%)"
        },
        visible: (i = 1) => ({
            opacity: 1,
            // transition:{staggerChildren:0.15,delayChildren:0.05 + i},
            //   clipPath: "inset(0% 0% 0% 0%)"
        }),
    };

    const onClick = (e) => {
        console.log("called");
        navigate("/stations");
    };
    return (
        <section className="w-full flex-box flex-col">
            <div className="w-full h-[100vh] flex-box bg-black relative overflow-hidden text-white">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="z-10 w-full h-full flex-box justify-start mt-[20%] flex-col gap-5"
                >
                    <AnimatedWordText
                        text={"Charge your EV"}
                        style={" text-4xl font-bold  text-white/85"}
                    />

                    <motion.h1
                        initial={{ y: 500 }}
                        animate={{ y: 0 }}
                        transition={{
                            duration: 1.5,
                            ease: "easeInOut",
                            type: "tween",
                        }}
                        className=" text-8xl font-bold  bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900 text-transparent bg-clip-text "
                    >
                        Hassle Free
                    </motion.h1>

                    <AnimatedWordText
                        text={"Secure Your Exclusive Slot Today!"}
                        style={"text-sm font-light"}
                    />
                    <Button
                        onClick={(e) => navigate("/stations")}
                        text={"Book a Slot"}
                    />
                </motion.div>

                <img
                    src={grid}
                    alt="background"
                    className=" w-full h-full object-cover absolute top-0 "
                    draggable={false}
                />
                <img
                    src={blurBg}
                    alt="background"
                    className=" w-full h-full object-cover absolute top-0 "
                    draggable={false}
                />
                <img
                    src={spiralBg}
                    alt="background"
                    className=" w-full h-full absolute top-[-20%] left-[45%] "
                    draggable={false}
                />
                <img
                    src={spiralBg}
                    alt="background"
                    className=" w-full h-full rotate-180   absolute top-[40%] right-[60%]  "
                    draggable={false}
                />
            </div>
            {/* HERO END */}

            {/* ABOUT START */}
            <div className=" w-full  flex-box flex-col bg-[#f8f1ff] relative">
                <div className="w-[50%] h-[40%] overflow-hidden absolute  z-10 top-[-30%] left-[50%] translate-x-[-50%] rounded-xl shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] ">
                    <img
                        src={evImg}
                        alt="background"
                        className=" w-full h-full object-cover   "
                        draggable={false}
                    />
                </div>

                <div className=" w-[75%] flex-box flex-col p-3 mt-[15rem] relative">
                    <div className=" w-3/4 z-20 self-start flex-box flex-col gap-2 items-start ">
                        <h1 className=" text-xl font-semibold text-violet-600  ">
                            About
                        </h1>
                        <h1 className=" relative text-2xl font-bold lg:small-title drop-shadow-lg">
                            Charge Your EV With No Queue:
                            <br />
                            Our Vision for a
                            <span className=" text-teal-400 relative">
                                {" "}
                                Greener
                                <img
                                    src={wave}
                                    alt="background"
                                    className=" w-full object-cover absolute top-[20%] right-0 select-none"
                                    draggable={false}
                                />
                            </span>{" "}
                            Future
                        </h1>
                        <p className=" mt-5 leading-[1.5em] font-medium">
                            Experience the ease of charging your electric
                            vehicle with our seamless solutions. From fast
                            charging options to user-friendly interfaces, our
                            systems are designed to simplify your charging
                            experience. Say goodbye to range anxiety and hello
                            to hassle-free journeys, making every charge
                            convenient and efficient.
                        </p>
                    </div>

                    <img
                        src={powerGirl}
                        alt="background"
                        className=" w-[40rem] z-10 right-0 top-[30%]   select-none"
                        draggable={false}
                    />
                </div>
                <img
                    src={gridWhite}
                    alt="background"
                    className=" w-[50rem] absolute left-0 top-0  select-none"
                    draggable={false}
                />
            </div>
            {/* ABOUT END*/}

            <div className=" w-full flex-box flex-col justify-start bg-[#f8f1ff] relative pb-[10rem] ">
                <div className=" z-10 w-3/4 h-full flex-box justify-evenly flex-col ">
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 200,
                            x: 30,
                            clipPath: "inset(0% 100% 0% 0%)",
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            x: 0,
                            clipPath: "inset(0% 0% 0% 0%)",
                        }}
                        transition={{
                            delay: 0.5,
                            duration: 1.5,
                            type: "spring",
                        }}
                        className=" w-3/4 z-20  flex-box flex-col gap-2  mt-[10rem] "
                    >
                        <h1 className=" relative small-title  ">
                            Why Choose{" "}
                            <span className=" text-violet-500">
                                SparkCharge
                            </span>
                            ?
                        </h1>
                    </motion.div>

                    <motion.div
                        transition={{ staggerChildren: 0.04, delayChildren: 1 }}
                        className=" w-[90%] grid grid-cols-3 gap-10 mt-[10rem]"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 200 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            transition={{
                                delay: 0.5,
                                duration: 1.5,
                                type: "spring",
                            }}
                            className="w-full h-[18rem] flex-box flex-col justify-center items-start p-[2em] relative  bg-violet-200  col-span-1 rounded-3xl shadow-lg bg-gradient-to-r from-indigo-300 to-purple-400"
                        >
                            <div className=" p-4 flex-box absolute top-[-5%] right-[-5%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-400 via-purple-500 to-purple-700 shadow-md shadow-yellow-400 drop-shadow-xl  hover:shadow-xl group hover:scale-90 duration-200 rounded-full">
                                <Zap
                                    className=" text-yellow-300 group-hover:text-white group-hover:animate-pulse group-hover:rotate-180 duration-300 "
                                    size={50}
                                />
                            </div>

                            <h1 className=" text-6xl font-bold text-white">
                                Prioritize Fast Charge
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 200 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            transition={{
                                delay: 0.5,
                                duration: 1.5,
                                type: "spring",
                            }}
                            className="w-full h-[18rem] flex-box flex-col justify-center  p-10 relative  bg-violet-200 col-span-1 rounded-3xl "
                        >
                            <div className=" p-4 flex-box absolute top-[-5%] right-[-5%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-400 via-purple-500 to-purple-700  shadow-md shadow-rose-300 drop-shadow-xl hover:shadow-xl group hover:scale-90 duration-200 rounded-full">
                                <TimerOff
                                    className="  text-white/80 group-hover:text-white group-hover:scale-[0.8] duration-300 "
                                    size={50}
                                />
                            </div>
                            <h1 className=" text-6xl font-bold text-violet-500">
                                No Waiting Time
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 200 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            transition={{
                                delay: 0.5,
                                duration: 1.5,
                                type: "spring",
                            }}
                            className="w-full h-[18rem] flex-box flex-col justify-center items-start p-10 relative  bg-violet-200 col-span-1 rounded-3xl shadow-lg bg-gradient-to-r from-indigo-300 to-purple-400"
                        >
                            <div className=" p-4 flex-box absolute top-[-5%] right-[-5%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-400 via-purple-500 to-purple-700 shadow-md shadow-cyan-300 drop-shadow-xl overflow-hidden  hover:shadow-xl group hover:scale-90 duration-200 rounded-full">
                                <Car
                                    className=" text-cyan-300 group-hover:text-white group-hover:animate-pulse group-hover:translate-x-[100px]  duration-300 "
                                    size={50}
                                />
                            </div>
                            <h1 className=" text-6xl font-bold text-white">
                                Pickup And Drop Service
                            </h1>
                        </motion.div>
                    </motion.div>

                    <div className=" w-full relative overflow-hidden bg-violet-600 shadow-xl text-3xl grid grid-cols-4 grid-rows-4 mt-[10rem] rounded-2xl">
                        <div className="z-10  bg-[#2c06794d] backdrop-blur-md  col-span-1 gap-5 row-span-1 w-full flex-box  flex-col p-[1.5em]">
                            <h1 className=" text-violet-100 font-semibold">
                                Pune
                            </h1>
                        </div>
                        <div className="z-10 shadow-xl bg-[#2c06794d] backdrop-blur-md rounded-b-2xl col-span-1 gap-5 row-span-1 w-full flex-box  flex-col p-[1.5em]">
                            <h1 className=" text-violet-100 font-semibold">
                                Mumbai
                            </h1>
                        </div>
                        <div className="z-10 shadow-xl bg-[#2c06794d] backdrop-blur-md rounded-b-2xl col-span-1 gap-5 row-span-2 w-full flex-box  flex-col p-[1.5em]">
                            <h1 className=" text-violet-100 font-semibold">
                                Satara
                            </h1>
                        </div>
                        <div className="z-10 shadow-xl bg-[#2c06794d] backdrop-blur-md rounded-b-2xl col-span-1 gap-5 row-span-1 w-full flex-box  flex-col p-[1.5em]">
                            <h1 className=" text-violet-100 font-semibold">
                                Delhi
                            </h1>
                        </div>
                        <div className="z-10 shadow-xl bg-[#2c06794d] backdrop-blur-md rounded-b-2xl col-span-1 gap-5 row-span-1 w-full flex-box  flex-col p-[1.5em]">
                            <h1 className=" text-violet-100 font-semibold">
                                Patna
                            </h1>
                        </div>
                        <div className="z-10 w-full flex-box text-center  col-span-4 row-span-2 ">
                            <h1 className=" font-bold text-7xl text-white">
                                CITIES WE EXIST
                            </h1>
                        </div>
                        <img
                            src={blob}
                            alt="background"
                            className=" w-full h-full object-cover absolute top-0 opacity-20  left-[0%]  "
                            draggable={false}
                        />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default LandingPage;






