import { useFormik } from "formik";
import * as Yup from 'yup'

import '../styles/styles.css'

/* interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
} */

export const FormikYouPage = () => {

    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(15, '15 caracteres como maximo').required('Requerido'),
            lastName: Yup.string().max(10, 'Debe tener 10 caracteres como maximo').required('Requerdo'),
            email: Yup.string().required('Requerido').email('El email no tiene un formato valido')
        })
    })

    return (
        <div>

            <h1>Formik Yup</h1>

            <form onSubmit={handleSubmit} noValidate>

                <label htmlFor="firstName">First Name</label>
                <input type="text"
                    /* name='firstName' onChange={handleChange} onBlur={handleBlur} value={values.firstName} */
                    {...getFieldProps('firstName')} />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor="lastName">Last Name</label>
                <input type="text" {...getFieldProps('lastName')} />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor="email">Email Addres</label>
                <input type="email" {...getFieldProps('email')} />
                {touched.email && errors.email && <span>{errors.email}</span>}

                <button type='submit'>Submit</button>

            </form>

        </div>
    )
}
