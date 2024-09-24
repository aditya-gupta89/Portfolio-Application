"use client";
import { summary } from "@/constants";
import { motion } from "framer-motion";
import summaryPic from "@/assets/images/memoji-computer.png";
import Image from "next/image";
const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const HomeSection = () => {
  return (
    <section id="home" className="container mt-16">
      <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap gap-8">
          <div className="w-full order-2 lg:order-1 lg:w-auto">
            <div className="flex  flex-col items-center lg:items-start">
              <div className="flex  flex-col">
                <motion.h1
                  variants={container(0)}
                  initial="hidden"
                  animate="visible"
                  className="pb-4 lg:pb-8 text-3xl text-center font-thin tracking-tight lg:mt-16 lg:text-6xl"
                >
                  Aditya Gupta
                </motion.h1>
                <motion.span
                  variants={container(0.5)}
                  initial="hidden"
                  animate="visible"
                  className="bg-gradient-to-r bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-4xl tracking-tight text-transparent"
                >
                  Front End Developer
                </motion.span>
              </div>

              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="my-2 max-w-xl py-6 font-light text-left md:text-center lg:text-left -tracking-tighter"
              >
                {summary}
              </motion.p>
            </div>
          </div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="w-full lg:w-1/3 order-1 lg:order-2  rounded-md"
          >
            <Image
              className="rounded-md w-[400px] h-[400px] object-cover m-auto"
              src={summaryPic}
              alt=""
              width={400}
              height={400}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
