import Image from "next/image";
import {
  HyperhireFooterIcon,
  AvatarIcon,
  GearIcon,
  CodeIcon,
  KorIcon,
  ArrowRightSquareIcon,
} from "@/assets/icons";

const NAV_INFO = [
  { label: "해외 개발자 원격 채용", icon: CodeIcon },
  { label: "외국인 원격 채용 (비개발)", icon: AvatarIcon },
  { label: "한국어 가능 외국인 채용", icon: KorIcon },
  { label: "해외 개발자 활용 서비스", icon: GearIcon },
];

export default function Footer() {
  return (
    <footer className="bg-[#FBFBFB] grid gap-8 p-4 md:px-[8%] md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-3">
          <Image
            src={HyperhireFooterIcon}
            alt="Hyperhire icon"
            height={34}
            width={187}
          />
          <p className="font-black text-[#343741] text-sm">
            우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
          </p>
          <ContactInfo label="010-0000-0000" />
          <ContactInfo label="aaaaa@naver.com" />
        </div>
        <div className="col-span-2 grid grid-cols-2 md:grid-cols-4 gap-3">
          {NAV_INFO.map((item, index) => (
            <NavCard key={index} icon={item.icon} label={item.label} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex gap-6">
          <InfoBlock
            title="상호명"
            items={["하이퍼하이어", "Hyperhire India Private Limited"]}
          />
          <InfoBlock title="대표 CEO" items={["김주현", "Juhyun Kim"]} />
        </div>
        <div className="col-span-2 flex gap-12">
          <InfoBlock
            title="사업자등록번호 CIN"
            items={["427-86-01187", "U74110DL2016PTC290812"]}
          />
          <InfoBlock
            title="주소 ADDRESS"
            items={[
              "서울특별시 강남대로 479, 지하 1층 238호",
              "D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India",
            ]}
          />
        </div>
      </div>

      <div>
        <p className="text-[#5E626F] text-[13px] font-black">
          ⓒ 2023 Hyperhire
        </p>
      </div>
    </footer>
  );
}

/* Reusable Components */
interface NavCardProps {
  icon: string;
  label: string;
}

function NavCard({ icon, label }: NavCardProps) {
  return (
    <div className="bg-white w-[187px] rounded-[12px] p-4 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex-none w-[40px] h-[40px] bg-[#EFF1F6] flex justify-center items-center rounded-[8px]">
          <Image src={icon} alt={`${label} icon`} width={24} height={24} />
        </div>
        <p className="font-black text-[#343741] text-sm">{label}</p>
      </div>
      <div className="flex items-center gap-1">
        <p className="font-black text-sm text-[#5E626F]">바로가기</p>
        <Image
          src={ArrowRightSquareIcon}
          alt="Arrow right square icon"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
}

interface InfoBlockProps {
  title: string;
  items: string[];
}

function InfoBlock({ title, items }: InfoBlockProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <p className="text-[#343741] text-xs font-black">{title}</p>
      {items.map((item, index) => (
        <p key={index} className="text-[#5E626F] text-[13px] font-black">
          {item}
        </p>
      ))}
    </div>
  );
}

interface ContactInfoProps {
  label: string;
}

function ContactInfo({ label }: ContactInfoProps) {
  return <p className="font-black text-[#5E626F] text-[13px]">{label}</p>;
}
