import { RootState } from "@/store";

export const currentIdSelector = ((s: RootState) => s.activeItem.currentId);
export const currentIdNullSelector = ((s: RootState) => s.activeItem.currentId === null);