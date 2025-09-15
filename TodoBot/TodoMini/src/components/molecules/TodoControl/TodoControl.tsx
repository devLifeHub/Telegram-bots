import AddIcon from "@/assets/icons/controls/add.svg?react"
import ComplitedIcon from "@/assets/icons/controls/complited.svg?react"
import FailIcon from "@/assets/icons/controls/fail.svg?react"
import EditIcon from "@/assets/icons/controls/edit.svg?react"
import DeleteIcon from "@/assets/icons/controls/delete.svg?react"

import s from "./TodoControl.module.scss"
import { currentIdNullSelector } from "@/store/slice/activeItemSelector"
import { useSelector } from "react-redux"

const TodoControl = () => {
    const currentIdNull = useSelector(currentIdNullSelector)

    return (
        <ul className={s.list}>
            <li className={s.item}>
                <button className={s.btn}>
                    <AddIcon className={s.icon} />
                </button>
            </li>
            <li className={s.item}>
                <button className={s.btn} disabled={currentIdNull}>
                    <ComplitedIcon className={s.icon} />
                </button>
            </li>
            <li className={s.item}>
                <button className={s.btn} disabled={currentIdNull}>
                    <FailIcon className={s.icon} />
                </button>
            </li>
            <li className={s.item}>
                <button className={s.btn} disabled={currentIdNull}>
                    <EditIcon className={s.icon} />
                </button>
            </li>
            <li className={s.item}>
                <button className={s.btn} disabled={currentIdNull}>
                    <DeleteIcon className={s.icon} />
                </button>
            </li>
        </ul>
    )
}

export default TodoControl