import Image from "next/image";
import stackJSON from "../../public/menu/stack.json";
export default function Menu() {
  return (
    <>
      <div className="absolute h-3/5 w-[35rem] bottom-16 left-1/2 -translate-x-1/2 rounded-xl overflow-hidden z-40">
        <div className="glass bg-neutral-900/60 p-8 h-full">
          <div className="flex items-center rounded p-1 text-xs font-semibold gap-2 text-neutral-400 border-b-2 border-b-[#08a1f7] bg-black">
            <Image
              width={50}
              height={50}
              src="/menu/search.png"
              alt="close window"
              className="p-1.5 w-7 rounded hover:bg-white/10"
            />
            <input
              type="text"
              placeholder="Type here your seach..."
              className="bg-transparent w-full h-full outline-none"
            />
          </div>
          <div className="text-white p-2">
            {stackJSON.map((category, number) => (
              <>
                <div
                  className="flex items-center justify-between"
                  key={number}
                >
                  <h2 className="font-bold">{category.name}</h2>
                  <span className="bg-neutral-700 text-neutral-300 p-1 rounded-md text-[9px] font-bold hover:bg-neutral-600/80">
                    See more
                  </span>
                </div>
                <div className="flex flex-wrap items-center pb-5">
                  {category.stack.map((technology, number) => (
                    <div
                      key={number}
                      className="hover:bg-blue-900 rounded w-20 flex flex-col gap-1 text-center items-center py-1"
                    >
                      <div className="h-full">
                        <Image
                          width={48}
                          height={48}
                          src={technology.imagePath}
                          alt="logo"
                          className="w-10 h-10 p-1 object-contain"
                        />
                      </div>
                      <span className="text-xs font-medium text-white">
                        {technology.name}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            ))}
          </div>

          <div className="bg-neutral-900/60 absolute bottom-0 w-full left-0 px-8 py-3 glass h-20 border-t">
            <div className="flex justify-between text-neutral-200 text-sm font-semibold">
              <div className="flex items-center gap-2">
                <Image
                  width={50}
                  height={50}
                  src="/menu/moi.jpeg"
                  alt="close window"
                  className="p-0.5 w-11 rounded-full"
                />
                <h2>Martin Rigaux</h2>
              </div>
              <Image
                width={50}
                height={50}
                src="/menu/power.png"
                alt="close window"
                className="p-3 w-12 rounded-full brightness-90"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
