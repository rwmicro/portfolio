import Image from "next/image";
import projectsJSON from "../../public/projects/projects.json";
import { useState } from "react";
import Link from "next/link";
import { useDrag } from "react-dnd";
import PC from "./Projets/PC";
import Favoris from "./Projets/Favoris";

type Project = {
  name: string;
  title: string;
  description: string;
  date: string;
  imagePath: string;
  repo_link: string;
  tools: { id: number; name: string }[];
  type: string;
  taille: string;
};

interface ProjectsProps {
  visibility: boolean;
  setVisible: () => void;
  setDestroy: () => void;
}

export default function Projects({
  visibility,
  setVisible,
  setDestroy,
}: ProjectsProps) {
  const [project, setProject] = useState<Project>();
  const [position, setPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const [element, setElement] = useState<string | null>(null);

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
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
          className="absolute window bg-[#202020] border-neutral-700 w-8/12 h-4/5 text-white rounded-xl overflow-hidden -translate-x-1/2  -translate-y-1/2 flex flex-col z-30"
        >
          <div className="w-full flex justify-between pl-2 h-12 items-center">
            <div className="flex gap-1 items-center h-full">
              <div>
                <Image
                  loading="eager"
                  width={50}
                  height={50}
                  src="/folder.png"
                  alt="close window"
                  className="p-1 w-8"
                />
              </div>
              <h2 className="text-[12px] font-medium">
                Projets - Windows Explorer
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
          <div className="flex justify-evenly h-14 py-2 bg-[#191919]">
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
                  alt="Down chevron"
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
            <div className=" flex justify-between h-full items-center text-xs font-medium w-7/12 border-[0.2px] border-neutral-600 px-2 bg-transparent text-white outline-none">
              <div className="flex items-center h-full">
                <div>
                  <Image
                    loading="eager"
                    width={50}
                    height={50}
                    src="/projects/document.png"
                    alt="close window"
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
                <span>Documents</span>
                <div>
                  <Image
                    loading="eager"
                    width={50}
                    height={50}
                    src="/up.png"
                    alt=">_2"
                    className="p-2.5 w-7 rotate-90"
                  />
                </div>
                <span>Projets</span>
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
            <div className="flex items-center gap-1 h-full w-3/12 border border-neutral-600 px-2">
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
                placeholder="Rechercher dans : Projets"
                type="text"
                className="text-xs w-full h-full bg-transparent text-neutral-400 outline-none"
              />
            </div>
          </div>
          <div className="flex w-full h-full bg-[#191919]">
            <div className="min-w-3/12 max-w-3/12 w-3/12 h-full flex flex-col gap-5 py-2 border-r border-neutral-700 font-medium">
              <Favoris />
              <PC />
            </div>
            <div className="min-w-8/12 max-w-8/12 w-8/12 h-full">
              <div className="h-8 items-center flex w-full px-2 text-xs font-medium">
                <div className="w-8/12 pl-4">Nom</div>
                <span className="w-3/12 border-l border-neutral-500 pl-2">
                  Créé le
                </span>
                <span className="w-2/12 border-l border-neutral-500 pl-2">
                  Type
                </span>
                <span className="w-2/12 border-l border-neutral-500 pl-2">
                  Date
                </span>
              </div>
              <div className="p-2 z-10 flex flex-col">
                {projectsJSON.map((projectJson: Project, number) => (
                  <button
                    key={number}
                    onClick={() => {
                      setProject(projectJson);
                      setElement("1");
                    }}
                    onBlur={() => {
                      setElement(null);
                    }}
                    className="cursor-pointer hover:bg-[#353535] w-full flex items-center py-1 px-2 text-sm"
                  >
                    <div className="flex items-center gap-2 w-8/12">
                      <div>
                        <Image
                          loading="eager"
                          width={256}
                          height={256}
                          src="/folder.png"
                          alt={projectJson.name}
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      <span className="text-white">{projectJson.title}</span>
                    </div>

                    <div className="w-3/12 text-start pl-2 text-white">
                      {projectJson.date}
                    </div>
                    <span className="w-2/12 text-start text-white pl-2">
                      {projectJson.type}
                    </span>
                    <span className="w-2/12 text-start text-white pl-2">
                      {projectJson.taille}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            {(project && (
              <div className="min-w-4/12 max-w-4/12 w-4/12 h-full p-7 border-l border-neutral-700">
                <span className="text-xl font-bold">{project.title}</span>
                <div className="py-3">
                  <Image
                    loading="eager"
                    width={300}
                    height={300}
                    src={project.imagePath}
                    alt={project.name}
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
                      ici!
                    </Link>
                  </div>
                </div>
              </div>
            )) || (
              <div className="min-w-4/12 max-w-4/12 w-4/12 h-full p-7 border-l border-neutral-700 flex flex-col items-center">
                <div>
                  <Image
                    loading="eager"
                    width={250}
                    height={250}
                    src="/folder.png"
                    alt="Dossier"
                    className="object-contain"
                  />
                </div>
                <h2 className="text-xl font-bold">Projets</h2>
                <h3> {projectsJSON.length} élément(s)</h3>
              </div>
            )}
          </div>
          <div className="h-8 bg-[#1C1C1C] w-full flex gap-2 py-1 pl-2 items-center text-xs">
            {projectsJSON.length} élément(s)
            <span>|</span>
            {element ? element : "Aucun"} élément sélectionné
          </div>
        </div>
      </>
    )
  );
}
