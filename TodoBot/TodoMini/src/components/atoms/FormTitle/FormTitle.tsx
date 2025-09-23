import { FC } from "react"
import loginTitle from "@/assets/titles/login-title.png";
import createTitle from "@/assets/titles/todo-create-title.png";
import updateTitle from "@/assets/titles/todo-update-title.png";
import deleteTitle from "@/assets/titles/todo-delete-title.png";
import type { FormTitleVariant } from "@/types";

import s from "./FormTitle.module.scss"

interface FormTitleProps {
  variant: FormTitleVariant,
}

const titles = {
  login: loginTitle,
  create: createTitle,
  update: updateTitle,
  delete: deleteTitle,
};

const hiddenTitles: Record<FormTitleProps["variant"], string> = {
  login: "Login",
  create: "Create ToDo",
  update: "Update ToDo",
  delete: "Delete ToDo",
};

const FormTitle: FC<FormTitleProps> = ({ variant }) => {
  return (
    <h2 className={s[`title-${variant}`]}>
      <img className={s[`img-${variant}`]} src={titles[variant]} alt={hiddenTitles[variant]} />
      <span className={s.visuallyHidden}>{hiddenTitles[variant]}</span>
    </h2>
  );
};


export default FormTitle;