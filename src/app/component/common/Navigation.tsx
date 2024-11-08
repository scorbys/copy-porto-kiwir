"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useRef, useState } from "react";
import logoCS from "../../assets/logoCS.png";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import DarkMode from "../home/dark-mode-switcher";
import BurgerMenu from "../home/burgermenu";

const Navbar = (props: any) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <header>
      <nav className="fixed w-fit mx-auto rounded-full border-2 inset-x-0 top-0 mt-5 z-50 bg-white/30 backdrop-blur-md shadow-lg dark:bg-neutral-800/30">
        <div className="container">
          <div className="flex mx-auto w-full justify-center gap-10 px-5 items-center">
            <Link href="/" className="flex items-center" prefetch={false}>
              <Image
                {...props}
                src={logoCS}
                x="20%"
                y="20%"
                width="50"
                height="50"
                viewBox="0 0 50 100"
              />
            </Link>
            <nav className="hidden md:flex gap-10">
              <ul
                onMouseLeave={() => {
                  setPosition((pv) => ({
                    ...pv,
                    opacity: 0,
                  }));
                }}
                className="relative mx-auto flex w-fit"
              >
                <Link
                  href="#"
                  className="font-medium items-center text-sm transition-colors"
                  prefetch={false}
                >
                  <Tab setPosition={setPosition}>Home</Tab>
                </Link>

                <Link
                  href="/landing_page/career"
                  className="font-medium items-center text-sm transition-colors"
                  prefetch={false}
                >
                  <Tab setPosition={setPosition}>Stack</Tab>
                </Link>
                <Link
                  href="/landing_page/news"
                  className="font-medium items-center text-sm transition-colors"
                  prefetch={false}
                >
                  <Tab setPosition={setPosition}>Experience</Tab>
                </Link>
                <Link
                  href="/landing_page/about"
                  className="font-medium items-center text-sm transition-colors"
                  prefetch={false}
                >
                  <Tab setPosition={setPosition}>Project</Tab>
                </Link>
                <Link
                  href="/landing_page/contact"
                  className="font-medium items-center text-sm transition-colors"
                  prefetch={false}
                >
                  <Tab setPosition={setPosition}>Contact</Tab>
                </Link>
                <Cursor position={position} />
              </ul>
            </nav>
            <div className="flex items-center w-fit h-fit">
              <DarkMode />
            </div>
          </div>
        </div>
      </nav>
      <div className="visible md:invisible">
        <BurgerMenu />
      </div>
    </header>
  );
};
const Tab = ({ children, setPosition }: any) => {
  const ref = useRef<HTMLLIElement>(null);
  const rect = ref?.current?.getBoundingClientRect();

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};
const Cursor = ({ position }: any) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-gradient-to-r from-blue-500 to blue-600 shadow-inner md:h-12"
    />
  );
};
export default Navbar;
