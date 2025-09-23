import { FC } from "react"
import AuthForm from "@/components/organisms/AuthForm/AuthForm"
import MainTemplate from "@/components/templates/MainTemplate/MainTemplate"
import s from "./AuthPage.module.scss"

const AuthPage: FC = () => {
    return (
        <MainTemplate className={s.authMain}>
            <AuthForm />
        </MainTemplate>
    )
}

export default AuthPage