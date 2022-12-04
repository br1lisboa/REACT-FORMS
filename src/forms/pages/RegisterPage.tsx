import { useState } from 'react'

import '../styles/styles.css'


export const RegisterPage = () => {

    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        password1: '',
        password2: '',
    })

    const { name, email, password1, password2 } = registerData

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        /*  console.log(e.target.value) */
        setRegisterData(prevValue => ({
            ...prevValue,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log(registerData)
    }

    return (
        <div>

            <h1>Register Page</h1>

            <form onSubmit={onSubmit}>
                <input type="text" value={name} name='name' placeholder="Name" onChange={onChange} />

                <input type="email" value={email} name='email' placeholder="Email" onChange={onChange} />

                <input type="password" value={password1} name='password1' placeholder="Password" onChange={onChange} />

                <input type="password" value={password2} name='password2' placeholder="Repeat password" onChange={onChange} />

                <button type="submit">Create</button>
            </form>

        </div>
    )
}
