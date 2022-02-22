import * as React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './layout.module.css';

const Layout: React.FC = ({children}) => {
    return (
        <div className={styles.layout}> 
        <Navbar />
            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}

export default Layout;