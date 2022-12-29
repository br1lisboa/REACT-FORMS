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
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string().max(15, '15 caracteres como maximo').required('Requerido'),
                    lastName: Yup.string().max(10, 'Debe tener 10 caracteres como maximo').required('Requerdo'),
                    email: Yup.string().required('Requerido').email('El email no tiene un formato valido'),
                    terms: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
                    jobType: Yup.string().notOneOf(['it jr', 'Esta opcion no es permitida']).required('Requerido')
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

                            <label htmlFor="jobType">Job type</label>
                            <Field name='jobType' as='select'>
                                <option value="">Pick something</option>
                                <option value="develpo">develpo</option>
                                <option value="desing">desing</option>
                                <option value="it senior">it senior</option>
                                <option value="it jr">it jr</option>
                            </Field>
                            <ErrorMessage name="jobType" component='span' />

                            <label htmlFor="terms">Terms and Conditions</label>
                            <Field name='terms' type='checkbox' />
                            <ErrorMessage name="terms" component='span' />

                            <button type='submit'>Submit</button>

                        </Form>

                    )
                }


            </Formik>

        </div>
    )
}
