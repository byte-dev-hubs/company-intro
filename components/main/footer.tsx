import Link from "next/link";

import { FOOTER_DATA } from "@/constants";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <h1 className="text-center text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Contact Us
      </h1>
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
        {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[200px] h-auto flex flex-col items-center justify-start"
            >
              <h3 className="font-bold text-[16px]">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-row items-center my-[15px]"
                >
                  {Icon && <Icon />}
                  <span className="text-[15px] ml-[6px]">{name}</span>
                </Link>
              ))}
            </div>
          ))}
        {/* <Link
          key="contact-me"
          href="mailto:support@bytetalented.net"
          target="_blank"
          rel="noreferrer noopener"
          className="mb-10 button-primary text-center text-white text-3xl px-10 py-3 cursor-pointer rounded-lg max-w-[500px]">Contact Me</Link> */}
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; ByteTalented International {new Date().getFullYear()} Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};
