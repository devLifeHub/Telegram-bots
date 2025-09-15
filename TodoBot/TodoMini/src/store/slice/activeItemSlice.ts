import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface ActiveItemState {
  currentId: number | null;
}

const initialState: ActiveItemState = {
    currentId: null
}

const activeItemSlice = createSlice({
    name: "activeItem",
    initialState,
    reducers: {
        setCurrentId: (s, a: PayloadAction<number | null>) => {
            s.currentId = a.payload
        },
        toggleCurrentId: (s, a: PayloadAction<number | null>) => {
            s.currentId = s.currentId === a.payload ? null : a.payload 
        }
    },
})

export const { setCurrentId, toggleCurrentId } = activeItemSlice.actions
export default activeItemSlice.reducer