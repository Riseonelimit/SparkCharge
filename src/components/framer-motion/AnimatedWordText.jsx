import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import StaggerChildrenWrapper from "./StaggerChildrenWrapper";

const AnimatedWordText = ({ text, style ,children}) => {
    const words = text.split(" ");

    const container = {
        hidden: {
            opacity: 0,
            clipPath: "inset(100% 0% 0% 0%)",
        },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.13, delayChildren: 0.02 + i },
            clipPath: "inset(0% 0% 0% 0%)",
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: -20,
            x: 20,
            clipPath: "inset(0% 100% 0% 0%)",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    // MAKE A COMPONENT FOR STAGGER CHILDREN WRAPPER
    return (
        <motion.h1
            className={`overflow-hidden flex gap-[0.3em]  ${style}`}
            variants={container}
            initial="hidden"
            whileInView="visible"
        >
            {words.map((word, idx) => {
                return (
                    <motion.span key={idx}  variants={child}>
                        {word}
                    </motion.span>
                );
            })}
            {children}
        </motion.h1>
    );
};

export default AnimatedWordText;
