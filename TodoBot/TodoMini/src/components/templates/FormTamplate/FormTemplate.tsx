import { FC, ReactNode } from "react"
import clsx from "clsx"
import FormTitle from "@/components/atoms/FormTitle/FormTitle"
import s from "./FormTemplate.module.scss"

import type { FormTitleVariant } from "@/types"

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