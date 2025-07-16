const Pessoa = ({photo, name, age, profession}) => {
    return (
        <div>
            <img className="img" src={photo} alt={name} />
            <h2>Nome {name}</h2>
            <h2>Idade {age}</h2>
            <h2>Profissão {profession}</h2>
        </div>
    );
}

export default Pessoa;