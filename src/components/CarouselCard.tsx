import React from "react";
import Image from "next/image";
import { ProfileImage } from "@/assets/images";

export default function CarouselCard() {
  return (
    <div className="bg-white text-white p-9 rounded-[12px] flex flex-col justify-center items-center gap-10">
      <ProfileSection />
      <SkillsSection />
    </div>
  );
}

function ProfileSection() {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <Image
        className="rounded-full object-fill"
        src={ProfileImage}
        alt="Profile image"
        height={120}
        width={120}
      />
      <h2 className="font-black text-2xl text-[#24252F] text-nowrap">
        Abhishek Gupta
      </h2>
      <p className="text-[#4A77FF] font-black">마케팅 · 2y+</p>
    </div>
  );
}

function SkillsSection() {
  const skills = [
    "마케팅 콘텐츠 제작",
    "인스타그램 관리",
    "트위터 관리",
    "블로그 글 작성",
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-1">
      {skills.slice(0, 2).map((skill, index) => (
        <SkillCard key={index} skill={skill} />
      ))}
      <div className="flex gap-1">
        {skills.slice(2).map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}

function SkillCard({ skill }: { skill: string }) {
  return (
    <div className="py-[4px] px-[12px] border border-[#C1C5CF] rounded-[6px] w-fit">
      <p className="text-[#5E626F] font-black text-nowrap">{skill}</p>
    </div>
  );
}
