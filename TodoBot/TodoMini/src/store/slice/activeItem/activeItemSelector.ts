import { RootState } from "@/store";
import { todoApi } from "@/api/services/todo";

export const currentTodoIdSelector = (s: RootState) => s.activeItem.currentTodoId;
export const isCurrentTodoNullSelector = (s: RootState) => s.activeItem.currentTodoId === null;

export const currentTodoSelector = (state: RootState) => {
  const id = currentTodoIdSelector(state);
  if (!id) return null;
  const todos = todoApi.endpoints.fetchTodos.select()(state).data;
  return todos?.find(t => t.id === id) || null;
};

export const makeIsTodoActiveSelector = (id: number) => (state: RootState) =>
  currentTodoIdSelector(state) === id;


// export const isCurrentTodoActiveSelector = (state: RootState, id: number) =>
//   currentTodoIdSelector(state) === id;

