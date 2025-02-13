"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoveLetter() {
  const router = useRouter();
  const handleExitClick = () => {
    router.push("/");
  }

  return (
    <div className="bg-rose-200 h-screen w-screen flex flex-row items-center justify-center">
      <button 
        type="button" 
        className="absolute top-5 left-5 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={handleExitClick}
      >
        Exit
      </button>

      <div className="h-screen w-full text-white flex flex-col items-center p-[20px] lg:p-[100px] text-[15px] lg:text-[25px] justify-center">
        <Image
          src="/cat-hug.gif"
          width={100}
          height={100}
          alt="cats hugging"
          className="absolute w-[75px] h-[75px] lg:w-[100px] lg:h-[101.52px] top-[90px] left-[50px] lg:top-[125px] lg:left-[125px]"
        />
        <Image
          src="/jap-food-1.png"
          width={200}
          height={200}
          alt="jap food date"
          className="absolute w-[150px] h-[120px] lg:w-[200px] lg:h-[145.31px] top-[30px] right-[50px] lg:top-[125px] lg:right-[125px]"
        />
        <Image
          src="/yutaka-2.png"
          width={150}
          height={150}
          alt="yutaka resto"
          className="absolute w-[75px] h-[103px] lg:w-[150px] lg:h-[186.72px] bottom-[50px] left-[25px] lg:bottom-[80px] lg:left-[125px]"
        />
        <Image
          src="/dog-pic.png"
          width={200}
          height={200}
          alt="Picture of the author"
          className="absolute w-[100px] h-[137.5px] lg:w-[200px] lg:h-[275.81px] bottom-[30px] right-[30px] lg:bottom-[125px] lg:right-[125px]"
        />
        <Image
          src="/yutaka-1.png"
          width={200}
          height={200}
          alt="Picture of the author"
          className="absolute w-[100px] h-[74px] lg:w-[200px] lg:h-[145.31px] lg:top-[300px] lg:left-[50px] invisible lg:visible"
        />
        <Image
          src="/i-love-you.gif"
          width={200}
          height={200}
          alt="Picture of the author"
          className="absolute w-[120px] h-[100px] lg:w-[200px] lg:h-[154.59px] lg:bottom-[50px] lg:left-[350px] bottom-[50px] left-[120px] "
        />
        <Image
          src="/give-heart.gif"
          width={200}
          height={200}
          alt="bear heart"
          className="absolute w-[100px] h-[83.5px] lg:w-[200px] lg:h-[167.81px] lg:bottom-[50px] lg:right-[350px] invisible lg:visible"
        />
        <p className="text-[20px] lg:text-[35px] mb-[30px]">Happy Valentine's Day, bebi!</p>
        <p>You are one of the best things in the world to me!</p>
        <p>I love you more than Japanese food.</p>
        <p>I love you more than sinigang.</p>
        <p>I love you more than the whole wide world :3</p>
        <p>I hope today's the last LDR V-Day that we will have.</p>
        <p>I'm looking forward to spend it with you there.</p>
        <p>I love you, and I miss you. ❤️</p>
        <p>Hug you soon, and hang out soon</p>
        <p>I can't wait to be with you :3</p>
      </div>
    </div>
  );
}
