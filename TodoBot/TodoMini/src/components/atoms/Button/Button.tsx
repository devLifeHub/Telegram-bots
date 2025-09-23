import { FC, ButtonHTMLAttributes, MouseEventHandler } from "react";
import clsx from "clsx";
import s from "./Button.module.scss"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  type: "button" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  extraClass?: string;
}

const Button: FC<ButtonProps> = ({ name, onClick, extraClass, ...props }) => {
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <button className={clsx(s.btn, extraClass)} data-name={formattedName} onClick={onClick} {...props}>
      {formattedName}
    </button>
  );
};

export default Button