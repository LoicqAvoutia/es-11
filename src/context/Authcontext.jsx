import { Children } from 'react';
import { useState, createContext, useContext } from 'react'

const Authcontext = createContext();

export const useauth = () => useContext(Authcontext);

export const Authprovider = ({children}) =>{
    let user = null;
    const login = () =>{
        
    }
    return(
        <>
            <Authcontext>
                {children}
            </Authcontext>
        </>
    )
}