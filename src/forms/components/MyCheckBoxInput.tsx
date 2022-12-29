import { ErrorMessage, useField } from "formik"

interface Props {
    label: string
    name: string
    [x: string]: any
}

export const MyCheckBoxInput = ({ label, ...props }: Props) => {

    const [field] = useField({ ...props, type: 'checkbox' })

    return (
        <>
            <label>
                <input type="checkbox" {...field} {...props} />
                {label}
            </label>
            <ErrorMessage name={props.name} component='span' />

            {/* 
            //* SOLO QUIEDA PARA DOCU, SIMPLIFICADO CON EL COMPONENTE ERRORMSG 
           {
                meta.touched && meta.error && (
                    <span className="error">{meta.error}</span>
                )
            } 
            */}

        </>
    )
}
