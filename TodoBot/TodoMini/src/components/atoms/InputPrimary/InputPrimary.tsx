import clsx from "clsx";
import { FC } from "react";
import s from "./InputPrimary.module.scss"


interface InputPrimaryProps {
    inputClass?: string,
    type: "email" | "text" | "password";
    isValue: string;
    setValue: (value: string) => void;
    placeholder?: string
}

const InputPrimary: FC<InputPrimaryProps> = ({ inputClass, type, isValue, setValue, placeholder }) => {

  return (
    <div className={s.container}>
      <label className={s.label}>{ placeholder }</label>
      <input
          className={clsx(s.input, inputClass)}
          type={type}
          value={isValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setValue(e.target.value)}}
          placeholder={placeholder}
          required
      />
    </div>
  );
};

export default InputPrimary;

