import Item from './Item';

const List = () => {
    return (
        <>
        <h1>Minha Lista</h1>
        <ul>
            <Item />
            <Item marca="Fiat" ano_lancamento={1964} />
        </ul>
        </>
    );
}

export default List