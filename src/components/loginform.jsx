import './loginform.css'
import { useState } from 'react'

export const Loginform = () =>{
    const [appnome, setappNome] = useState("");
    const [nome, setNome] = useState("");
    function handleSubmit(event) {
        event.preventDefault();
        setNome(appnome);
    }

    return(
        <>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='nome' onChange={e=>setappNome(e.target.value)}/>
                <button type='submit'>accedi</button>
            </form>
        </>
    )
}