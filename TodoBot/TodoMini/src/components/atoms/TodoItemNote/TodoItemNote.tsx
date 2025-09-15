import { FC, memo } from "react"
import s from "./TodoItemNote.module.scss"
import NoteFrame from "@/components/atoms/NoteFrame/NoteFrame";

interface TodoItemNoteProps {
    title: string;
    descr: string;
}


const TodoItemNote:FC<TodoItemNoteProps> = ({title, descr}) => {
    return (
        <div className={s.note}>
            <NoteFrame />
            <div className={s.content}>
                <div className={s.title}>
                    <span className={s.titleSpan}>title:</span>
                    <p className={s.titleText}>{title}</p>
                </div>
                <div className={s.descr}>
                    <span className={s.descrSpan}>description:</span>
                    <p className={s.descrText}>{descr}</p>
                </div>
            </div>
        </div>
    )
}

export default memo(TodoItemNote)