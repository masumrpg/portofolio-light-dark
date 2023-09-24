import { motion } from "framer-motion";
import React from "react";

const TransitionEffect = () => {
  return (
    <>
      {/* <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#02B1B3] dark:bg-[#1e5e5f]"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#f7453e] dark:bg-[#5e211f]"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#3bdd3e] dark:bg-[#236824]"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      /> */}

      <motion.div
        className="fixed top-0 left-0 w-screen h-screen z-50 bg-black origin-bottom dark:bg-white"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="fixed top-0 left-0 w-screen h-screen z-50 bg-black origin-top dark:bg-white"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />


      <motion.div
        className="fixed top-0 left-0 w-screen h-screen z-40 bg-white origin-bottom dark:bg-black"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="fixed top-0 left-0 w-screen h-screen z-40 bg-white origin-top dark:bg-black"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default TransitionEffect;
