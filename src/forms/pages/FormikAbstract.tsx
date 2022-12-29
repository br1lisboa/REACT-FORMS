import { Formik, Form } from "formik";
import * as Yup from 'yup'

import { MyCheckBoxInput, MyTextInput, MySelectInput } from "../components";

import '../styles/styles.css'

export const FormikAbstract = () => {

    return (
        <div>

            <h1>Formik Abstraction</h1>

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

                            <MyTextInput label="First Name" name="firstName" placeholder="Bruno" />

                            <MyTextInput label="Last Name" name="lastName" placeholder="Lisboa" />

                            <MyTextInput label="Email Adress" name="email" placeholder="Email" type="email" />

                            <MySelectInput label={"jobType"} name={"jobType"} >
                                <option value="">Pick something</option>
                                <option value="develpo">develpo</option>
                                <option value="desing">desing</option>
                                <option value="it senior">it senior</option>
                                <option value="it jr">it jr</option>
                            </MySelectInput>

                            <MyCheckBoxInput label={"Termns & Conditions"} name={"terms"} />

                            <button type='submit'>Submit</button>

                        </Form>

                    )
                }


            </Formik>

        </div>
    )
}
