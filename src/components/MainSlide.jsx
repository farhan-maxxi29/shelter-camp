"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import dataJson from "../data/homeCarousel.json";
import { Button } from "./ui/button";

export function CarouselSize() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dataJson);
    console.log("Data loaded:", dataJson);
  }, []);

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {data.map((item) => (
          <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="">
              <Card className="w-[400px]">
                <CardContent className="flex flex-col items-center justify-center relative">
                  <Image src={item.image} alt={item.title} width={600} height={400} className="w-full h-full object-cover mb-4" />
                  <div className="w-[50px] h-[50px] bg-[#212121] absolute top-0 right-0 mt-[9px] mr-4 ">
                    <Image src={item.wishlist} alt={item.title} width={50} height={50} className="" />
                  </div>
                  <div className="w-full border border-white bg-[#212121] rounded-br-lg rounded-bl-lg -mt-4 text-center">
                    <div className="flex items-center justify-center gap-4 p-2 mt-3">
                      {item.icons.map((icons) => (
                        <Image src={icons.icon} alt={icons.title} width={40} height={40} />
                      ))}
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold text-white my-2">{item.title}</span>
                      <Button className="bg-[#5898D4]/50 hover:bg-[#5898D4]/50 text-white border border-black font-medium text-base py-1 px-7 my-5 rounded-xl">Detail</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex items-center gap-3 absolute top-0 right-0 -mt-[65px] mr-2">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
