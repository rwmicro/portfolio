import Image from "next/image";
import iconJSON from "../../../public/acces_rapide.json";



export default function Favoris() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center w-11/12 hover:bg-neutral-800 rounded">
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
          src="/projects/etoile.png"
          alt="Etoile"
          className="p-1 w-7 rounded"
        />
        <span className="text-xs">Accès rapide</span>
      </div>
      {iconJSON.map((icon, number) => (
        <div
          key={number}
          className="flex items-center align-middle w-11/12 hover:bg-neutral-800 rounded px-3"
        >
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
            src={icon.image_src}
            alt={icon.title}
            className="p-1 w-7 rounded"
          />
          <span className="text-xs">{icon.title}</span>
        </div>
      ))}
    </div>
  );
}
