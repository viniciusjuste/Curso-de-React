const Form = () => {

    const cadastrarUser = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        console.log(name);
    }

    return (
        <div>
            <h1>Meu Formulário</h1>
            <form onSubmit={cadastrarUser}>
                <label>
                    Nome:
                    <input type="text" name="name" />
                </label>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Form