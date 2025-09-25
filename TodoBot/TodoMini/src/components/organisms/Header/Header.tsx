import { FC } from "react"
import Logo from "@/components/atoms/Logo/Logo";
import s from "./Header.module.scss"
import clsx from "clsx";

const Header: FC = () => {
    return (
        <header className={s.header}>
            <div className={clsx(s.content, "container")}>
                <Logo />
            </div>
        </header>
    )
}

export default Header