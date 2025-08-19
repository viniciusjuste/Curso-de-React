import { useState } from "react";

const Condicional = () => {

    const [email, setEmail] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const enviarEmail = (e) => {
        e.preventDefault();
        setUserEmail(email);

        console.log(userEmail)
    }

    return (
        <div>
            <h1>Cadastre o seu email:</h1>
            <form>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <button onClick={enviarEmail}>Enviar</button>
            </form>

            {/* Renderização condicional */}
            {userEmail && (<div>
                <p>O email do usuario é: {userEmail}</p>
                <button onClick={() => setUserEmail('')}>Limpar</button>
            </div>)}
        </div>
    );
}

export default Condicional;
