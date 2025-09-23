import { useFetchTodosQuery } from "@/api/services/todo";
import TodoItem from "@/components/molecules/TodoItem/TodoItem";
import { toggleCurrentTodoId } from "@/store/slice/activeItem/activeItemSlice";
import { useDispatch } from "react-redux";
import s from "./TodoList.module.scss";
import { useCallback, useMemo } from "react";
import Loading from "@/components/atoms/Loading/Loading";

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
