export type FormTitleVariant = "login" | "create" | "update" | "delete";

export interface TodoType {
  id: number;
  user_id: number;
  title: string;
  description: string;
  created_at: string;
  end_date?: string | null;
  is_completed?: boolean;
  is_fail?: boolean;
}

export type CreateTodoType = Omit<TodoType, "id" | "user_id" | "created_at">;

export type PatchTodoType = Partial<Omit<TodoType, "user_id" | "created_at">> & {
  id: number;
};

export type PutTodoType = Partial<Omit<TodoType, "id" | "user_id" | "title" | "description" |  "created_at">> & {
  id: number;
};
