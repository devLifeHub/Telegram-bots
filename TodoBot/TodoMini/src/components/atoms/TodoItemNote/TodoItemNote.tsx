import { FC, memo } from "react"
import s from "./TodoItemNote.module.scss"
import NoteFrame from "@/components/atoms/NoteFrame/NoteFrame";
import clsx from "clsx";
import Countdown from "@/components/atoms/Countdown/Countdown";
import TodoItemCreatedAt from "@/components/atoms/TodoItemCreatedAt/TodoItemCreatedAt";

interface TodoItemNoteProps {
    actionClass?: string;
    isActive?: boolean;
    title: string;
    descr: string;
    createdAt: string;
    endDate: string | null;
}


const TodoItemNote:FC<TodoItemNoteProps> = ({actionClass, isActive, title, descr, createdAt, endDate}) => {
    const combinedClass = (base?: string) => {
        return clsx(base, actionClass, isActive && "isActive")
    }
    return (
        <div className={combinedClass(s.note)}>
            <NoteFrame extraClass={actionClass} />
            <div className={s.content}>
                <div className={s.time}>
                    <TodoItemCreatedAt className={combinedClass()} extraClass="mod" createdAt={createdAt} />
                    <Countdown className={s.countdown} endDate={endDate}/>
                </div>

                <div className={s.title}>
                    <span className={combinedClass(s.titleSpan)}>title:</span>
                    <p className={combinedClass(s.titleText)}>{title}</p>
                </div>
                <div className={s.descr}>
                    <span className={combinedClass(s.descrSpan)}>description:</span>
                    <p className={combinedClass(s.descrText)}>{descr}</p>
                </div>
            </div>
        </div>
    )
}

export default memo(TodoItemNote)