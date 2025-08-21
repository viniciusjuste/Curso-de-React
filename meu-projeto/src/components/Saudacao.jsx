const Saudacao = ({ nome }) => {
    return <>
        {
            nome ? <h1>Seja bem vindo {nome}</h1> : <h1>Seja bem vindo</h1>
        }
    </>
}

export default Saudacao