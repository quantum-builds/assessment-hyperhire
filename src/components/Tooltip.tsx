import { TooltipPosition } from "@/constants/enums";
import { ReactNode, CSSProperties } from "react";

interface TooltipProps {
  position: TooltipPosition;
  children: ReactNode;
  bgColor?: string;
  textColor?: string;
}

export default function Tooltip({
  position,
  children,
  bgColor = "white",
  textColor = "black",
}: TooltipProps) {
  const getTooltipPosition = () => {
    switch (position) {
      case TooltipPosition.Left:
        return "tooltip-left";
      case TooltipPosition.Middle:
        return "tooltip-middle";
      case TooltipPosition.Right:
        return "tooltip-right";
      default:
        return "";
    }
  };

  return (
    <div
      className={`fade-up px-[6px] py-[12px] w-fit flex justify-center items-center rounded-[8px] relative tooltip ${getTooltipPosition()}`}
      style={
        {
          backgroundColor: bgColor,
          color: textColor,
          "--tooltip-corner-color": bgColor,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
