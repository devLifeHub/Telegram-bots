import { useDeleteTodoMutation } from "@/api/services/todo";
import Button from "@/components/atoms/Button/Button";
import { currentTodoSelector } from "@/store/slice/activeItem/activeItemSelector";
import { hideForm } from "@/store/slice/showForm/showFormSlice";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "../TodoForm.module.scss";

const DeleteForm: FC = () => {
  const dispatch = useDispatch();
  const currentTodo = useSelector(currentTodoSelector);
  const [deleteTodo] = useDeleteTodoMutation();

  const handleDelete = async () => {
    if (!currentTodo) return;
    try {
      await deleteTodo(currentTodo.id).unwrap();
      dispatch(hideForm("delete"));
    } catch (err) {
      console.error("Delete todo failed", err);
    }
  };

  return (
    <div className={s.deleteContent}>
      <p className={s.deleteText}>Are you sure you want to delete the task?</p>
      <div className={s.deleteBlockBtn}>
        <Button name="cancel" type="button" onClick={() => dispatch(hideForm("delete"))} />
        <Button name="delete" type="button" onClick={handleDelete} />
      </div>
    </div>
  );
};

export default DeleteForm;
