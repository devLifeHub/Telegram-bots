import { FC, ChangeEvent } from "react";
import clsx from "clsx";
import s from "./FieldPrimary.module.scss";
import FieldFrameTamplate from "@/components/templates/FieldFrameTamplate/FieldFrameTamplate";

interface BaseProps {
  name: string;
  value: string;
  setValue: (value: string) => void;
  label?: string;
}

interface InputProps extends BaseProps {
  mode: "input";
  type: "text" | "date" | "time";
}

interface TextareaProps extends BaseProps {
  mode: "textarea";
}

type FieldPrimaryProps = InputProps | TextareaProps;

const FieldPrimary: FC<FieldPrimaryProps> = (props) => {
  const { mode, name, value, setValue, label } = props;

  const labelText = label ?? name.charAt(0).toUpperCase() + name.slice(1);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setValue(e.target.value);

  const commonProps = {
    name,
    value,
    placeholder: "",
    onChange: handleChange,
  };

  return (
    <FieldFrameTamplate className={s.interactive}>
      {mode === "input" ? (
        <input className={s.input} type={props.type} {...commonProps} />
      ) : (
        <textarea className={s.textarea} {...commonProps} />
      )}
      <label className={clsx(s.label, s[`label-${mode}`])}>{labelText}</label>
    </FieldFrameTamplate>
  );
};

export default FieldPrimary;
