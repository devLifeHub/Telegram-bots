import { FC, ReactNode } from "react"
import clsx from "clsx"
import FrameTL from "@/assets/icons/frames/todo-top-left-frame.svg?react"
import FrameTR from "@/assets/icons/frames/todo-top-right-frame.svg?react"
import FrameBL from "@/assets/icons/frames/todo-bottom-left-frame.svg?react"
import FrameBR from "@/assets/icons/frames/todo-bottom-right-frame.svg?react"

import s from "./FieldFrameTamplate.module.scss"

interface FieldFrameTamplateProps {
    children: ReactNode;
    className?: string;
    extraClass?: string;
}

const FieldFrameTamplate:FC<FieldFrameTamplateProps> = ({children, className, extraClass}) => {
    return (
        <div className={clsx(s.container, className)}>
            <div className={s.frame}>
                <FrameTL className={clsx(s.cornerTL, extraClass)} />
                <FrameTR className={s.cornerTR}/>
                <FrameBL className={s.cornerBL} />
                <FrameBR className={s.cornerBR} />
            </div>
            {children}
        </div>
    )
}

export default FieldFrameTamplate;