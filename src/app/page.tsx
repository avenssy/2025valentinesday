"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const generateRandomElement = (prev: number[], limit: number) => {
  if (prev.length < limit) {
    return [...prev, Date.now()]; // Use timestamp as a unique key
  }
  return prev;
};

const FloatingItem = ({ src, size, alt }: { src: string, size: number, alt: string }) => {
  return (
    <Image
      key={Date.now()}
      src={src}
      width={size}
      height={size}
      alt={alt}
      className="absolute animate-float"
      style={{
        left: `${Math.random() * 100}vw`,
        bottom: `${Math.random() * 100}vh`, // Random vertical positioning for some items
        animationDuration: `${5 + Math.random() * 3}s`,
        animationDelay: `${Math.random() * 3}s`,
      }}
    />
  );
};

export default function Home() {
  const router = useRouter();
  const [hearts, setHearts] = useState<number[]>([]);
  const [heartBalloon, setHeartBalloon] = useState<number[]>([]);
  const [heartAirBalloon, setHeartAirBalloon] = useState<number[]>([]);
  const [heartArrow, setHeartArrow] = useState<number[]>([]);
  const [fade, setFade] = useState(false); // State to control the fade effect

  // Consolidate the heart creation logic in one effect
  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => generateRandomElement(prev, 3));
      setHeartBalloon((prev) => generateRandomElement(prev, 2));
      setHeartArrow((prev) => generateRandomElement(prev, 2));
      setHeartAirBalloon((prev) => generateRandomElement(prev, 1));
    }, 500); // Frequency of adding hearts

    return () => clearInterval(interval);
  }, []);

  // Handle "Love Letter" button click with fade effect
  const handleLoveLetterClick = () => {
    setFade(true);
    setTimeout(() => {
      router.push("/love-letter");
    }, 500); // Delay navigation to allow for the fade effect to complete
  };

  return (
    <div
      className={`bg-rose-200 h-screen w-screen flex flex-col items-center justify-center relative overflow-hidden transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}
    >
      {/* Floating Hearts */}
      {hearts.map((id) => (
        <FloatingItem key={id} src="/hearts.png" size={40} alt="Floating heart" />
      ))}

      {/* Heart Balloons */}
      {heartBalloon.map((id) => (
        <FloatingItem key={id} src="/heart-balloon.png" size={40} alt="Floating heart balloons" />
      ))}

      {/* Heart Arrows */}
      {heartArrow.map((id) => (
        <FloatingItem key={id} src="/hearts-arrow.png" size={40} alt="Floating heart arrows" />
      ))}

      {/* Hot Air Balloons */}
      {heartAirBalloon.map((id) => (
        <FloatingItem key={id} src="/hot-air-balloon-1.png" size={100} alt="Hot air balloon" />
      ))}

      {/* Main Content */}
      <Image
        src="/valentines-day-title.png"
        width={500}
        height={500}
        className="mb-[50px] lg:w-[500px] lg:h-[335.85px] w-[350px] h-[250.5px]"
        alt="web page title"
      />

      <a 
        href="#_" 
        className="w-fit relative px-6 py-3 font-bold text-black group mb-[20px]"
        onClick={() => router.push("/game")}
      >
        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
        <span className="relative">Start Game</span>
      </a>

      <a
        href="#_"
        className="w-fit relative px-6 py-3 font-bold text-black group mb-[20px]"
        onClick={handleLoveLetterClick} // Trigger fade effect and navigate
      >
        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
        <span className="relative">Love Letter</span>
      </a>

      <a 
        href="#_" 
        className="w-fit relative px-6 py-3 font-bold text-black group mb-[20px]" 
        onClick={() => window.location.href = "https://www.google.com"}
      >
        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
        <span className="relative">Exit</span>
      </a>
    </div>
  );
}