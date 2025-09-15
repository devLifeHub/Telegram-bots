import { FC, memo } from 'react';
import FrameCreatedAt from '@/assets/icons/item-date-frame.svg?react';
import { useFormattedDateTime } from '@/hook/useFormattedDateTime';

import s from './TodoItemCreatedAt.module.scss'

interface TodoItemDateProps {
    createdAt: string
}

const TodoItemCreatedAt:FC<TodoItemDateProps> = ({createdAt}) => {
    const {time, date} = useFormattedDateTime(createdAt)
    return (
        <div className={s.createdAt}>
            <FrameCreatedAt className={s.frame}/>
            <div className={s.content}>
                <span className={s.date}>{date}</span>
                <span className={s.time}>{time}</span>
            </div>
        </div>
    )
}

export default memo(TodoItemCreatedAt)