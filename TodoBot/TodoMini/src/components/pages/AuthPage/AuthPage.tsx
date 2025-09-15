import { FC } from "react"
import AuthForm from "@/components/organisms/AuthForm/AuthForm"
import MainTamplate from "@/components/templates/MainTamplate/MainTamplate"
import s from "./AuthPage.module.scss"

const AuthPage: FC = () => {
    return (
        <MainTamplate className={s.authMain}>
            <AuthForm />
        </MainTamplate>
    )
}

export default AuthPage