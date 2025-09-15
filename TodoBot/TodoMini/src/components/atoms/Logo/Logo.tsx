import Logotype from "@/assets/todo-logo.svg?react";
import s from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={s.logo}>
      <Logotype className={s.icon} />
    </div>
  );
};

export default Logo;
