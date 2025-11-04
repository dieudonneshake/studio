"use client";

import { Languages } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {

  const handleLanguageChange = (lang: string) => {
    const interval = setInterval(() => {
      const googleTranslateElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (googleTranslateElement) {
        googleTranslateElement.value = lang;
        googleTranslateElement.dispatchEvent(new Event('change'));
        clearInterval(interval);
      }
    }, 100); 
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Toggle language">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleLanguageChange('en')}>English</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange('fr')}>French</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange('rw')}>Kinyarwanda</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange('sw')}>Swahili</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
