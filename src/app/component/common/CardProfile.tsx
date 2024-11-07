"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import ImgSample from "../../assets/news1.jpg";

const CardProfile = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // GSAP animation
      gsap.from(".animated-bgr span", {
        duration: 1,
        scale: 0,
        opacity: 0,
        y: 90,
        yoyo: false,
        repeat: -1,
        ease: "back.inOut",
        delay: 2,
        stagger: {
          amount: 1.5,
          grid: "auto",
          from: "center",
        },
      });

      // VanillaTilt initialization
      import("vanilla-tilt").then((VanillaTilt) => {
        if (cardRef.current) {
          VanillaTilt.default.init(cardRef.current, {
            max: 50,
            speed: 400,
            glare: true,
            "max-glare": 1,
          });
        }
      });
    }
  }, []);

  return (
    <main className="flex justify-center items-center min-h-screen bg-black relative overflow-hidden">
      <div
        className="relative flex justify-center items-center max-w-[1200px] flex-wrap z-10"
        ref={containerRef}
      >
        <div
          ref={cardRef}
          className="card relative w-[280px] h-[400px] m-[30px] shadow-[20px_20px_50px_rgba(0,0,0,0.5)] rounded-[15px] bg-[rgba(255,255,255,0.1)] overflow-hidden flex justify-center items-center border-t border-l border-[rgba(255,255,255,0.5)] backdrop-blur-[5px] group"
        >
          {/* <div className="animated-bgr absolute inset-0 flex flex-wrap">
            {[...Array(25)].map((_, i) => (
              <span key={i} className="w-1/5 h-20 bg-red-900/20 bg-fixed"></span>
            ))}
          </div> */}
          <div className="content text-center items-center justify-center w-full h-full transform hover:-translate-y-[100px] opacity-100 transition-all">
            <h1 className="text-white text-2xl mt-2">Hover Me </h1>
            <div className="content p-5 items-center justify-center text-center transform translate-y-[100px] opacity-0 transition-all duration-500 group-hover:-translate-y-100 group-hover:opacity-100">
              <Image
                src={ImgSample}
                alt="01"
                layout="contain"
                // quality={100}
                className="rounded-xl object-cover"
              />
              {/* <h2 className="absolute top-[-80px] right-[30px] text-[8em] text-[rgba(255,255,255,0.05)] pointer-events-none">01</h2> */}
              <h3 className="text-[1.8em] text-white z-10">Tomy Genjong</h3>
              <p className="text-base text-white font-light">Developer</p>
              {/* <a href="#" className="relative inline-block px-5 py-2 mt-4 bg-white text-black rounded-[20px] no-underline font-medium shadow-[0_5px_15px_rgba(0,0,0,0.2)]">Read More</a> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default CardProfile;