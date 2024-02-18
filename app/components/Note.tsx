import Image from "next/image";

export default function Note() {
  return (
    <div className="absolute right-5 top-5 w-72 h-44 rounded-md bg-[#202020] overflow-hidden">
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
          <div className="hover:bg-neutral-500/20 h-full w-8 pr-1 flex items-center justify-center">
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
  );
}
