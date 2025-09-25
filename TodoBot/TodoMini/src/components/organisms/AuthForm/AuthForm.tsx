import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "@/api/services/auth";
import Button from "@/components/atoms/Button/Button";
import FormTemplate from "@/components/templates/FormTamplate/FormTemplate";
import FieldSecondary from "@/components/atoms/FieldSecondary/FieldSecondary";
import s from "./AuthForm.module.scss"
import { useDispatch } from "react-redux";
import { setToken } from "@/store/slice/auth/authSlice";


const AuthForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [login] = useLoginMutation();
    const [isEmail, setIsEmail] = useState<string>("");
    const [isPassword, setIsPassword] = useState<string>("")

    const [sendStatus, setSendStatus] = useState<string | null>(null);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const result = await login({
            username: isEmail,
            password: isPassword,
            }).unwrap();

            dispatch(setToken(result.access_token));

            if (window.Telegram?.WebApp) {
                window.Telegram.WebApp.sendData(JSON.stringify({ token: result.access_token }));
                setSendStatus("вызван");
            } else {
                console.warn("WebApp API недоступен");
                setSendStatus("ошибка");
            }


            navigate("/todo");
        } catch (err) {
            console.error("Login failed", err);
        }
        };


    return (
            <FormTemplate variant="login" >
                {sendStatus && (
                    <div style={{ color: "green", marginTop: "10px" }}>
                        {sendStatus}
                    </div>
                )}
                <form className={s.form} onSubmit={handleSubmit}>
                    <FieldSecondary type={"email"} isValue={isEmail} setValue={setIsEmail} placeholder="Email" />
                    <FieldSecondary type={"password"} isValue={isPassword} setValue={setIsPassword} placeholder="Password" />
                    <Button name="Send" type="submit" extraClass={s.btn} disabled={!isEmail || !isPassword}/>
                </form>
            </FormTemplate>
    )
}

export default AuthForm