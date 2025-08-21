const SeuNome = ({ setNome }) => {
    return (
        <div>
            <h1>Digite seu nome</h1>
            <input type="text" name="name" id="name" placeholder="Digite seu nome" onChange={(e) => setNome(e.target.value)} />
        </div>
    );
}

export default SeuNome  