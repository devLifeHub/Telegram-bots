import { FC, useMemo } from "react";
import { memo } from "react";
import clsx from "clsx";
import s from "./TodoItem.module.scss";
import { todoApi } from "@/api/services/todo";
import TodoItemCreatedAt from "@/components/atoms/TodoItemCreatedAt/TodoItemCreatedAt";
import TodoItemNote from "@/components/atoms/TodoItemNote/TodoItemNote";
import { useSelector } from "react-redux";
import { makeIsTodoActiveSelector } from "@/store/slice/activeItem/activeItemSelector";

interface TodoItemProps {
  id: number;
  onChoose: (id: number) => void;
}


const TodoItem: FC<TodoItemProps> = ({ id, onChoose }) => {

  const { todo } = todoApi.useFetchTodosQuery(undefined, {
    selectFromResult: ({ data }) => ({
      todo: data?.find(t => t.id === id),
    }),
  });

  const isActiveSelector = useMemo(() => makeIsTodoActiveSelector(id), [id]);
  const isActive = useSelector(isActiveSelector);

  const actionClass = useMemo(
    () => clsx({ isCompleted: todo?.is_completed, isFail: todo?.is_fail }),
    [todo?.is_completed, todo?.is_fail]
  );

  if (!todo) return null;

  return (
    <li className={clsx(s.list, actionClass, isActive && "isActive")}>
      <button className={s.btn} onClick={() => onChoose(id)}>
        <TodoItemCreatedAt createdAt={todo.created_at} />
        <TodoItemNote
          actionClass={actionClass}
          isActive={isActive}
          title={todo.title}
          descr={todo.description}
          createdAt={todo.created_at}
          endDate={todo.end_date ?? null}
        />
      </button>
    </li>
  );
};

export default memo(TodoItem);