import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "@/api";
import { TodoType, CreateTodoType, PatchTodoType, PutTodoType } from "@/types";
import { optimisticUpdateTodo } from "@/utils/optimisticUpdateTodo";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery,
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    createTodo: builder.mutation<TodoType, CreateTodoType>({
      query: (newTodo) => ({
        url: "/todos/",
        method: "POST",
        body: newTodo,
      }),
      invalidatesTags: ["Todos"],
    }),

    patchTodo: builder.mutation<TodoType, PatchTodoType>({
      query: ({ id, ...patch }) => ({
        url: `/todos/${id}`,
        method: "PATCH",
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        await optimisticUpdateTodo(id, patch, queryFulfilled, dispatch);
      },
    }),

    putTodo: builder.mutation<TodoType, PutTodoType>({
      query: ({ id, ...put }) => ({
        url: `/todos/${id}`,
        method: "PUT",
        body: put,
      }),
      async onQueryStarted({ id, ...put }, { dispatch, queryFulfilled }) {
        await optimisticUpdateTodo(id, put, queryFulfilled, dispatch);
      },
    }),

    fetchTodos: builder.query<TodoType[], void>({
      query: () => ({
        url: "/todos/",
        method: "GET",
      }),
      providesTags: ["Todos"],
    }),

    deleteTodo: builder.mutation<TodoType, number>({
      query: (id) => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const {
  useFetchTodosQuery,
  useCreateTodoMutation,
  usePatchTodoMutation,
  usePutTodoMutation,
  useDeleteTodoMutation,
} = todoApi;
