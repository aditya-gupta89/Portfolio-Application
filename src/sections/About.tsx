"use client";
import SectionHeader from "@/components/SectionHeader";

import MapImage from "@/assets/images/map.png";
import SmileEmoji from "@/assets/images/memoji-smile.png";
import Image from "next/image";
import Card from "@/components/Card";
import CardHeader from "@/components/CardHeader";
import ToolBoxItem from "@/components/ToolBoxItem";
import { motion } from "framer-motion";
import { useRef } from "react";
import {hobbies} from  "../constants"
import {toolboxItems1} from  "../constants"
import {toolboxItems} from  "../constants"


export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div id='about' className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am , what I do,"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid gap-6 grid-cols-12 ">
            <Card className="h-[320px] p-0 col-span-12">
              <CardHeader
                title={"My Toolbox"}
                description="Explore the technologies and tool I use to create the digital
                experience"
                isResume={true}
                className="px-6 pt-6"
              />
             
              <ToolBoxItem items={toolboxItems} className="mt-6 px-10" />
              <ToolBoxItem items={toolboxItems1} className="mt-6 px-10" />
            </Card>
            <Card className="h-[320px] p-0 flex w-full flex-col col-span-12 md:col-span-7 lg:col-span-8">
              <CardHeader
                title={"Beyond the Code"}
                description="Explore my interests and hobbies the skills"
              />

              <div ref={constraintRef} className="relative flex-1">
                {hobbies.map((hobby) => (
                  <motion.div
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    key={hobby.title}
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="col-span-12 md:col-span-5 lg:col-span-4 w-full h-[320px]">
              <Image
                className="w-full h-full size-6 object-cover object-left-top"
                src={MapImage}
                alt="map"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30 ">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-40 animate-ping [animation-duration:2s] ">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10 ">
                    <Image src={SmileEmoji} alt="map" className="size-20" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
