import { useState } from "react";

const Form = () => {

    const cadastrarUser = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        console.log(name);
    }

    const [name, setName] = useState();
    const [password, setPassword] = useState();

    return (
        <div>
            <h1>Meu Formulário</h1>
            <form onSubmit={cadastrarUser}>
                <label>
                    Nome:
                    <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} />
                </label>

                <label>
                    Senha:
                    <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Form