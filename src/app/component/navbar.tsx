"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link"; 
import * as React from "react"
import { List, ListItem } from "@mui/material";
import logo from "../assets/logo.png"
import { Input } from "@/components/ui/input"
import BurgerMenu from "./burgermenu";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { LogOut } from "lucide-react";

const components = [{
  title: "a",
  href: "www.fb.com",
  description: "huruf abjad 1",
},
{
  title: "b",
  href: "www.google.com",
  description: "huruf abjad 2",
},
{
  title: "c",
  href: "www.abc.com",
  description: "huruf abjad 3",
}]

const Navbar = (props: any) => {
  return (
    <header>
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link href="#" className="flex items-center" prefetch={false}>
            <Image
            {...props}
               src={logo}
               x="20%"
               y="20%"
               width="100"
               height="50"
               viewBox="0 0 50 100"
            />
            
          </Link>
          <nav className="hidden md:flex gap-4">
          <NavigationMenu>
            <NavigationMenuItem className="list-none">
             <NavigationMenuTrigger> 
                Components
              </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                {...props}
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        </NavigationMenu>
            <Link
              href="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Services
            </Link>
            <Link
              href="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
          <Input type="Search" placeholder="Search" className="max-h-11 max-w-30" />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              Sign in
            </Button>
            <Button size="sm">Sign up</Button>
          </div>
          <BurgerMenu />
        </div>
      </div>
    </nav>
    </header>
  )
}
export default Navbar;
