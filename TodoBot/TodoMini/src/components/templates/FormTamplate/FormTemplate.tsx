import { FC, ReactNode } from "react"
import s from "./FormTemplate.module.scss"

import FormTitle from "@/components/atoms/FormTitle/FormTitle"
import { FormTitleVariant } from "@/types"
import clsx from "clsx"

interface FormTemplateProps {
    children: ReactNode,
    variant: FormTitleVariant,
}

const FormTemplate:FC<FormTemplateProps> = ({children, variant}) => {
    return (
        <div className={clsx(s.container, s[variant])}>
            <FormTitle variant={variant} />
            {children}
        </div>
    )
}

export default FormTemplate