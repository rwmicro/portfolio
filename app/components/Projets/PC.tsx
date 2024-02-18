import Image from "next/image";

export default function PC() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center align-middle w-11/12 hover:bg-neutral-800 rounded">
        <div>
          <Image
            loading="eager"
            width={50}
            height={50}
            src="/up.png"
            alt="Desktop"
            className="w-5 p-1 rotate-180"
          />
        </div>
        <Image
          loading="eager"
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
            loading="eager"
            width={50}
            height={50}
            src="/projects/chevron.png"
            alt="Desktop"
            className="w-5 p-0.5"
          />
        </div>
        <Image
          loading="eager"
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
            loading="eager"
            width={50}
            height={50}
            src="/projects/chevron.png"
            alt="Desktop"
            className="w-5 p-0.5"
          />
        </div>
        <Image
          loading="eager"
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
            loading="eager"
            width={50}
            height={50}
            src="/projects/chevron.png"
            alt="Desktop"
            className="w-5 p-0.5"
          />
        </div>
        <Image
          loading="eager"
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
            loading="eager"
            width={50}
            height={50}
            src="/projects/chevron.png"
            alt="Desktop"
            className="w-5 p-0.5"
          />
        </div>
        <Image
          loading="eager"
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
            loading="eager"
            width={50}
            height={50}
            src="/projects/chevron.png"
            alt="Desktop"
            className="w-5 p-0.5"
          />
        </div>
        <Image
          loading="eager"
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
            loading="eager"
            width={50}
            height={50}
            src="/projects/chevron.png"
            alt="Desktop"
            className="w-5 p-0.5"
          />
        </div>
        <Image
          loading="eager"
          width={50}
          height={50}
          src="/projects/movies.png"
          alt="Videos"
          className="p-1 w-7 rounded"
        />
        <span className="text-xs">Vidéos</span>
      </div>
    </div>
  );
}
