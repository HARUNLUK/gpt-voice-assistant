
import { Circle } from "@/components/circle";

export default function Loading(params:any) {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-secondary-dark">
          <div className="w-[40vw]">
            <Circle />
          </div>
        </div>
      );
}