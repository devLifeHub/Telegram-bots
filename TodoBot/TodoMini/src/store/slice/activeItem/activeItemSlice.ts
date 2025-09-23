import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ActiveItemState {
  currentTodoId: number | null;
}

const initialState: ActiveItemState = {
  currentTodoId: null,
};

const activeItemSlice = createSlice({
  name: "activeItem",
  initialState,
  reducers: {
    setCurrentTodoId: (state, action: PayloadAction<number | null>) => {
      state.currentTodoId = action.payload;
    },
    toggleCurrentTodoId: (state, action: PayloadAction<number>) => {
      state.currentTodoId =
        state.currentTodoId === action.payload ? null : action.payload;
    },
  },
});

export const { setCurrentTodoId, toggleCurrentTodoId } = activeItemSlice.actions;
export default activeItemSlice.reducer;
