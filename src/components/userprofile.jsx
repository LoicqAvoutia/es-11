import './userprofile.css'
import { useauth } from '../context/Authcontext';

export const UserProfile = () =>{
    const user = useauth();
    return(
        <>
            <div className="profile">
                <p>{user.user ? user.user.nome : 'nome utente'}</p>
                <p>{user.user ? user.user.email : 'email utente'}</p>
            </div>
        </>
    )
}