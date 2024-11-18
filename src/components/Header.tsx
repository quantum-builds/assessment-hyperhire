import Image from "next/image";
import { HyperhireIcon } from "@/assets/icons";

import Button from "@/components/Button";
import HeaderDropdown from "@/components/HeaderDropdown";

export default function Header() {
  return (
    <header className="bg-transparent w-full flex justify-between  items-center h-[60px] px-[14%] lg:px-[10%]">
      <Image src={HyperhireIcon} alt="Hypericon logo" width={114} height={21} />
      <HeaderDropdown />
      <Button label="문의하기" />
    </header>
  );
}
