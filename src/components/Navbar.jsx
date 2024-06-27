"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const navItems = ["Beranda", "Price List", "Promo", "Kontak", "Tentang Kami"];

  return (
    <div className="w-full ml-3">
      <div className="flex items-center pt-5">
        <Image src="/images/logo.png" alt="logo" width={170} height={93} />
        <ul className="no-underline flex items-center ml-10 gap-[70px] font-inter font-normal text-2xl text-white ">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer hover:text-blue-active ${
                activeIndex === index ? "text-blue-active font-bold border-b border-blue-active transition" : ""
              }`}
              onClick={() => handleItemClick(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
