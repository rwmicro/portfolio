import Image from "next/image";
import { useDrag } from "react-dnd";
import { useState } from "react";
export default function CV({
  visibility,
  setVisible,
  setDestroy,
}: {
  visibility: boolean;
  setVisible: any;
  setDestroy: any;
}) {
  const [position, setPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const [, drag] = useDrag({
    item: { type: "box" },
    end: (_item, monitor) => {
      const offset = monitor.getDifferenceFromInitialOffset();
      if (offset) {
        setPosition({
          x: position.x + offset.x,
          y: position.y + offset.y,
        });
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
          className="absolute border border-neutral-700 w-6/12 h-4/5 text-white rounded-xl overflow-hidden -translate-x-1/2 -translate-y-1/2 flex flex-col z-30 "
        >
          <div className="h-10 w-full bg-neutral-900/80 glass flex justify-between pl-2 items-center">
            <div className="flex gap-1 items-center h-full">
              <div>
                <Image
                  width={96}
                  height={96}
                  src="/adobe.png"
                  alt="close window"
                  className="p-1 w-7"
                />
              </div>
              <h2 className="text-[12px] font-medium">
                CV - Adobe Acrobat Reader
              </h2>
            </div>
            <div className="flex items-center">
              <div
                className="w-12 hover:bg-white/10 flex justify-center"
                onClick={setVisible}
              >
                <Image
                  width={50}
                  height={50}
                  src="/minus.png"
                  alt="close window"
                  className="p-1 w-7"
                />
              </div>
              <div className="w-12 hover:bg-white/10 flex justify-center">
                <Image
                  width={50}
                  height={50}
                  src="/square.png"
                  alt="close window"
                  className="p-1.5 w-7"
                />
              </div>
              <div
                className="w-12 hover:bg-red-600 flex justify-center"
                onClick={setDestroy}
              >
                <Image
                  width={50}
                  height={50}
                  src="/close.png"
                  alt="close window"
                  className="p-1.5 w-7 h-full"
                />
              </div>
            </div>
          </div>
          <div className="h-8 bg-neutral-900/80 glass w-full flex justify-between px-2 items-center">
            <div className="flex gap-1 items-center text-xs">
              <span className="p-1">File</span>
              <span className="p-1">Edit</span>
              <span className="p-1">View</span>
              <span className="p-1">Windows</span>
              <span className="p-1">Help</span>
            </div>
            <div>
              <Image
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
