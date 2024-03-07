import Image from "next/image";
import { useEffect, useState } from "react";
import { XYCoord, useDrag } from "react-dnd";
interface Position {
  x: number;
  y: number;
}

export default function Note() {
  const [visible, setVisible] = useState(false);

  const [position, setPosition] = useState<Position>({
    x: 0,
    y: 15,
  });
  
  // Revoir cette partie
  useEffect(() => {

    if (typeof window !== "undefined") {
      setPosition((prevPosition) => ({
        x: window.innerWidth - 298,
        y: prevPosition.y,
      }));
    }
    setVisible(true);

  }, []);

  const [, drag] = useDrag({
    item: { type: "box" },
    end: (_item, monitor) => {
      const offset = monitor.getDifferenceFromInitialOffset() as XYCoord;
      if (offset) {
        setPosition((prevPosition) => ({
          x: prevPosition.x + offset.x,
          y: prevPosition.y + offset.y,
        }));
      }
    },
    type: "Note",
  });
  return (
    visible && (
      <div
        ref={drag}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
        className="absolute w-72 h-44 rounded-md bg-[#202020] overflow-hidden z-40"
      >
        <div className="bg-[#ffb703] h-8 flex items-center justify-between">
          <div className="hover:bg-neutral-500/20 h-full w-8 flex items-center justify-center">
            <Image
              src="/plus.png"
              width={45}
              height={45}
              alt="Points"
              className="w-5"
            />
          </div>
          <div className="flex items-center gap-2 h-full">
            <div className="hover:bg-neutral-500/20 h-full w-8 flex items-center justify-center">
              <Image
                src="/points.png"
                width={45}
                height={45}
                alt="Points"
                className="w-6 rotate-90"
              />
            </div>
            <div
              className="hover:bg-neutral-500/20 h-full w-8 pr-1 flex items-center justify-center"
              onClick={() => setVisible(false)}
            >
              <Image
                src="/close_b.png"
                width={45}
                height={45}
                alt="Fermer"
                className="w-5"
              />
            </div>
          </div>
        </div>
        <textarea
          className="w-full bg-transparent p-2 text-white outline-none resize-none"
          placeholder="Bienvenue sur mon portfolio !"
        ></textarea>
      </div>
    )
  );
}
