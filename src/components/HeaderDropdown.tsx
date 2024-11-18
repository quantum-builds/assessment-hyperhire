"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { DownNavIcon } from "@/assets/icons";

export default function HeaderDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="flex items-center gap-16 text-white font-black">
        <button
          className="text-white focus:outline-none font-black flex items-center gap-2"
          onClick={toggleDropdown}
        >
          채용
          <Image src={DownNavIcon} alt="Down nav icon" width={16} height={16} />
        </button>
        <p>해외 개발자 활용 서비스</p>
      </div>

      {isOpen && (
        <ul className="absolute left-0 mt-2 w-fit bg-white border border-gray-300 rounded-md shadow-lg z-10">
          <li>
            <Link
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-100 text-nowrap"
            >
              채용
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-100 text-nowrap"
            >
              해외 개발자 원격 채용
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-100 text-nowrap"
            >
              외국인 원격 채용 (비개발 직군)
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-100 text-nowrap"
            >
              한국어 가능 외국인 채용
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
