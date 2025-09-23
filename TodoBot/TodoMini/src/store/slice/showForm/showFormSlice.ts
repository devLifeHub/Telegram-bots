import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FormType = "create" | "update" | "delete";

interface ShowFormState {
  form: Record<FormType, boolean>;
  error: Record<FormType, string | null>;
}

const initialState: ShowFormState = {
  form: {
    create: false,
    update: false,
    delete: false,
  },
  error: {
    create: null,
    update: null,
    delete: null,
  },
};

const showFormSlice = createSlice({
  name: "showForm",
  initialState,
  reducers: {
    showForm: (s, a: PayloadAction<FormType>) => {
      (Object.keys(s.form) as FormType[]).forEach(key => {
        s.form[key] = false;
      });
      s.form[a.payload] = true;
    },
    hideForm: (s, a: PayloadAction<FormType>) => {
      s.form[a.payload] = false;
    },
    setError: ( s, a: PayloadAction<{ type: FormType; error: string | null }> ) => {
      s.error[a.payload.type] = a.payload.error;
    },
  },
});

export const { showForm, hideForm, setError } = showFormSlice.actions;
export default showFormSlice.reducer;
