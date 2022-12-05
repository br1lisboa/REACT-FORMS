
import { useForm } from '../hooks/useForm';
import '../styles/styles.css'


export const RegisterPage = () => {

    const { onChange, formData, name, email, password1, password2, resetForm, isValidEmail } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: '',
    })

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log(formData)
    }

    return (
        <div>

            <h1>Register Page</h1>

            <form onSubmit={onSubmit}>
                <input type="text" value={name} name='name' placeholder="Name" onChange={onChange}
                    className={`${name.trim().length <= 0 && 'has-error'}`} />
                {name.trim().length <= 0 && <span > Este campo es necesario</span>}
                {/* Si el largo de name sacando los espacios, por es el trim(), es menor o igual a 0,
                mostrar el span con el operador &&. Basicamente si la condicion se cumple, se ejecuta lo
                siguiente, sino no. */}

                <input type="email" value={email} name='email' placeholder="Email" onChange={onChange}
                    className={`${!isValidEmail(email) && 'has-error'}`} />
                {!isValidEmail(email) && <span > El email es obligatorio</span>}

                <input type="password" value={password1} name='password1' placeholder="Password" onChange={onChange}
                    className={`${password1.length < 6 && 'has-error'}`} />
                {password1.length < 6 && <span > Este campo es necesario</span>}
                {password1.length < 6 && <span > El password debe tener al menos 6 digitos</span>}

                <input type="password" value={password2} name='password2' placeholder="Repeat password" onChange={onChange} />
                {password2.length <= 0 && <span > Este campo es necesario</span>}
                {password2.length > 0 && password1 !== password2 && <span > El password debe coincidir</span>}

                <button type="submit">Create</button>

                <button type='button' onClick={resetForm}>Reset</button>
            </form>

        </div >
    )
}
