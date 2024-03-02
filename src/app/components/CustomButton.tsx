"use client";
import Image from "next/image";
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
  icon,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className='relative w-6 h-6'>
          <Image
            src={rightIcon}
            alt='right icon'
            fill
            className='object-contain'
          />
        </div>
      )}

      {icon && (
        <div className='flex items-center justify-center w-6 h-6 '>{icon}</div>
      )}
    </button>
  );
};

export default CustomButton;
