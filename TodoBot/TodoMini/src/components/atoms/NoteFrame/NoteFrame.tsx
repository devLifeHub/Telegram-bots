import { FC } from "react"
import FrameTL from "@/assets/icons/frames/note-top-left-frame.svg?react"
import FrameTR from "@/assets/icons/frames/note-top-right-frame.svg?react"
import FrameBL from "@/assets/icons/frames/note-bottom-left-frame.svg?react"
import FrameBR from "@/assets/icons/frames/note-bottom-right-frame.svg?react"

import s from "./NoteFrame.module.scss"
import clsx from "clsx"

interface NoteFrameProps {
    extraClass?: string;
}

const NoteFrame:FC<NoteFrameProps> = ({extraClass}) => {
    return (
        <div className={s.frame}>
            <FrameTL className={clsx(s.cornerTL, extraClass)} />
            <FrameTR className={s.cornerTR}/>
            <FrameBL className={s.cornerBL} />
            <FrameBR className={s.cornerBR} />
        </div>

    )
}

export default NoteFrame;