import { useFetchTodosQuery } from "@/api/services/todo";
import TodoItem from "@/components/molecules/TodoItem/TodoItem";
import { currentIdSelector } from "@/store/slice/activeItemSelector";
import { toggleCurrentId } from "@/store/slice/activeItemSlice";
import { useDispatch, useSelector } from "react-redux";


const TodoList = () => {
  const dispatch = useDispatch()
  const { data, error, isLoading } = useFetchTodosQuery();
  const currentId = useSelector(currentIdSelector);


  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки</p>;

  return (
    <>
    <ul>
      {data?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} 
          isActive={currentId === todo.id} 
          onChoose={(id) => dispatch(toggleCurrentId(id))} 
        />
      ))}
    </ul>
    </>
  );
};

export default TodoList


// import { useFetchTodosQuery } from "@/api/services/todo";
// import TodoItem from "@/components/molecules/TodoItem/TodoItem";
// import { useCallback, useState } from "react";


// const TodoList = () => {
//   const { data, error, isLoading } = useFetchTodosQuery();

//   const [itemId, setItemId] = useState<number | null>(null);

//   const handleChoose = useCallback((id: number) => {
//     setItemId(prev => (prev === id ? null : id));
//   }, []);

//   if (isLoading) return <p>Загрузка...</p>;
//   if (error) return <p>Ошибка загрузки</p>;

//   return (
//     <>
//     <ul>
//       {data?.map((todo) => (
//         <TodoItem key={todo.id} todo={todo} isActive={itemId === todo.id} onChoose={handleChoose} />
//         // <li key={todo.id}>{todo.title}</li>
//       ))}
//     </ul>
//     </>
//   );
// };

// export default TodoList
