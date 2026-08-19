import { useauth } from '../context/Authcontext';
import './loginform.css'
import { useState } from 'react'

export const Loginform = () =>{
    const user = useauth();
    const [nome, setNome] = useState("");
    function handleSubmit(event) {
        event.preventDefault();
        user.login(nome);
        console.log(user.user)
    }

    return(
        <>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='nome' onChange={e=>setNome(e.target.value)}/>
                <button type='submit'>accedi</button>
            </form>
        </>
    )
}