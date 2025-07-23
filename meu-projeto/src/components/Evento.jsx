const Evento = ({ numero }) => {

    const meuEvento = () => {
        console.log(`Opa, fui ativado ${numero} vezes!`);
    }

    return (
        <div>
            <p>Clique para disparar o evento</p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    );
};

export default Evento;
