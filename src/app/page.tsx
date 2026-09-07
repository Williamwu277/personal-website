'use client';
import { motion } from "framer-motion";
import { useContext } from "react";
import { PageContext } from "../ui/providers";
import frontPage1 from "../assets/frontPage1.jpg";
import frontPage2 from "../assets/frontPage2.jpg";
import frontPage3 from "../assets/frontPage3.jpg";
import frontPage4 from "../assets/frontPage4.jpg";
import { strokePaths } from "../assets/nameStrokes/strokePath";
import Image, { StaticImageData } from "next/image";



export default function Home() {
  const words: Array<string> = ["WELCOME", "TO ", "MY ", "WORLD"];
  const name: Array<string> = ["w", "i", "l", "l", "i", "a", "m", " ", "w", "u"];
  const images: StaticImageData[] = [frontPage1, frontPage2, frontPage3, frontPage4];
  const { toggleAnimation } = useContext(PageContext);

  return (
    <div className="overflow-x-hidden">
      {/* page transition animation */}
      {toggleAnimation && (
        <motion.div
          transition={{ duration: 3, ease: "easeInOut" }}
          initial={{ x: "100vw" }}
          animate={{ x: "-80vw" }}
        >
          <svg
            className="absolute z-50 w-[180vw] h-[100dvh]"
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
          >
            <path d="M300,0 
                  C350,50 400,150 350,200 
                  C300,250 350,300 400,350 
                  C450,400 400,450 350,500 
                  C300,550 350,600 400,600 
                  L1000,600 L1000,0 Z"
              fill="#0B1A32" />
          </svg>
        </motion.div>
      )}
      <div
        onClick={()=>{}}
        className={"flex flex-col gap-y-4 md:gap-y-8 bg-frontpage w-full h-[100dvh] items-center place-content-center font-clean "}
      >
        {/* Picture frame animations */}
        <div className="grid grid-cols-2 md:grid-cols-[auto_auto_auto_auto] px-10 md:px-20 my-2 md:mt-10 gap-x-3 gap-y-3 md:gap-x-5 md:gap-y-5 place-items-center w-fit md:h-[250px] ">
          {
            images.map((v, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: (index + 1) * 0.5 }}
                  key={index} className="grid grid-cols-1 grid-rows-1 justify-center items-center w-[124px] h-[155px] md:w-[160px] md:h-[200px] lg:w-[200px] lg:h-[250px]"
                >
                  {/* Image */}
                  <Image className="object-cover col-start-1 row-start-1 mx-auto w-[90%]" src={v} alt={"frontPage" + index} width={200} height={400} placeholder="blur" priority/>
                  {/* Picture frame #312e81 */}
                  <svg className="col-start-1 row-start-1 w-full h-full" viewBox="0 0 300 500" preserveAspectRatio="none">

                    <rect x="10" y="10" width="280" height="480" fill="none" stroke="white" strokeWidth="10" rx="0" />
                    {/*<line x1="150" y1="10" x2="150" y2="490" stroke="white" strokeWidth="10" />*/}
                    {/*<line x1="10" y1="170" x2="290" y2="170" stroke="white" strokeWidth="10" />*/}
                    {/*<line x1="10" y1="330" x2="290" y2="330" stroke="white" strokeWidth="10" />*/}
                  </svg>
                </motion.div>
              )
            })
          }
        </div>
        <div className="flex flex-col w-full justify-center items-center gap-y-3">
          {/* Animate the welcome message */}
          <div className="flex flex-wrap w-fit h-full col-span-6 mx-12 gap-x-3 lg:gap-x-6 justify-center">
            {
              words.map((word, index) => {
                return (
                  <motion.h1
                    key={index}
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: (index + 1) * 0.5 }}
                    className={(index == 3 ? "text-textmedium " : "text-textlight ") + "text-4xl lg:text-5xl font-title"}
                  >
                    {word}
                  </motion.h1>
                );
              })
            }
          </div>
          {/* Animate the name using motion paths */}
          <div className="flex justify-center w-full max-w-[18rem] md:max-w-sm md:mt-0">
            {
              name.map((char, index) => {
                if (char === " ") {
                  return <span key={index} className="ml-5 mr-5"></span>
                }
                return (
                  <motion.svg
                    key={index}
                    viewBox={strokePaths[char].viewBox}
                    xmlns="http://www.w3.org/2000/svg"
                    width={35}
                    height={20}
                  >
                    <motion.path
                      d={strokePaths[char].path}
                      stroke="white"
                      strokeWidth={3}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2.5, ease: "easeInOut", delay: 2.5 }}
                    />
                  </motion.svg>
                );
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}