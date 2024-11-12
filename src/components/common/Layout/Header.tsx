"use client";
import { Button } from "@/components/ui/button";
import { MbMenu } from "./MbMenu";
import Brand_Logo from "./Brand_Logo";

export default function Header() {
  function scrollToElement(id: string) {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <header className="sticky top-0 z-50 py-[5px] animate-fade-in border-b border-gray-100 backdrop-blur-xl [--animation-delay:600ms]">
      <div className="container flex h-[3.5rem] items-center justify-between">
        <div className="logo_wraper">
          <Brand_Logo />
        </div>
        <nav className="nav_menu flex items-center">
          <ul className="md:flex items-center hidden">
            <li
              className="px-5 cursor-pointer"
              onClick={() => scrollToElement("features")}
            >
              Features
            </li>
            <li
              className="px-5 cursor-pointer"
              onClick={() => scrollToElement("how-works")}
            >
              How It Works
            </li>
            <li
              className="pl-5 cursor-pointer pr-[30px]"
              onClick={() => scrollToElement("testimonials")}
            >
              Testimonials
            </li>
          </ul>
          <MbMenu />
          <div className="hidden lg:flex items-center ml-5">
            <Button
              onClick={() => scrollToElement("contact")}
              className=" rounded-full bg-primary hover:bg-primary tracking-tight text-base dark:bg-white"
            >
              Contact us
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
