import { FC } from "react";
import { SpinnerCircular } from 'spinners-react';
import s from "./Loading.module.scss"


const Loading:FC = () => {
    const size = 100;
    const color = "rgba(99, 57, 172, 1)";
    const secondaryColor = "rgba(101, 57, 172, 0.32)";

    return (
        <div className={s.loading}>
            <SpinnerCircular size={size} thickness={100} speed={100} color={color} secondaryColor={secondaryColor} />
        </div>
    );
};

export default Loading