import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'

import '../styles/styles.css'

/* interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
} */

export const FormikComponents = () => {

    return (
        <div>

            <h1>Formik Components</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string().max(15, '15 caracteres como maximo').required('Requerido'),
                    lastName: Yup.string().max(10, 'Debe tener 10 caracteres como maximo').required('Requerdo'),
                    email: Yup.string().required('Requerido').email('El email no tiene un formato valido')
                })}
            >

                {
                    formik => (

                        <Form >

                            <label htmlFor="firstName">First Name</label>
                            <Field name='firstName' type='text' />
                            <ErrorMessage name="firstName" component='span' />

                            <label htmlFor="lastName">Last Name</label>
                            <Field name='lastName' type='text' />
                            <ErrorMessage name="lastName" component='span' />

                            <label htmlFor="email">Email Addres</label>
                            <Field name='email' type='email' />
                            <ErrorMessage name="email" component='span' />

                            <button type='submit'>Submit</button>

                        </Form>

                    )
                }


            </Formik>

        </div>
    )
}
