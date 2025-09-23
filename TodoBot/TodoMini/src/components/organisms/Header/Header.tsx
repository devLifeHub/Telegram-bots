import { FC } from "react"
import Logo from "@/components/atoms/Logo/Logo";
import LogoutIcon from "@/assets/icons/controls/logout.svg?react"

import s from "./Header.module.scss"
import clsx from "clsx";
import { useLogoutMutation } from "@/api/services/auth";

const Header: FC = () => {
    const [ logout ] = useLogoutMutation()

    const handleLogout = async () => {
        try {
            await logout().unwrap();
        } catch (err) {
            console.error("Error at logout:", err);
        }
    }

    return (
        <header className={s.header}>
            <div className={clsx(s.content, "container")}>
                <Logo />
                <button className={s.btn} onClick={handleLogout}>
                    <LogoutIcon />
                </button>
            </div>
        </header>
    )
}

export default Header