"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Rlogo from "../../assets/stack/react-seeklogo.svg";
import Flogo from "../../assets/stack/figma-seeklogo.svg";
import Image, { StaticImageData } from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
const StackPage: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  type Cards = {
    frontImg: StaticImageData;
    alt: string;
    title: string;
    backText: string;
  };
  const cards: Cards[] = [
    {
      frontImg: Rlogo,
      alt: "Image 1",
      title: 'React',
      backText: "This is my new Expereince",
    },

    {
      frontImg: Rlogo,
      alt: "Image 1",
      title: 'React',
      backText: "This is my new Expereince",
    },
    {
      frontImg: Flogo,
      alt: "Image 2",
      title: 'Figma',
      backText: "This is my new Expereince",
    },
  ];

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      // Set up initial styles for back faces to hide them
      gsap.set(card.querySelector(".back"), { rotationY: 180 });
      gsap.set(card, { rotationY: 0, transformStyle: "preserve-3d" });
    });
  }, []);

  const handleCardClick = (index: number) => {
    gsap.to(cardsRef.current[index], {
      duration: 0.3,
      rotationY: "+=180",
      ease: "power3.inOut",
    });
  };


  const sectionRef = useRef<HTMLDivElement>(null);
  const headingsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headingsRef.current) return;

    gsap.to(headingsRef.current, {
      scale: 1.05,
      duration: 3,
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        start: "top top",
        end: "bottom center",
        scrub: 3,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full h-screen mx-auto justify-center items-center">
      <div className="flex items-center justify-center mx-auto">
        <h1 className="text-4xl font-bold">My Stack</h1>
      </div>
      <div 
      ref={(el) => (headingsRef.current = el)}
      className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center justify-center p-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative w-[300px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] p-10 cursor-pointer transform-style-3d transition-transform duration-700"
            ref={(el) => (cardsRef.current[index] = el!)}
            onClick={() => handleCardClick(index)}
          >
            <div className="absolute flex flex-col inset-0 w-full md:w-full backface-hidden bg-red-200 items-center justify-center rounded-lg">
              <Image
                src={card.frontImg}
                alt={card.alt}
                layout="contain"
                className="object-contain w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-lg"
              />
              <div className="text-xl md:text-2xl font-semibold mt-2">
                <h2>{card.title}</h2>
              </div>
            </div>
            <div className="absolute inset-0 w-full h-full backface-hidden bg-blue-500 text-white flex items-center justify-center rounded-lg rotate-y-180">
              <p className="text-center font-semibold text-lg">This is the back of card {card.backText}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackPage;
