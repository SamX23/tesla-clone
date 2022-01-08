import Image from "next/image";
import styles from "../styles/Home.module.scss";

const Navigation = () => {
  return (
    <nav className={`${styles.flex__between} ${styles.nav}`}>
      <div className={styles.nav__logo}>
        <a href="#">
          <Image
            src="/Assets/tesla-logo.svg"
            alt="Tesla Logo"
            width="120"
            height="30"
          />
        </a>
      </div>

      <div className={`${styles.nav__links} ${styles.nav__models}`}>
        <a className={styles.nav__button} href="#" alt="#">
          <span>Model S</span>
        </a>
        <a className={styles.nav__button} href="#" alt="#">
          <span>Model 3</span>
        </a>
        <a className={styles.nav__button} href="#" alt="#">
          <span>Model X</span>
        </a>
        <a className={styles.nav__button} href="#" alt="#">
          <span>Model Y</span>
        </a>
        <a className={styles.nav__button} href="#" alt="#">
          <span>Solar Roof</span>
        </a>
        <a className={styles.nav__button} href="#" alt="#">
          <span>Solar Panels</span>
        </a>
        <div className={styles.hover__element}></div>
      </div>

      <div className={`${styles.nav__links} ${styles.nav__menu}`}>
        <a className={styles.nav__button} href="#">
          <span>Shop</span>
        </a>
        <a className={styles.nav__button} href="#">
          <span>Account</span>
        </a>
        <button type="button" className={styles.nav__button}>
          <span>Menu</span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
