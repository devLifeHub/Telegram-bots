import { FC } from "react";
import TimerIcon from "@/assets/icons/controls/timer.svg?react"
import CancelIcon from "@/assets/icons/controls/cancel.svg?react"
import SendIcon from "@/assets/icons/controls/send.svg?react"

import s from "./TodoFormControl.module.scss"

interface TodoFormControlProps {
    handleTimer: () => void;
    handleCancel: () => void;
}

const TodoFormControl:FC<TodoFormControlProps> = ({handleTimer, handleCancel}) => {
    return (
        <div className={s.block}>
            <button className={s.btn} type="button" onClick={handleTimer}>
                <TimerIcon className={s.icon} />
            </button>
            <button className={s.btn} type="button" onClick={handleCancel}>
                <CancelIcon className={s.icon} />
            </button>
            <button className={s.btn} type="submit">
                <SendIcon className={s.icon} />
            </button>
        </div>
    )
};

export default TodoFormControl;