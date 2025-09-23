import { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useFetchTodosQuery } from "@/api/services/todo";
import { toggleCurrentTodoId } from "@/store/slice/activeItem/activeItemSlice";
import TodoItem from "@/components/molecules/TodoItem/TodoItem";
import Loading from "@/components/atoms/Loading/Loading";
import s from "./TodoList.module.scss";

const TodoList = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useFetchTodosQuery();
  const todos = useMemo(() => data ?? [], [data]);

  const handleChoose = useCallback(
    (id: number) => {
      dispatch(toggleCurrentTodoId(id));
    },
    [dispatch]
  );

  if (isLoading) return <Loading />;

  console.log("list")

  return (
    <ul className={s.list}>
      {todos.map(todo => (
        <TodoItem key={todo.id} id={todo.id} onChoose={handleChoose} />
      ))}
    </ul>
  );
};

export default TodoList;
