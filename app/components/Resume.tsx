import Image from "next/image";
// https://blogs.windows.com/wp-content/uploads/prod/sites/44/2021/12/NotepadLightHero.png
export default function Resume() {
  return (
    <>
      <div className="absolute bg-black w-5/12 h-4/5 rounded-xl overflow-hidden left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-30">
        <div className="h-8 bg-white w-full flex justify-between px-2 items-center">
          <div className="flex gap-1 items-center">
            <Image
              width={50}
              height={50}
              src="/résume.png"
              alt="close window"
              className="p-0.5 w-7 rounded hover:bg-white/10"
            />

            <h2 className="text-xs">Resume - Notepad</h2>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <Image
                width={50}
                height={50}
                src="/minus.png"
                alt="close window"
                className="p-1 w-7 rounded hover:bg-white/10"
              />
            </div>
            <div>
              <Image
                width={50}
                height={50}
                src="/square.png"
                alt="close window"
                className="p-1.5 w-7 rounded hover:bg-white/10"
              />
            </div>
            <div>
              <Image
                width={50}
                height={50}
                src="/close.png"
                alt="close window"
                className="p-1.5 w-7 rounded hover:bg-white/10"
              />
            </div>
          </div>
        </div>
        <div className="h-8 bg-white w-full flex justify-between px-2 items-center">
          <div className="flex gap-1 items-center text-xs">
            <span className="p-1">File</span>
            <span className="p-1">Edit</span>
            <span className="p-1">View</span>
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eos
        dolores amet blanditiis provident animi ut ab rerum beatae, culpa
        aliquam quidem repudiandae, consequuntur nulla fugit. Itaque ex nobis
        porro.
      </div>
    </>
  );
}
