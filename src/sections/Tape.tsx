const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Maintable",
  "Search Optimized",
  "Usable",
  "Reliable",
];
import StartIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3 -mx-3">
        <div className="flex [flex-mask:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-4 flex-none py-3 animate-move-left [animation-duration:10s]">
            {Array(2)
              .fill("")
              .map((_, index) => (
                <Fragment key={index}>
                  {words.map((word) => (
                    <div key={word} className="inline-flex gap-4 items-center">
                      <span className="text-gray-900 uppercase text-sm font-extrabold">
                        {word}
                      </span>
                      <StartIcon className="size-6 text-gray-900 -rotate-12" />
                    </div>
                  ))}
                </Fragment>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
