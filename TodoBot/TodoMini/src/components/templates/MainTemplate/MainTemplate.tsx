import Header from "@/components/organisms/Header/Header"
import { FC, ReactNode } from "react"

interface MainTemplateProps {
  children: ReactNode;
  className?: string;
}

const MainTamplate:FC<MainTemplateProps> = ({children, className}) => {
    return (
        <>
            <Header />
            <main className={className}>{children}</main>
        </>
    )
}

export default MainTamplate