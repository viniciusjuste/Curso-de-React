import styles from './Frase.module.css';

const Frase = () => {
    return (
        <div className={styles.fraseContainer}>
            <h1 className={styles.fraseContent}>Esta é uma frase de exemplo.</h1>
        </div>
    );
}

export default Frase;