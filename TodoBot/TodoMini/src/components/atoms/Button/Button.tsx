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
  return (
    <button className={clsx(s.btn, extraClass)} data-name={name} onClick={onClick} {...props}>
      {name}
    </button>
  );
};

export default Button