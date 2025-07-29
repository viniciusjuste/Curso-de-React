import Button from "./evento/Button";

const Evento = ({ numero }) => {

    const meuEvento = () => {
        console.log(`Opa, Ativou primeiro evento!`);
    }

    const segundoEvento = () => {
        console.log(`Opa, Ativou segundo evento!`);
    }

    return (
        <div>
            <p>Clique para disparar o evento</p>
            <Button event={meuEvento} text="Primeiro evento"/>
            <Button event={segundoEvento} text="Segundo evento"/>
        </div>
    );
};

export default Evento;
