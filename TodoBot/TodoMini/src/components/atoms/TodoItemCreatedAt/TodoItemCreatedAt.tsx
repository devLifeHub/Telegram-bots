import { FC, memo } from 'react';
import FrameCreatedAt from '@/assets/icons/item-date-frame.svg?react';

import s from './TodoItemCreatedAt.module.scss'
import useDateTimeLabels from '@/hook/useDateTimeLabels';
import clsx from 'clsx';

interface TodoItemDateProps {
    extraClass?: string
    className?: string
    createdAt: string
}

const TodoItemCreatedAt:FC<TodoItemDateProps> = ({className, extraClass, createdAt}) => {
    const { date, time } = useDateTimeLabels(createdAt)
    return (
        <div className={clsx(s.createdAt, extraClass && s[`${extraClass}CreatedAt`])}>
            <FrameCreatedAt className={clsx(s.frame, extraClass && s[`${extraClass}Frame`])}/>
            <div className={clsx(s.content, className, extraClass && s[`${extraClass}Content`])}>
                <span className={clsx(extraClass && s[`${extraClass}Date`])}>{date}</span>
                <span>{time}</span>
            </div>
        </div>
    )
}

export default memo(TodoItemCreatedAt)