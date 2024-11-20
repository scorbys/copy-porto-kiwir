"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.png";
import { Facebook, Instagram, Linkedin, Mail, Youtube } from "lucide-react";
import MapPage from "./google-maps";

export default function Component() {
  return (
    <footer className="min-h-100vh inset-x-0 bottom-0 mt-auto z-50 bg-zinc-100 backdrop-blur-md dark:bg-neutral-800/30">
      <div className="container mx-auto px-4">
        <hr className="border-2 border-gray-500"></hr>
        <div className="mt-8 flex flex-wrap justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0 pb-4">
          <Link
              href="#"
              className="text-zinc-700 hover:text-zinc-800 p-1 items-center"
              target="_blank"
            >
              <Facebook size={24} />
            </Link>
            <Link
              href="#"
              className="text-zinc-700 hover:text-zinc-800 p-1 items-center"
              target="_blank"
            >
              <Mail size={24} />
            </Link>
            <Link
              href="#"
              className="text-zinc-700 hover:text-zinc-800 p-1 items-center"
              target="_blank"
            >
              <Instagram size={24} />
            </Link>
            <Link
              href="#"
              className="text-zinc-700 hover:text-zinc-800 p-1 items-center"
              target="_blank"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="#"
              className="text-zinc-700 hover:text-zinc-800 p-1 items-center"
              target="_blank"
            >
              <Youtube size={24} />
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
