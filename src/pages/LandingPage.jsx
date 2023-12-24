import React from "react";
import { motion } from "framer-motion";
import blurBg from "/src/assets/blur.svg";
import confetti from "/src/assets/confetti.png";
import spiralBg from "/src/assets/spiral.svg";
import evImg from "/src/assets/ev_img.jpg";
import grid from "/src/assets/gridbg.png";
import AnimatedWordText from "../components/framer-motion/AnimatedWordText";
import Button from "../components/Button";

const LandingPage = () => {
    return (
        <section className="w-full flex-box flex-col">
            <div className="w-full h-[100vh] flex-box bg-black relative overflow-hidden text-white">
                
                <motion.div transition={{staggerChildren:0.12}} className="z-10 w-full h-full flex-box justify-start mt-[25rem] flex-col gap-5">

                    <h1 className=" text-4xl font-bold  text-white/85">
                        <AnimatedWordText text={"Charge your EV"} />
                    </h1>
                    
                    <motion.h1 initial={{y:2000}} animate={{y:0}} transition={{duration:3.5,ease:"easeInOut",type:"tween"}} className=" text-8xl font-bold bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900 text-transparent bg-clip-text ">
                    Hassle Free
                    </motion.h1>
                    <p className="text-sm font-light">
                        <AnimatedWordText text={"Secure Your Exclusive Slot Today!"} />
                    </p>
                    <Button text={"Book a Slot"}/>
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
            <div className=" w-full h-[100vh] flex-box flex-col bg-[#f8f1ff] relative">
                <img
                    src={evImg}
                    alt="background"
                    className="w-[70%] h-[40rem] object-cover shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]  absolute z-10 top-[-45%] left-[50%] translate-x-[-50%] rounded-xl " 
                    draggable={false}
                />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, magnam.</p>
                <h1 className=" text-5xl font-bold text-violet-500">Sunday Update<span className=" text-cyan-600"></span></h1>
            </div>
        </section>
    );
};

export default LandingPage;
