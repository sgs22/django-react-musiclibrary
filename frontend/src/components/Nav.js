import styles from './../styles/Nav.module.scss';

const Nav = ({ isLoggedIn }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>music library</h2>
      {isLoggedIn ? (
        <div className={styles['btn-container']}>
          <button className={styles.btn}>my account</button>
          <button className={styles.btn}>logout</button>
        </div>
      ) : (
        <div className={styles['btn-container']}>
          <button className={styles.btn}>sign up</button>
          <button className={styles.btn}>login</button>
        </div>
      )}
    </div>
  );
};

export default Nav;
