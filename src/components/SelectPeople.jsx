"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDown, ChevronUp } from "lucide-react";

export function PeoplePicker({ initialSelection = 1, Icon }) {
  const [selection, setSelection] = React.useState(initialSelection);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 200);
  };

  const handleSelection = (people) => {
    setSelection(people);
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={handleToggle}>
      <PopoverTrigger asChild>
        <Button className={cn("w-[160px] justify-start text-left font-normal bg-[#353535] hover:bg-[#353535] rounded-lg", !selection && "text-muted-foreground")}>
          <div className="flex items-center justify-between gap-4 w-full">
            {Icon}
            <span>{selection} Orang</span>
            {isOpen ? (
              <ChevronUp className="h-5 w-5 text-white ml-auto" />
            ) : (
              <ChevronDown className="h-5 w-5 text-white ml-auto" />
            )}
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[160px] p-0 bg-white" side="bottom">
        <div className="flex flex-col max-h-[200px] overflow-y-auto">
          {Array.from({ length: 100 }, (_, i) => i + 1).map((people) => (
            <Button
              key={people}
              className="text-left text-[#353535] bg-white hover:bg-[#353535] hover:text-white"
              onClick={() => handleSelection(people)}
            >
              {people} Orang
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
