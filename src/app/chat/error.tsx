'use client';
import { Circle } from "@/components/circle";

export default function Error() {


  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-secondary-dark">
      <div className="w-[40vw]">
        <Circle disable={true} />
      </div>
    </div>
  );
}