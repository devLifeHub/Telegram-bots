import { useState } from "react"
import s from "./AuthForm.module.scss"
import Button from "@/components/atoms/Button/Button";
import InputPrimary from "@/components/atoms/InputPrimary/InputPrimary";
import TitlePrimary from "@/components/atoms/TitlePrimary  /TitlePrimary";
import { useLoginMutation } from "@/api/services/auth";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
    const navigate = useNavigate()
    const [login] = useLoginMutation();
    const [isEmail, setIsEmail] = useState<string>("");
    const [isPassword, setIsPassword] = useState<string>("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const result = await login({
                username: isEmail,
                password: isPassword,
            }).unwrap();
            localStorage.setItem("accessToken", result.access_token);
            navigate("/todo");
        } catch (err) {
            console.error("Login failed", err);
        }
    };


    return (
        <div className={s.container}>
            <TitlePrimary variant={"login"} />
            <form className={s.form} onSubmit={handleSubmit}>
                <InputPrimary type={"email"} isValue={isEmail} setValue={setIsEmail} placeholder="Email" />
                <InputPrimary type={"password"} isValue={isPassword} setValue={setIsPassword} placeholder="Password" />
                <Button name="Send" type="submit" extraClass={s.btn} disabled={!isEmail || !isPassword}/>
            </form>
        </div>
    )
}

export default AuthForm