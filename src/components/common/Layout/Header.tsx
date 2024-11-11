'use client'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MbMenu } from "./MbMenu";
import { ThemeToggle } from "@/components/theme-toggle";
import Logo from "../Logo";
import { useTheme } from "next-themes";
import Image from "next/image";

// #004AAD
export default function Header() {
    const { theme } = useTheme();

    const color = theme === 'light' ? '#004AAD' : '#ffffff'

    function scrollToElement(id: string) {
        const element = document.getElementById(id);
        element?.scrollIntoView({
          behavior: 'smooth'
        }); 
      }

    return (
        <header className="fixed left-0 top-0 z-50 py-[5px] w-full  animate-fade-in border-b backdrop-blur-[12px] [--animation-delay:600ms] px-5 lg:px-0">
            <div className="max-w-full lg:max-w-[1400px] m-auto flex h-[3.5rem] items-center justify-between">
                <div className="logo_wraper">
                    <Link href="/" className="text-primary dark:text-white text-[24px] font-medium">
                        {/* <Logo fill={color} /> */}
                        <Image src="/images/logo.png" alt="logo" width={170} height={80} />
                    </Link>
                </div>
                <nav className="nav_menu flex items-center">
                    <ul className="md:flex items-center hidden">
                        <li className="px-5 cursor-pointer" onClick={() => scrollToElement('features')} >Features</li>
                        <li className="px-5 cursor-pointer" onClick={() => scrollToElement('how-works')} >How It Works</li>
                        <li className="pl-5 cursor-pointer pr-[30px]" onClick={() => scrollToElement('testimonials')}  >Testimonials</li>
                    </ul>
                    <ThemeToggle />
                    <MbMenu />
                    <div className="hidden lg:flex items-center ml-5">
                       
                        <Button onClick={() => scrollToElement('contact')} className=" rounded-full bg-primary hover:bg-primary tracking-tight text-base dark:bg-white">Contact us</Button>
                    </div>
                </nav>
            </div>
        </header>
    )
}