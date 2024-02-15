"use client";
import Menu from "./components/Menu";
import update from "immutability-helper";
import { Suspense, useCallback, useState } from "react";
import type { XYCoord } from "react-dnd";
import { useDrop } from "react-dnd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import type { FC } from "react";
import { useDrag } from "react-dnd";
import Image from "next/image";
import CV from "./components/CV";
import Projects from "./components/Project";
import Corbeille from "./components/Corbeille";
import Loading from "./loading";

const ItemTypes = {
  BOX: "box",
};

export interface BoxProps {
  id: any;
  left: number;
  top: number;
  hideSourceOnDrag?: boolean;
  title: string;
  image_src: string;
  link: string;
}

// https://www.figma.com/community/file/990081556171733873/windows-11-mockup-by-presently

function Index() {
  const Box: FC<BoxProps> = ({ id, left, top, title, image_src, link }) => {
    const [{ isDragging }, drag] = useDrag(
      () => ({
        type: ItemTypes.BOX,
        item: { id, left, top },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
      }),
      [id, left, top]
    );

    if (isDragging) {
      return <div ref={drag} />;
    }
    return (
      <div
        ref={drag}
        style={{ left, top }}
        data-testid="box"
        className="absolute cursor-pointer hover:bg-blue-900 rounded w-20 h-20 flex flex-col text-center items-center py-1"
        onClick={() => openElement(link)}
      >
        <div className="h-full">
          <Image
            width={48}
            height={48}
            src={image_src}
            alt={title}
            className="w-14 h-14 p-1 object-contain"
          />
        </div>
        <span className="text-xs font-medium text-white">{title}</span>
      </div>
    );
  };
  function openElement(url: string) {
    if (url === "resume") {
      setCv(true);
      return;
    }
    if (url === "projets") {
      setProjet(true);
      return;
    }
    if (url === "corbeille") {
      setWindowState(true);
      return;
    }
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (win) {
      win.focus();
    }
  }
  const date = new Date();
  const [menu, setMenu] = useState(false);
  const [cv, setCv] = useState(false);
  const [projet, setProjet] = useState(false);
  const [windowState, setWindowState] = useState(false);

  const [boxes, setBoxes] = useState<{
    [key: string]: {
      top: number | undefined;
      left: number | undefined;
      title: string;
      image_src: string;
      link: string;
    };
  }>({
    a: {
      top: 5,
      left: 5,
      title: "Projets",
      image_src: "/folder.png",
      link: "projets",
    },
    b: {
      top: 90,
      left: 5,
      title: "CV",
      image_src: "/adobe.png",
      link: "resume",
    },
    c: {
      top: 175,
      left: 5,
      title: "GitHub",
      image_src: "/github.png",
      link: "https://www.github.com/rwmicro/",
    },
    d: {
      top: 260,
      left: 5,
      title: "Linkedin",
      image_src: "/linkedin.png",
      link: "https://www.linkedin.com/in/mrgx/",
    },
    e: {
      top: 345,
      left: 5,
      title: "Corbeille",
      image_src: "/bin.png",
      link: "corbeille",
    },
  });
  interface DragItem {
    type: string;
    id: string;
    top: number;
    left: number;
  }

  const moveBox = useCallback(
    (id: string, left: number, top: number) => {
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left, top },
          },
        })
      );
    },
    [boxes, setBoxes]
  );

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.BOX,
      drop(item: DragItem, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        moveBox(item.id, left, top);
        return undefined;
      },
    }),
    [moveBox]
  );

  return (
    <>
      {menu && (
        <>
          <div
            className="h-full w-full absolute bottom-0 left-0 z-30"
            onClick={() => setMenu(false)}
          ></div>
          <Menu />
        </>
      )}
      {cv && (
        <CV
          visibility={cv}
          setVisible={() => {
            setCv(!cv);
          }}
        />
      )}
      {projet && (
        <Projects
          visibility={projet}
          setVisible={() => {
            setProjet(!projet);
          }}
        />
      )}
      {windowState && (
        <Corbeille
          visibility={windowState}
          setVisible={() => {
            setWindowState(!windowState);
          }}
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
              onClick={() => setMenu(!menu)}
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
            {windowState && (
              <div
                onClick={() => {
                  setWindowState(!windowState);
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

            {cv && (
              <div
                onClick={() => {
                  setCv(!cv);
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
            {projet && (
              <div
                onClick={() => {
                  setProjet(!projet);
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
          const { left, top, title, image_src, link } = boxes[key] as {
            top: number;
            left: number;
            title: string;
            image_src: string;
            link: string;
          };
          return (
            <div>
              <Box
                key={key}
                id={key}
                left={left}
                top={top}
                title={title}
                image_src={image_src}
                link={link}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

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
