import IconCalendarIn from "/public/images/calendar.svg";
import IconCalendarOut from "/public/images/calendarOut.svg";
import IconPeople from '/public/images/people.svg';
import { DatePickerDemo } from "@/components/DatePicker";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PeoplePicker } from "@/components/SelectPeople";
import Main from "./pages/Main";

export default function Home() {
  return (
    <>
    {/* Header */}
      <div className="w-full">
        <Image
          width={2000}
          height={1000}
          alt="Header"
          src='/images/Header.png'
          className="object-cover absolute -z-50"
        />
        <div className="max-w-7xl">
          <Navbar />
          <div className="mt-56 ml-24 w-[800px]">
            <h1 className="font-light text-4xl leading-normal text-white">Glamping | Platform  Campsite  | Cottage | Grill & Coffee at Panyawangan Lembang</h1>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-56">
          <div className="w-full h-auto mx-auto bg-[#212121]/60 rounded-2xl">
            <div className="flex items-center px-2 gap-8">
              <div className="flex flex-col py-4 gap-2">
                <p className="font-normal text-2xl leading-normal text-white">Masuk</p>
                <DatePickerDemo days={0} IconCalendar={<IconCalendarIn className="w-5 h-5" />} />
              </div>
              <div className="flex flex-col py-4 gap-2">
                <p className="font-normal text-2xl leading-normal text-white">Keluar</p>
                <DatePickerDemo days={2} IconCalendar={<IconCalendarOut className="w-5 h-5" />} />
              </div>
              <div className="flex flex-col py-4 gap-2">
                <p className="font-normal text-2xl leading-normal text-white">Orang</p>
                <PeoplePicker initialSelection={2} Icon={<IconPeople className="w-5 h-5" />} />
              </div>
              <div className="flex flex-col mt-11">
                <Button className="bg-white hover:bg-white text-black font-normal text-2xl px-6 py-3" >Cek Ketersediaan</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* Main */}
      <Main />
    </>
  );
}
