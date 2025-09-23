import { FC } from "react"
import { useSelector } from "react-redux"
import { isCreateFormSelector, isDeleteFormSelector, isUpdateFormSelector } from "@/store/slice/showForm/showFormSelector"
import TodoControl from "@/components/molecules/TodoControl/TodoControl"
import TodoModal from "@/components/molecules/TodoModal/TodoModal"
import TodoList from "@/components/organisms/TodoList/TodoList"
import MainTemplate from "@/components/templates/MainTemplate/MainTemplate"


const TodoPage: FC = () => {
    const isCreateForm = useSelector(isCreateFormSelector)
    const isUpdateForm = useSelector(isUpdateFormSelector)
    const isDeleteForm = useSelector(isDeleteFormSelector)
    return (
        <MainTemplate>
            {isCreateForm && <TodoModal mode="create" />}
            {isUpdateForm && <TodoModal mode="update" />}
            {isDeleteForm && <TodoModal mode="delete" />}
            <TodoList />
            <TodoControl />
        </MainTemplate>
    )
}

export default TodoPage