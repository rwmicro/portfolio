import Image from "next/image";
import { useDrag } from "react-dnd";
import { useState } from "react";

interface CVProps {
  visibility: boolean;
  setVisible: () => void;
  setDestroy: () => void;
}

interface Position {
  x: number;
  y: number;
}

export default function CV({ visibility, setVisible, setDestroy }: CVProps) {
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
    type: "CV",
  });

  return (
    visibility && (
      <>
        <div
          ref={drag}
          style={{ left: `${position.x}px`, top: `${position.y}px` }}
          className="absolute border border-neutral-700 w-6/12 h-5/6 bg-neutral-900/90 glass text-white rounded-xl overflow-hidden -translate-x-1/2 -translate-y-1/2 flex flex-col z-30 "
        >
          <div className="w-full flex justify-between pl-2 h-12 items-center">
            <div className="flex gap-1 items-center h-full">
              <div>
                <Image
                  loading="eager"
                  width={50}
                  height={50}
                  src="/adobe.png"
                  alt="Adobe"
                  className="p-1 w-8"
                />
              </div>
              <h2 className="text-[12px] font-medium">
                CV - Adobe Acrobat Reader
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
          <div className="h-9 w-full flex justify-between pr-2 items-center">
            <div className="flex gap-1 items-center text-xs">
              <span className="flex items-center hover:bg-neutral-700/70 px-2 h-9">Fichier</span>
              <span className="flex items-center hover:bg-neutral-700/70 px-2 h-9">Edition</span>
              <span className="flex items-center hover:bg-neutral-700/70 px-2 h-9">View</span>
              <span className="flex items-center hover:bg-neutral-700/70 px-2 h-9">Fenêtres</span>
              <span className="flex items-center hover:bg-neutral-700/70 px-2 h-9">Aide</span>
            </div>
            <div>
              <Image
                loading="eager"
                width={50}
                height={50}
                src="/settings.png"
                alt="close window"
                className="p-1 w-7 rounded hover:bg-white/10"
              />
            </div>
          </div>
          <div className="h-full w-full bg-neutral-600">
            <embed
              src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
              className="w-full h-full"
            />
          </div>
        </div>
      </>
    )
  );
}
