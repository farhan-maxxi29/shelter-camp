"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { id as localeID } from "date-fns/locale";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDown, ChevronUp } from "lucide-react";

export function DatePickerDemo({ days = 0, IconCalendar }) {
  const defaultDate = addDays(new Date(), days);
  const [date, setDate] = React.useState(defaultDate);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 200);
  };

  return (
    <Popover open={isOpen} onOpenChange={handleToggle}>
      <PopoverTrigger asChild>
        <Button className={cn("w-[160px] justify-start text-left font-normal bg-[#353535] hover:bg-[#353535] rounded-lg", !date && "text-muted-foreground")}>
          <div className="flex items-center justify-between gap-4 w-full">
            {IconCalendar}
            {date ? format(date, "dd MMMM", { locale: localeID }) : <span>Pilih tanggal</span>}
            {isOpen ? (
              <ChevronUp className="h-5 w-5 text-white ml-auto" />
            ) : (
              <ChevronDown className="h-5 w-5 text-white ml-auto" />
            )}
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" side="bottom">
        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
      </PopoverContent>
    </Popover>
  );
}
