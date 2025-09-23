import { FC } from "react";
import FormTemplate from "@/components/templates/FormTamplate/FormTemplate";
import CreateForm from "./modes/CreateForm";
import UpdateForm from "./modes/UpdateForm";
import DeleteForm from "./modes/DeleteForm";

interface TodoFormProps {
  mode: "create" | "update" | "delete";
}

const modeComponents = {
  create: CreateForm,
  update: UpdateForm,
  delete: DeleteForm,
};

const TodoForm: FC<TodoFormProps> = ({ mode }) => {
  const ModeComponent = modeComponents[mode];

  return (
    <FormTemplate variant={mode}>
      <ModeComponent />
    </FormTemplate>
  );
};

export default TodoForm;
