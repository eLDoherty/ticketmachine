import styles from '../../styles/pages/login.module.scss';

export default function Login() {
    return (
        <div className={styles['tm-login-container']}>
            <div className={styles['tm-login-box']}>
                <h1 className={styles['tm-login-title']}>Login</h1>
                <form className={styles['tm-login-form']}>
                    <div className={styles['tm-form-group']}>
                        <label htmlFor="username" className={styles['tm-form-label']}>Username</label>
                        <input type="text" id="username" className={styles['tm-form-input']} />
                    </div>
                    <div className={styles['tm-form-group']}>
                        <label htmlFor="password" className={styles['tm-form-label']}>Password</label>
                        <input type="password" id="password" className={styles['tm-form-input']} />
                    </div>
                    <button type="submit" className={styles['tm-login-button']}>Login</button>
                </form>
            </div>
        </div>
    );
}
