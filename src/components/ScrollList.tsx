"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  BoxIcon,
  CallIcon,
  ImageIcon,
  MarketingIcon,
  TargetIcon,
} from "@/assets/icons";

const LIST = [
  { label: "해외 마케팅", image: MarketingIcon },
  { label: "퍼블리셔", image: ImageIcon },
  { label: "캐드원(제도사)", image: BoxIcon },
  { label: "해외 세일즈", image: TargetIcon },
  { label: "해외 세일즈", image: CallIcon },
];

export default function ScrollList() {
  const listRef = useRef<HTMLUListElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (listRef.current) {
        const maxScroll =
          listRef.current.scrollWidth - listRef.current.clientWidth;
        const scrollStep = listRef.current.children[0]?.clientWidth || 0;
        const nextScroll = (scrollIndex + 1) * scrollStep;

        if (nextScroll > maxScroll) {
          setScrollIndex(0);
          listRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          setScrollIndex(scrollIndex + 1);
          listRef.current.scrollTo({
            left: nextScroll,
            behavior: "smooth",
          });
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [scrollIndex]);

  return (
    <ul ref={listRef} className="flex gap-2 overflow-auto hidden-scrollbar">
      {LIST.map((item, index) => (
        <ListItem key={index} label={item.label} image={item.image} />
      ))}
    </ul>
  );
}

interface ListItemProps {
  label: string;
  image: string;
}
export function ListItem({ label, image }: ListItemProps) {
  return (
    <li className="p-[16px] rounded-[12px] min-w-[332px] bg-white bg-opacity-20 flex items-center gap-[24px] ">
      <div className="w-[56px] h-[56px] bg-white bg-opacity-40 rounded-[12px] flex justify-center items-center ">
        <Image src={image} alt={label} width={32} height={32} />
      </div>
      <p className="font-black text-white text-opacity-80">{label}</p>
    </li>
  );
}
