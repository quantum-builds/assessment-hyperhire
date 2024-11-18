import Image from "next/image";
import { TooltipPosition } from "@/constants/enums";
import { HeroBackgroundImage } from "@/assets/images";
import { GreenDollarIcon } from "@/assets/icons";
import Header from "@/components/Header";
import { Carousel } from "@/components/Carousel";
import Tooltip from "@/components/Tooltip";
import ScrollList from "@/components/ScrollList";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full bg-cyan-300">
      <Image
        src={HeroBackgroundImage}
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        className="opacity-80 mix-blend-color-burn"
      />
      <div className="relative z-10 w-full h-screen">
        <Header />
        <div className="px-[14%] lg:px-[10%] h-full grid grid-cols-2 place-content-start mt-4 ">
          <div className="flex flex-col gap-6">
            <Tooltip position={TooltipPosition.Left}>
              <p className="font-black text-lg text-[#40E2E8]">
                풀타임, 파트타임
              </p>
            </Tooltip>
            <h1 className="text-[48px] font-black text-white fade-up">
              최고의 실력을 가진
              <span className="md:block">외국인 인재를 찾고 계신가요?</span>
            </h1>
            <h4 className="font-black text-white text-2xl fade-up">
              법률 및 인사관리 부담없이
              <span className="md:block">
                1주일 이내에 원격으로 채용해보세요.
              </span>
            </h4>
            <p className="underline font-black text-white text-lg fade-up">
              개발자가 필요하신가요?
            </p>

            <div className="flex text-white gap-4 fade-in">
              <InfoCard
                title="평균 월 120만원"
                description="임금을 해당 국가를 기준으로 계산합니다."
              />
              <InfoCard
                title="최대 3회 인력교체"
                description="막상 채용해보니 맞지 않아도 걱정하지 마세요."
              />
              <InfoCard
                title="평균 3일, 최대 10일"
                description="급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다."
              />
            </div>
          </div>
          <div className="w-full">
            <div className="w-full flex justify-center items-center">
              <Tooltip position={TooltipPosition.Middle} bgColor="#E9F7EF">
                <div className=" w-[26px] h-[26px] bg-[#BBF3D2] rounded-full flex justify-center items-center mr-2">
                  <Image
                    src={GreenDollarIcon}
                    alt="Green dollar icon"
                    width={11}
                    height={17}
                  />
                </div>

                <p className="font-black text-lg text-[#00C696]">월 100만원</p>
              </Tooltip>
            </div>

            <Carousel />
          </div>
          <div className="w-full col-span-2">
            <ScrollList />
          </div>
        </div>
      </div>
    </section>
  );
}

interface InfoCardProps {
  title: string;
  description: string;
}

export function InfoCard({ title, description }: InfoCardProps) {
  return (
    <div className="p-4 border-t-2 border-white">
      <h5 className="font-black text-lg">{title}</h5>
      <p className="font-black text-white text-opacity-80">{description}</p>
    </div>
  );
}
