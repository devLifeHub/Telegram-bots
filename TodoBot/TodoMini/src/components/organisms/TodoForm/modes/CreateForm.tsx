import { FC, memo, useCallback, useState } from "react";
import { useCreateTodoMutation } from "@/api/services/todo";
import FieldPrimary from "@/components/atoms/FieldPrimary/FieldPrimary";
import TodoFormControl from "@/components/molecules/TodoFormControl/TodoFormControl";
import s from "../TodoForm.module.scss";
import clsx from "clsx";
import { hideForm } from "@/store/slice/showForm/showFormSlice";
import { useDispatch } from "react-redux";
import useDateTimeInputs from "@/hook/useDateTimeInputs";
import { submitTodo } from "@/utils/submitTodo";

const CreateForm: FC = () => {
  const dispatch = useDispatch();
  const [createTodo] = useCreateTodoMutation();

  const {date: dateNow, time: timeNow, toISO} = useDateTimeInputs()

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(dateNow);
  const [time, setTime] = useState(timeNow);
  const [showDatetime, setShowDatetime] = useState(false);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await submitTodo({ mutate: createTodo, title, description, date, time, showDatetime, toISO });
      dispatch(hideForm("create"));
    } catch (err) {
      console.error("Create todo failed", err);
    }
  }, [createTodo, title, description, date, time, showDatetime, toISO, dispatch]);


  const handleTimer = useCallback(() => {
    setShowDatetime(prev => !prev);
  }, []);

  const handleCancel = useCallback(() => {
    console.log("Cancel");
    dispatch(hideForm("create"))

  }, [dispatch]);

  return (
    <form onSubmit={handleSubmit}>
      <FieldPrimary mode="input" name="title" type="text" value={title} setValue={setTitle} />
      <FieldPrimary mode="textarea" name="description" value={description} setValue={setDescription} />
      <div className={clsx(s.datetime, showDatetime && s.showDatetime)}>
        <FieldPrimary mode="input" name="date" type="date" value={date} setValue={setDate} />
        <FieldPrimary mode="input" name="time" type="time" value={time} setValue={setTime} />
      </div>
      <TodoFormControl handleTimer={handleTimer} handleCancel={handleCancel} />
    </form>
  );
};

export default memo(CreateForm);
