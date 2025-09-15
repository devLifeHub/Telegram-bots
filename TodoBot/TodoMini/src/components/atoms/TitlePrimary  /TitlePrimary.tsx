import { FC } from "react"
import s from "./TitlePrimary.module.scss"
import titleLogin from "@/assets/titles/title-login.png";

const images = {
  login: titleLogin,
};

interface TitlePrimaryProps {
  variant: "login"
}

const TitlePrimary: FC<TitlePrimaryProps> = ({ variant }) => {
  return (
    <h2 className={s.title}>
      <img className={s.titleImg} src={images[variant]} alt={variant} />
    </h2>
  );
};


export default TitlePrimary;