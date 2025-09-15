import TodoControl from "@/components/molecules/TodoControl/TodoControl"
import TodoList from "@/components/organisms/TodoList/TodoList"
import MainTamplate from "@/components/templates/MainTamplate/MainTamplate"
import { FC } from "react"


const TodoPage: FC = () => {
    return (
        <MainTamplate>
            <TodoList />
            <TodoControl />
        </MainTamplate>
    )
}

export default TodoPage