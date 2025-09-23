import { FC, memo, useCallback, useState } from "react";
import { usePatchTodoMutation } from "@/api/services/todo";
import FieldPrimary from "@/components/atoms/FieldPrimary/FieldPrimary";
import TodoFormControl from "@/components/molecules/TodoFormControl/TodoFormControl";
import s from "../TodoForm.module.scss";
import clsx from "clsx";
import { hideForm } from "@/store/slice/showForm/showFormSlice";
import { useDispatch, useSelector } from "react-redux";
import useDateTimeInputs from "@/hook/useDateTimeInputs";
import { currentTodoSelector } from "@/store/slice/activeItem/activeItemSelector";
import { submitTodo } from "@/utils/submitTodo";


const UpdateForm: FC = () => {
  const dispatch = useDispatch();
  const currentTodo = useSelector(currentTodoSelector);

  const [patchTodo] = usePatchTodoMutation();

  const {date: initialDate, time: initialTime, toISO} = useDateTimeInputs(currentTodo?.end_date || "")

  const [title, setTitle] = useState(currentTodo?.title || "");
  const [description, setDescription] = useState(currentTodo?.description || "");
  const [date, setDate] = useState(initialDate);
  const [time, setTime] = useState(initialTime);
  const [showDatetime, setShowDatetime] = useState(false);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!currentTodo) return;
    try {
      await submitTodo({ mutate: patchTodo, id: currentTodo.id, title, description, date, time, showDatetime, toISO });
      dispatch(hideForm("update"));
    } catch (err) {
      console.error("Update todo failed", err);
    }
  }, [patchTodo, currentTodo, title, description, date, time, showDatetime, toISO, dispatch]);


  const handleTimer = useCallback(() => {
    setShowDatetime(prev => !prev);
  }, []);

  const handleCancel = useCallback(() => {
    console.log("Cancel");
    dispatch(hideForm("update"))

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

export default memo(UpdateForm);
