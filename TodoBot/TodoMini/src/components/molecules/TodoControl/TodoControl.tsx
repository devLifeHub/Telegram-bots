import CreateIcon from "@/assets/icons/controls/create.svg?react"
import ComplitedIcon from "@/assets/icons/controls/complited.svg?react"
import FailIcon from "@/assets/icons/controls/fail.svg?react"
import UpdateIcon from "@/assets/icons/controls/update.svg?react"
import DeleteIcon from "@/assets/icons/controls/delete.svg?react"

import s from "./TodoControl.module.scss"
import { currentTodoSelector, isCurrentTodoNullSelector } from "@/store/slice/activeItem/activeItemSelector"
import { useDispatch, useSelector } from "react-redux"
import { showForm } from "@/store/slice/showForm/showFormSlice"
import { usePutTodoMutation } from "@/api/services/todo"

const TodoControl = () => {
    const dispatch = useDispatch()
    const [putTodo] = usePutTodoMutation();
    const currentIdNull = useSelector(isCurrentTodoNullSelector)
    const currentTodo = useSelector(currentTodoSelector)

    
    const handleToggleComplete = async (action: "complited" | "fail") => {
        if (!currentTodo) return;
        try {
            if (action === "complited") {
                await putTodo({id: currentTodo.id, end_date: null, is_completed: true, is_fail: false}).unwrap();
            } else if (action === "fail") {
                await putTodo({id: currentTodo.id, end_date: null, is_completed: false, is_fail: true}).unwrap();
            }
        } catch (err){
            console.error("Toggle complete failed", err);
        }
    }

    return (
        <div className={s.container}>
            <ul className={s.list}>
                <li className={s.item}>
                    <button className={s.btn} onClick={() => dispatch(showForm("create"))}>
                        <CreateIcon className={s.icon} />
                    </button>
                </li>
                <li className={s.item}>
                    <button className={s.btn} onClick={() => handleToggleComplete("complited")} disabled={currentIdNull}>
                        <ComplitedIcon className={s.icon} />
                    </button>
                </li>
                <li className={s.item}>
                    <button className={s.btn} onClick={() => handleToggleComplete("fail")} disabled={currentIdNull}>
                        <FailIcon className={s.icon} />
                    </button>
                </li>
                <li className={s.item}>
                    <button className={s.btn} onClick={() => dispatch(showForm("update"))} disabled={currentIdNull}>
                        <UpdateIcon className={s.icon} />
                    </button>
                </li>
                <li className={s.item}>
                    <button className={s.btn} onClick={() => dispatch(showForm("delete"))}  disabled={currentIdNull}>
                        <DeleteIcon className={s.icon} />
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default TodoControl