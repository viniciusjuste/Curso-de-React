import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.ul}>
                <li>
                    <Link className={styles.li} to="/">Home</Link>
                </li>
                <li>
                    <Link className={styles.li} to="/empresa">Empresa</Link>
                </li>
                <li>
                    <Link className={styles.li} to="/contato">Contato</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
