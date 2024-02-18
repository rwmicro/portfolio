import Image from "next/image";
import corbeilleJSON from "../../public/corbeille/corbeille.json";
import { useState } from "react";
import { useDrag } from "react-dnd";
import Favoris from "./Projets/Favoris";
import PC from "./Projets/PC";

interface CorbeilleProps {
  visibility: boolean;
  setVisible: () => void;
  setDestroy: () => void;
}

interface Position {
  x: number;
  y: number;
}

type Corbeille = {
  thumbnailPath: string;
  name: string;
};

export default function Corbeille({
  visibility,
  setVisible,
  setDestroy,
}: CorbeilleProps) {
  const [element, setElement] = useState<string | null>(null);
  const [position, setPosition] = useState<Position>({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const [, drag] = useDrag({
    item: { type: "box" },
    end: (_item, monitor) => {
      const offset = monitor.getDifferenceFromInitialOffset();
      if (offset) {
        setPosition((prevPosition) => ({
          x: prevPosition.x + offset.x,
          y: prevPosition.y + offset.y,
        }));
      }
    },
    type: "Corbeille",
  });

  return (
    visibility && (
      <>
        <div
          ref={drag}
          style={{ left: `${position.x}px`, top: `${position.y}px` }}
          className="absolute bg-[#202020] border-neutral-700 w-8/12 h-4/5 text-white rounded-xl overflow-hidden -translate-x-1/2 -translate-y-1/2 flex flex-col z-30"
        >
          <div className="w-full flex justify-between pl-2 h-12 items-center">
            <div className="flex gap-1 items-center h-full">
              <div>
                <Image
                  loading="eager"
                  width={50}
                  height={50}
                  src="/bin.png"
                  alt="Corbeille"
                  className="p-1 w-8"
                />
              </div>
              <h2 className="text-[12px] font-medium">
                Corbeille - Windows Explorer
              </h2>
            </div>
            <div className="flex items-center">
              <div
                className="w-12 h-10 hover:bg-white/10 flex justify-center items-center"
                onClick={setVisible}
              >
                <div>
                  <Image
                    loading="eager"
                    width={50}
                    height={50}
                    src="/minus.png"
                    alt="close window"
                    className="p-1 w-7"
                  />
                </div>
              </div>
              <div
                className="w-12 h-10 hover:bg-white/10 flex justify-center items-center"
              >
                <div>
                  <Image
                    loading="eager"
                    width={50}
                    height={50}
                    src="/square.png"
                    alt="Maximize window"
                    className="p-1.5 w-7"
                  />
                </div>
              </div>
              <div
                className="w-12 h-10 hover:bg-red-600 flex justify-center items-center"
                onClick={setDestroy}
              >
                <div>
                  <Image
                    loading="eager"
                    width={50}
                    height={50}
                    src="/close.png"
                    alt="close window"
                    className="p-1.5 w-7"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-evenly h-10 my-2">
            <div className="flex items-center gap-1">
              <div>
                <Image
                  loading="eager"
                  width={50}
                  height={50}
                  src="/projects/arrow-neutral.png"
                  alt="Back"
                  className="p-0.5 w-7 -rotate-90 hover:bg-neutral-800/80 rounded"
                />
              </div>
              <div>
                <Image
                  loading="eager"
                  width={50}
                  height={50}
                  src="/projects/arrow-neutral.png"
                  alt="Next"
                  className="p-0.5 w-7 rotate-90 hover:bg-neutral-800/80 rounded"
                />
              </div>
              <div>
                <Image
                  loading="eager"
                  width={50}
                  height={50}
                  src="/projects/chevron.png"
                  alt="Down Chevron"
                  className="p-1 w-7 rotate-90 hover:bg-neutral-800/80 rounded"
                />
              </div>
              <div>
                <Image
                  loading="eager"
                  width={50}
                  height={50}
                  src="/projects/arrow-white.png"
                  alt="close window"
                  className="p-1 w-7"
                />
              </div>
            </div>
            <div className="flex justify-between h-full items-center text-xs font-medium w-7/12 border-[0.2px] border-neutral-600 px-2 bg-transparent text-white outline-none">
            <div className="flex items-center h-full">
                <div>
                  <Image
                    loading="eager"
                    width={50}
                    height={50}
                    src="/bin.png"
                    alt="Corbeille"
                    className="p-1 w-7"
                  />
                </div>
                <div>
                  <Image
                    loading="eager"
                    width={50}
                    height={50}
                    src="/up.png"
                    alt=">"
                    className="p-2.5 w-7 rotate-90"
                  />
                </div>
                <span>Corbeille</span>

              </div>
              <div className="flex items-center gap-1">
                <div>
                  <Image
                    loading="eager"
                    width={50}
                    height={50}
                    src="/projects/chevron.png"
                    alt="Down Chevron"
                    className="p-1 w-7 rotate-90 hover:bg-neutral-800/80 rounded"
                  />
                </div>
                <div>
                  <Image
                    loading="eager"
                    width={50}
                    height={50}
                    src="/projects/reload.png"
                    alt="Reload"
                    className="p-1 w-7 hover:bg-neutral-800/80 rounded"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 h-full w-3/12 border-[0.2px] border-neutral-600 px-2">
              <div>
                <Image
                  loading="eager"
                  width={50}
                  height={50}
                  src="/projects/search.png"
                  alt="Search"
                  className="w-7 p-1 rotate-90"
                />
              </div>
              <input
                placeholder="Rechercher"
                type="text"
                className="text-sm w-full h-full bg-transparent text-white outline-none"
              />
            </div>
          </div>
          <div className="flex w-full h-full bg-[#191919]">
          <div className="min-w-3/12 max-w-3/12 w-3/12 h-full flex flex-col gap-5 py-2 border-r border-neutral-700 font-medium">
              <Favoris />
              <PC />
            </div>
            <div className="min-w-3/5 max-w-3/5 w-3/5 h-full">
              <div className="p-4 z-10 flex flex-wrap gap-2">
                {corbeilleJSON.map((corbeille: Corbeille, number) => (
                  <button
                    key={number}
                    onClick={() => setElement("1")}
                    onBlur={() => setElement(null)}
                    className="cursor-pointer hover:bg-[#4D4D4D] focus:bg-[#4D4D4D] rounded w-20 flex flex-col gap-2 text-center items-center py-1 z-20"
                  >
                    <div className="h-full">
                      <Image
                        loading="eager"
                        width={96}
                        height={96}
                        src={corbeille.thumbnailPath}
                        alt={corbeille.name}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <span className="text-xs font-medium text-white">
                      {corbeille.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="h-8 bg-[#1C1C1C] w-full flex gap-2 py-1 pl-2 items-center text-xs">
            {corbeilleJSON.length} element(s)
            <span>|</span>
            {element ? element : "Aucun"} élément sélectionné
          </div>
        </div>
      </>
    )
  );
}
