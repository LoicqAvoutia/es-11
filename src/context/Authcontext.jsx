import { Children } from 'react';
import { useState, createContext, useContext } from 'react'

const Authcontext = createContext();

export const useauth = () => useContext(Authcontext);

export const Authprovider = ({children}) =>{
    const [user, setuser] = useState(null);
    const login = (nome) =>{
        setuser({nome: nome, email: `${nome}@gmail.com`})
    }
    const logout = () =>{
        setuser(null)
    }
    const data={
        user: user,
        setuser: setuser,
        logout: logout,
        login:login
    }
    return(
        <>
            <Authcontext value={data}>
                {children}
            </Authcontext>
        </>
    )
}