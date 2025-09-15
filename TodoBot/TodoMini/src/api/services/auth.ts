import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "@/api";

interface LoginCredentials {
  username: string;
  password: string;
}

interface LoginResponse {
  access_token: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginCredentials>({
      query: (creds) => ({
        url: "/auth/login",
        method: "POST",
        body: new URLSearchParams({
          username: creds.username,
          password: creds.password,
        }),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
