import Image from "next/image";
import styles from "../styles/Home.module.scss";

const Navigation = () => {
  return (
    <nav
      className={`${styles.container} ${styles.flex__between} ${styles.nav}`}
    >
      <a href="#">
        <Image
          className={styles.nav__logo}
          src="/Assets/tesla-logo.svg"
          alt="Tesla Logo"
          width="120"
          height="30"
        />
      </a>

      <div className={styles.nav__links}>
        <a className={styles.nav__button} href="#" alt="#">
          Model S
        </a>
        <a className={styles.nav__button} href="#" alt="#">
          Model 3
        </a>
        <a className={styles.nav__button} href="#" alt="#">
          Model X
        </a>
        <a className={styles.nav__button} href="#" alt="#">
          Model Y
        </a>
        <a className={styles.nav__button} href="#" alt="#">
          Solar Roof
        </a>
        <a className={styles.nav__button} href="#" alt="#">
          Solar Panels
        </a>
      </div>

      <div className={styles.nav__links}>
        <a className={styles.nav__button} href="#">
          Shop
        </a>
        <a className={styles.nav__button} href="#">
          Account
        </a>
        <button type="button" className={styles.nav__button}>
          Menu
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
