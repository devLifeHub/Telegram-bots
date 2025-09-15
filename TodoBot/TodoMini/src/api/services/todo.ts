import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "@/api";

interface Todo {
  title: string;
  description: string;
  is_completed: boolean;
  is_fail: boolean;
  end_date: string;
  id: number;
  user_id: number;
  created_at: string;
}


export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery,
  endpoints: (builder) => ({
    fetchTodos: builder.query<Todo[], void>({
      query: () => ({
        url: "/todos",
        method: "GET",
      }),
    }),
  }),
});

export const { useFetchTodosQuery } = todoApi;
