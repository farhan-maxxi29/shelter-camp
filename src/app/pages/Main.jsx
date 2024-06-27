import { CarouselSize } from "@/components/MainSlide";
import { Carousel, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import React from "react";
import IconArrowLeft from "/public/images/arrowLeft.svg";
import IconArrowRight from "/public/images/arrowRight.svg";

export default function Main() {
  return (
    <div className="w-full mt-32 h-screen bg-[#121212] pt-[48px]">
      <div className="max-w-full h-auto mx-11 border border-black">
        <div className="w-full flex items-center justify-between px-6">
          <h1 className="font-medium text-[40px] text-white">Rekomendasi Untuk Kamu</h1>
        </div>
        <div className="w-full p-4">
          <CarouselSize />
        </div>
      </div>
    </div>
  );
}
