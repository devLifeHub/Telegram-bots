import { FC, ReactNode } from "react"
import s from "./Modal.module.scss"

interface ModalProps {
  children: ReactNode;
}

const Modal:FC<ModalProps> = ({ children }) => {
    return (
        <div className={s.modal} >
            { children }
        </div>
    )
}

export default Modal