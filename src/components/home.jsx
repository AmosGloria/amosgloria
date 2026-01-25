import React from "react";
import { LucidePenLine } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className="mx-auto flex flex-col justify-center items-center px-8 w-180 h-40 bg-transparent border border-purple-300">
        <div>
          <p>✓ Initializing portfolio...</p>
        <p>✓ Rendering interfaces...</p>
        <p className="dark:text-[#C778DD] text-[#6E11B0]">✓ Shipping experiences...</p>
        <div className="absolute top-[-22px] z-10 animate-writing-pen">
             <LucidePenLine size={20} className="text-purple-600 -rotate-45" />
           </div>
        <p className="overflow-hidden whitespace-nowrap border-r-2 border-purple-500 animate-typewriter">
             Building the future, one interface at a time.
           </p>
        </div>
       
      </div>
       <h1 className="font-black text-[36px] text-center"><span >Gloria is a </span>
       <span className="text-purple-500">Software Engineer</span>
       </h1>
          <div className="mx-auto w-200 flex font-bold justify-center items-center">
       <p>  Dedicated to building high-performance, 
        web interfaces that align with organizational goals,
       amplify brand identity, and drive measurable user success.
                   <span className="italic dark:text-[#C778DD] text-[#6E11B0] underline block">Transforming your ideas into digital reality.</span> </p>

         </div>

         <div className="flex">
          <div></div>
          <div></div>
         </div>
    
    </div>
  );
}
