"use client";
import React, { useState, useCallback, useEffect, Suspense } from "react";
import { XYCoord, useDrop } from "react-dnd";
import Image from "next/image";
import Menu from "./components/Menu";
import CV from "./components/CV";
import Projects from "./components/Project";
import Corbeille from "./components/Corbeille";
import Loading from "./components/loading";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Icon from "./components/Icon";
import iconsJSON from "../public/icons.json";

const Index: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [cvVisible, setCvVisible] = useState<boolean | null>(null);
  const [projectsVisible, setProjectsVisible] = useState<boolean | null>(null);
  const [corbeilleVisible, setCorbeilleVisible] = useState<boolean | null>(
    null
  );
  const [isMobile, setIsMobile] = useState(false);
  const [boxes, setBoxes] = useState<{
    [key: string]: {
      top: number;
      left: number;
      title: string;
      image_src: string;
      link: string;
    };
  }>(iconsJSON);

  useEffect(() => {
    if (window.innerWidth < 1024) setIsMobile(true);
  }, []);

  const handleOpenElement = (url: string) => {
    if (url === "resume") {
      setCvVisible(true);
    } else if (url === "projets") {
      setProjectsVisible(true);
    } else if (url === "corbeille") {
      setCorbeilleVisible(true);
    } else {
      const win = window.open(url, "_blank", "noopener,noreferrer");
      if (win) {
        win.focus();
      }
    }
  };

  const handleDrop = useCallback(
    (id: string, left: number, top: number) => {
      setBoxes((prevBoxes) => ({
        ...prevBoxes,
        [id]: { ...prevBoxes[id], left, top },
      }));
    },
    [setBoxes]
  );

  const [, drop] = useDrop(() => ({
    accept: "box",
    drop(item: any, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset() || { x: 0, y: 0 };
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      handleDrop(item.id, left, top);
    },
  }));

  const date = new Date();

  if (isMobile) {
    return (
      <p className="absolute left-1/2 top-1/2 text-center -translate-x-1/2 -translate-y-1/2 text-black">
        Merci de consulter ce site sur un ordinateur
      </p>
    );
  }

  return (
    <>
      {menuVisible && (
        <>
          <div
            className="h-full w-full absolute bottom-0 left-0 z-40"
            onClick={() => setMenuVisible(false)}
          ></div>
          <Menu />
        </>
      )}
      {cvVisible && (
        <CV
          visibility={cvVisible}
          setVisible={() => setCvVisible(!cvVisible)}
          setDestroy={() => setCvVisible(null)}
        />
      )}
      {projectsVisible && (
        <Projects
          visibility={projectsVisible}
          setVisible={() => setProjectsVisible(!projectsVisible)}
          setDestroy={() => setProjectsVisible(null)}
        />
      )}
      {corbeilleVisible && (
        <Corbeille
          visibility={corbeilleVisible}
          setVisible={() => setCorbeilleVisible(!corbeilleVisible)}
          setDestroy={() => setCorbeilleVisible(null)}
        />
      )}

      <Image
        fill
        className="object-cover -z-10"
        src="/background.jpg"
        alt="background_windows"
        quality={100}
      />
      <div className="bg-black/80 h-14 w-full absolute bottom-0 flex items-center">
        <div className="flex justify-around items-center w-full h-full">
          <div className="flex gap-2 items-center">
            <Image
              width={48}
              height={48}
              src="/menu.png"
              alt="logo"
              className="p-0.5 rounded hover:bg-white/10 z-50"
              quality={100}
              onClick={() => setMenuVisible(!menuVisible)}
            />
            <div className="h-10 w-52 bg-white/10 rounded-full hover:bg-white/15 text-neutral-500 flex items-center pl-3">
              {" "}
              <Image
                width={32}
                height={32}
                src="/hand.png"
                alt="logo"
                className="p-0.5 mr-1 rounded "
              />
              My portfolio!
            </div>
            {corbeilleVisible !== null && (
              <div
                onClick={() => {
                  setCorbeilleVisible(!corbeilleVisible);
                }}
              >
                <Image
                  width={48}
                  height={48}
                  src="/bin.png"
                  alt="logo"
                  className="p-1 rounded bg-white/10"
                />
              </div>
            )}

            {cvVisible !== null && (
              <div
                onClick={() => {
                  setCvVisible(!cvVisible);
                }}
              >
                <Image
                  width={48}
                  height={48}
                  src="/adobe.png"
                  alt="logo"
                  className="p-1 rounded bg-white/10"
                />
              </div>
            )}
            {projectsVisible !== null && (
              <div
                onClick={() => {
                  setProjectsVisible(!projectsVisible);
                }}
              >
                <Image
                  width={48}
                  height={48}
                  src="/folder.png"
                  alt="logo"
                  className="p-1 rounded bg-white/10"
                />
              </div>
            )}
          </div>
          <div className="absolute right-5 flex gap-1 items-center h-full">
            <div>
              <Image
                width={20}
                height={20}
                src="/up.png"
                alt="Up Chevron"
                className="p-0.5 rounded hover:bg-white/10"
              />
            </div>
            <div>
              <Image
                width={24}
                height={24}
                src="/wifi.png"
                alt="logo"
                className="p-0.5 rounded hover:bg-white/10"
              />
            </div>
            <div>
              <Image
                width={24}
                height={24}
                src="/speakers.png"
                alt="logo"
                className="p-0.5 rounded hover:bg-white/10"
              />
            </div>
            <div>
              <Image
                width={24}
                height={24}
                src="/battery.png"
                alt="logo"
                className="p-0.5 rounded hover:bg-white/10"
              />
            </div>

            <div className="flex flex-col justify-center text-white text-xs">
              <span>
                {date.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
              <span>{date.toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>
      <div ref={drop} className="w-full h-screen">
        {Object.keys(boxes).map((key) => {
          const { left, top, title, image_src, link } = boxes[key];
          return (
            <Icon
              key={key}
              id={key}
              left={left}
              top={top}
              title={title}
              image_src={image_src}
              link={link}
              openElement={handleOpenElement}
            />
          );
        })}
      </div>
    </>
  );
};

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <DndProvider backend={HTML5Backend}>
          <Index />
        </DndProvider>
      </Suspense>
    </>
  );
}
