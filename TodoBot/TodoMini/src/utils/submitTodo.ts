import type { TodoType, CreateTodoType, PatchTodoType } from "@/types";

type MutateFn<TArg> = (arg: TArg) => { unwrap: () => Promise<TodoType> };

export async function submitTodo<TArg extends CreateTodoType | PatchTodoType>(params: {
  mutate: MutateFn<TArg>;
  id?: number;
  title: string;
  description: string;
  date: string;
  time: string;
  showDatetime: boolean;
  toISO: (date: string, time: string) => string;
}) {
  const { mutate, id, title, description, date, time, showDatetime, toISO } = params;

  let endDate: string | undefined;
  if (showDatetime) {
    endDate = toISO(date, time);
  }

  const payload = {
    title,
    description,
    is_completed: false,
    is_fail: false,
    ...(endDate && { end_date: endDate }),
    ...(id ? { id } : {}),
  } as TArg;

  await mutate(payload).unwrap();
}
