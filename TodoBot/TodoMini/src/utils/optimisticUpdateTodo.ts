import { todoApi } from "@/api/services/todo";
import { TodoType } from "@/types";
import type { AppDispatch } from "@/store";

export async function optimisticUpdateTodo(
  id: number,
  changes: Partial<TodoType>,
  queryFulfilled: Promise<unknown>,
  dispatch: AppDispatch
) {
  const patchResult = dispatch(
    todoApi.util.updateQueryData("fetchTodos", undefined, (draft) => {
      const index = draft.findIndex((t) => t.id === id);
      if (index !== -1) {
        draft[index] = { ...draft[index], ...changes };
      }
    })
  );
  try {
    await queryFulfilled;
  } catch {
    patchResult.undo();
  }
}
