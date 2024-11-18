interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white text-[#4A77FF] font-black px-[24px] py-[6px] rounded-[8px]"
    >
      {label}
    </button>
  );
}
