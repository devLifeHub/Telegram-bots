import { RootState } from "@/store";

export const isCreateFormSelector = (s: RootState) => s.showForm.form.create;
export const isUpdateFormSelector = (s: RootState) => s.showForm.form.update;
export const isDeleteFormSelector = (s: RootState) => s.showForm.form.delete;