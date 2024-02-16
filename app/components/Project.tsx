import Image from "next/image";
import projectsJSON from "../../public/projects/projects.json";
import { useState } from "react";
import Link from "next/link";
import { useDrag } from "react-dnd";

type Project = {
  name: string;
  title: string;
  description: string;
  date: string;
  imagePath: string;
  thumbnailPath: string;
  repo_link: string;
  tools: { id: number; name: string }[];
};

export default function Projects({
  visibility,
  setVisible,
  setDestroy,
}: {
  visibility: boolean;
  setVisible: any;
  setDestroy: any;
}) {
  const [project, setProject] = useState<Project>();
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
    type: "Project",
  });
  return (
    visibility && (
      <>
        <div
          ref={drag}
          style={{ left: `${position.x}px`, top: `${position.y}px` }}
          className="absolute bg-[#202020] border-neutral-700 w-8/12 h-4/5 text-white rounded-xl overflow-hidden -translate-x-1/2 -translate-y-1/2 flex flex-col z-30"
        >
          <div className="h-10 w-full flex justify-between pl-2 items-center">
            <div className="flex gap-1 items-center h-full">
              <div>
                <Image
                  width={50}
                  height={50}
                  src="/explorer.png"
                  alt="close window"
                  className="p-1 w-7"
                />
              </div>
              <h2 className="text-[12px] font-medium">
                Projets - Windows Explorer
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
          <div className="flex justify-evenly h-10 my-2">
            <div className="flex items-center gap-1">
              <div>
                <Image
                  width={50}
                  height={50}
                  src="/projects/arrow-neutral.png"
                  alt="Back"
                  className="p-0.5 w-7 -rotate-90 hover:bg-neutral-800/80 rounded"
                />
              </div>
              <div>
                <Image
                  width={50}
                  height={50}
                  src="/projects/arrow-neutral.png"
                  alt="Next"
                  className="p-0.5 w-7 rotate-90 hover:bg-neutral-800/80 rounded"
                />
              </div>
              <div>
                <Image
                  width={50}
                  height={50}
                  src="/projects/chevron.png"
                  alt="Down chevron"
                  className="p-1 w-7 rotate-90 hover:bg-neutral-800/80 rounded"
                />
              </div>
              <div>
                <Image
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
                    width={50}
                    height={50}
                    src="/folder.png"
                    alt="close window"
                    className="p-1 w-7"
                  />
                </div>
                <div>
                  <Image
                    width={50}
                    height={50}
                    src="/up.png"
                    alt="close window"
                    className="p-1.5 w-7 rotate-90"
                  />
                </div>
                <span>C:/portfolio/projets</span>
              </div>

              <div className="flex items-center gap-1">
                <div>
                  <Image
                    width={50}
                    height={50}
                    src="/projects/chevron.png"
                    alt="Down Chevron"
                    className="p-1 w-7 rotate-90 hover:bg-neutral-800/80 rounded"
                  />
                </div>
                <div>
                  <Image
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
                  width={50}
                  height={50}
                  src="/projects/search.png"
                  alt="Search"
                  className="w-7 p-1"
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
            <div className="w-1/5 min-w-1/5 max-w-1/5 h-full flex flex-col items-center py-2 border-r border-neutral-700 font-medium">
              <div className="flex items-center align-middle w-11/12 hover:bg-neutral-800 rounded">
                <div>
                  <Image
                    width={50}
                    height={50}
                    src="/up.png"
                    alt="Desktop"
                    className="w-5 p-0.5 rotate-180"
                  />
                </div>
                <Image
                  width={50}
                  height={50}
                  src="/projects/pc.png"
                  alt="Desktop"
                  className="p-1 w-7 rounded"
                />
                <span className="text-xs">Ce PC</span>
              </div>
              <div className="flex items-center align-middle w-11/12 hover:bg-neutral-800 rounded px-3">
                <div>
                  <Image
                    width={50}
                    height={50}
                    src="/projects/chevron.png"
                    alt="Desktop"
                    className="w-5 p-0.5"
                  />
                </div>
                <Image
                  width={50}
                  height={50}
                  src="/projects/desktop.png"
                  alt="Desktop"
                  className="p-1 w-7 rounded"
                />
                <span className="text-xs">Bureau</span>
              </div>
              <div className="flex items-center align-middle w-11/12 hover:bg-neutral-800 rounded px-3">
                <div>
                  <Image
                    width={50}
                    height={50}
                    src="/projects/chevron.png"
                    alt="Desktop"
                    className="w-5 p-0.5"
                  />
                </div>
                <Image
                  width={50}
                  height={50}
                  src="/projects/download.png"
                  alt="Downloads"
                  className="p-1 w-7 rounded"
                />
                <span className="text-xs">Téléchargements</span>
              </div>
              <div className="flex items-center align-middle w-11/12 hover:bg-neutral-800 rounded px-3">
                <div>
                  <Image
                    width={50}
                    height={50}
                    src="/projects/chevron.png"
                    alt="Desktop"
                    className="w-5 p-0.5"
                  />
                </div>
                <Image
                  width={50}
                  height={50}
                  src="/projects/document.png"
                  alt="Documents"
                  className="p-1 w-7 rounded"
                />
                <span className="text-xs">Documents</span>
              </div>
              <div className="flex items-center align-middle w-11/12 hover:bg-neutral-800 rounded px-3">
                <div>
                  <Image
                    width={50}
                    height={50}
                    src="/projects/chevron.png"
                    alt="Desktop"
                    className="w-5 p-0.5"
                  />
                </div>
                <Image
                  width={50}
                  height={50}
                  src="/projects/pictures.png"
                  alt="Pictures"
                  className="p-1 w-7 rounded"
                />
                <span className="text-xs">Images</span>
              </div>
              <div className="flex items-center align-middle w-11/12 hover:bg-neutral-800 rounded px-3">
                <div>
                  <Image
                    width={50}
                    height={50}
                    src="/projects/chevron.png"
                    alt="Desktop"
                    className="w-5 p-0.5"
                  />
                </div>
                <Image
                  width={50}
                  height={50}
                  src="/projects/music.png"
                  alt="up"
                  className="p-1 w-7 rounded"
                />
                <span className="text-xs">Musique</span>
              </div>
              <div className="flex items-center align-middle w-11/12 hover:bg-neutral-800 rounded px-3">
                <div>
                  <Image
                    width={50}
                    height={50}
                    src="/projects/chevron.png"
                    alt="Desktop"
                    className="w-5 p-0.5"
                  />
                </div>
                <Image
                  width={50}
                  height={50}
                  src="/projects/movies.png"
                  alt="Videos"
                  className="p-1 w-7 rounded"
                />
                <span className="text-xs">Vidéos</span>
              </div>
            </div>
            <div className="min-w-3/5 max-w-3/5 w-3/5 h-full">
              <div className="p-4 z-10 flex flex-wrap gap-2">
                {projectsJSON.map((projectJson: Project, number) => (
                  <div
                    key={number}
                    onClick={() => {
                      setProject(projectJson);
                    }}
                    className="cursor-pointer hover:bg-[#4D4D4D] rounded w-20 flex flex-col gap-2 text-center items-center py-1"
                  >
                    <div className="h-full">
                      <Image
                        width={96}
                        height={96}
                        src={projectJson.thumbnailPath}
                        alt={projectJson.name}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <span className="text-xs font-medium text-white">
                      {projectJson.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {project && (
              <div className="min-w-2/5 max-w-2/5 w-2/5 h-full p-7 border-l border-neutral-700">
                <span className="text-xl font-bold">{project.title}</span>
                <div className="py-3">
                  <Image
                    width={300}
                    height={300}
                    src={project.imagePath}
                    alt=""
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 pt-5 text-sm">
                    <span className=" font-bold">Mots clés : </span>
                    {project.tools.map((tool, number) => (
                      <span key={number} className="text-neutral-400">
                        {tool.name}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm">
                    <span className="font-bold">Date de création :</span>
                    <span> {project.date}</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-bold">Description :</span>
                    <span> {project.description}</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-bold">Lien vers le projet :</span>
                    <Link
                      href={project.repo_link}
                      className="text-blue-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      c'est ici!
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="h-8 bg-[#1C1C1C] w-full flex gap-2 py-1 pl-2 items-center text-xs">
            {projectsJSON.length} element(s)
            <span>|</span>
          </div>
        </div>
      </>
    )
  );
}
