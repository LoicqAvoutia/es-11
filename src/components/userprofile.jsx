import './userprofile.css'
import { useauth } from '../context/Authcontext';

export const UserProfile = () =>{
    const user = useauth();
    return(
        <>
            <div className="profile" style={user.user ? null : {display:"none"}}>
                <p>{user.user ? user.user.nome : 'nome utente'}</p>
                <p>{user.user ? user.user.email : 'email utente'}</p>
                <button type='submit' onClick={user.logout}>esci</button>
            </div>
        </>
    )
}