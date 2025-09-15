import { FC } from "react";
import TodoItemCreatedAt from "@/components/atoms/TodoItemCreatedAt/TodoItemCreatedAt";
import TodoItemNote from "@/components/atoms/TodoItemNote/TodoItemNote";
import s from "./TodoItem.module.scss"
import clsx from "clsx";
import { memo } from "react";

interface Todo {
    id: number;
    user_id: number;
    title: string;
    description: string;
    created_at: string;
    end_date: string;
    is_completed: boolean;
    is_fail: boolean;
}

interface  TodoItemProps {
    todo: Todo;
    isActive: boolean;
    onChoose: (id: number) => void;
}


const TodoItem:FC<TodoItemProps> = ({todo, isActive, onChoose}) => {
    return (
        <li>
            <button className={clsx(s.btn, isActive && s.isActive)} onClick={() => onChoose(todo.id)}>
                <TodoItemCreatedAt createdAt={todo.created_at} />
                <TodoItemNote title={todo.title} descr={todo.description} />
            </button>
        </li>

    )
}

export default memo(TodoItem)