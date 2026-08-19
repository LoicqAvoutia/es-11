import { useState } from 'react'
import './App.css'
import { Loginform } from './components/loginform'
import { UserProfile } from './components/userprofile'

function App() {
  const [count, setCount] = useState(0)
  /*
  Esercizio 2: Sistema di Autenticazione Utente (Livello Intermedio)
Obiettivo: Gestire la sessione di un utente (login/logout) senza passare le props manualmente attraverso l'albero dei componenti.

Cosa devi fare:

Crea un AuthContext e il relativo AuthProvider.

Lo stato dell'autenticazione deve contenere l'oggetto user (es. { name: 'Mario', email: 'mario@email.com' } oppure null se scollegato).

Implementa due funzioni nel provider:

login(userData): imposta i dati dell'utente.

logout(): riporta lo stato user a null.

Crea due componenti distinti:

LoginForm: presente se l'utente è null, con un campo di input per il nome e un bottone "Accedi".

UserProfile: presente se l'utente è autenticato, mostra un messaggio di benvenuto ("Ciao, Mario!") e un bottone "Esci".
  */

  return (
    <>
      <Loginform />
      <UserProfile />
    </>
  )
}

export default App
