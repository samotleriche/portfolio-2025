import Link from "next/link";
import React from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  text?: string;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
};

const buttonVariants = {
  primary:
    "bg-gradient-to-r from-teal-500 to-violet-500 text-white hover:from-teal-600 hover:to-violet-600 shadow-lg hover:shadow-xl before:absolute before:inset-0 before:bg-gradient-to-r before:from-teal-500 before:to-violet-500 before:rounded-full before:transition-transform before:duration-300 before:scale-100 hover:before:scale-105 before:-z-10",
  secondary:
    "bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-300 hover:text-white hover:border-teal-400/60 hover:bg-gray-800/70 before:absolute before:inset-0 before:bg-gray-800/50 before:rounded-full before:transition-transform before:duration-300 before:scale-100 hover:before:scale-105 before:-z-10",
  outline:
    "border-2 border-gray-600 text-gray-300 hover:border-teal-400 hover:text-teal-400 before:absolute before:inset-0 before:bg-gray-800/20 before:rounded-full before:transition-transform before:duration-300 before:scale-100 hover:before:scale-105 before:-z-10",
  ghost:
    "bg-gradient-to-bl from-teal-400/20 to-violet-500/20 text-gray-300 hover:border-teal-600 hover:text-gray-200 border-transparent border-1 before:absolute before:inset-0 before:bg-gradient-to-bl before:from-teal-400/20 before:to-violet-500/20 before:rounded-full before:transition-transform before:duration-300 before:scale-100 hover:before:scale-105 before:-z-10",
};

const buttonSizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-3 text-lg",
};

function Button({
  text,
  href,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  className,
  children,
}: ButtonProps) {
  const baseClasses =
    "font-semibold rounded-full transition-all duration-300 cursor-pointer w-fit disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden";
  const variantClasses = buttonVariants[variant];
  const sizeClasses = buttonSizes[size];

  const buttonClasses = clsx(
    baseClasses,
    variantClasses,
    sizeClasses,
    className
  );

  const buttonContent = children || text || "Button";

  if (href) {
    return (
      <Link href={href}>
        <button className={buttonClasses} disabled={disabled}>
          {buttonContent}
        </button>
      </Link>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {buttonContent}
    </button>
  );
}

export default Button;
