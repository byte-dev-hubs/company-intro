"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "../sub/service-card";
import { Services_Info } from "@/constants";

import { slideInFromTop } from "@/lib/motion";

export const Services = () => {
    return (
        <div id="services" className="flex flex-row relative items-center justify-center min-h-screen w-full h-full -z-20">
            <div className="absolute w-auto h-auto top-0 z-[5]">
                <motion.div
                    variants={slideInFromTop}
                    className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20"
                >
                    Services
                </motion.div>
            </div>

            {/* <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/lock-top.png"
            alt="Lock top"
            width={50}
            height={50}
            className="translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/lock-main.png"
            alt="Lock main"
            width={70}
            height={70}
            className="z-10"
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042F88B] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Encryption</h1>
        </div>
      </div> */}

            <div className="mt-5 h-full w-full flex flex-col md:flex-row gap-12 px-10 justify-center absolute z-[20]">
                {Services_Info.map((service) => (
                    <ServiceCard
                        key={service.title}
                        src={service.image}
                        title={service.title}
                        description={service.description}
                        link={service.link}
                    />
                ))}
            </div>

            {/* <div className="absolute z-[20] bottom-[10px] px-[5px]">
                <div className="cursive text-[20px] font-medium text-center text-gray-300">
                    Secure your data with end-to-end encryption.
                </div>
            </div> */}

            <div className="w-full flex items-start justify-center absolute">
                <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    preload="false"
                    className="w-full h-auto"
                >
                    <source src="/videos/encryption-bg.webm" type="video/webm" />
                </video>
            </div>
        </div>
    );
};