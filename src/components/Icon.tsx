import React from "react";
import { useDrag } from "react-dnd";
import Image from "next/image";

interface IconProps {
  id: string;
  left: number;
  top: number;
  title: string;
  image_src: string;
  link: string;
  openElement: (url: string) => void;
}

const Icon: React.FC<IconProps> = ({
  id,
  left,
  top,
  title,
  image_src,
  link,
  openElement,
}) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "box",
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top]
  );

  const handleBoxClick = () => {
    openElement(link);
  };

  return (
    <div
      ref={drag}
      style={{ left, top }}
      className="absolute cursor-pointer hover:bg-blue-900 rounded w-20 h-20 flex flex-col text-center items-center py-1"
      onClick={handleBoxClick}
    >
      <div className="h-full">
        <Image
          loading="eager"
          width={256}
          height={256}
          src={image_src}
          alt={title}
          className="w-14 h-14 p-1 object-contain"
        />
      </div>
      <span className="text-xs font-medium text-white">{title}</span>
    </div>
  );
};

export default Icon;
