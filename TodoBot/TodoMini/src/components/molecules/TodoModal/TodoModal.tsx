import Modal from "@/components/atoms/Modal/Modal";
import TodoForm from "@/components/organisms/TodoForm/TodoForm";
import { FC } from "react"

interface TodoModalProps {
    mode: "create" | "update" | "delete";
}

const TodoModal:FC<TodoModalProps> = ({mode}) => {
    return (
        <Modal>
            <TodoForm mode={mode} />
        </Modal>
    )
}

export default TodoModal