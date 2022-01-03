import Image from "next/image";
import Meta from "../components/Meta";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.bg__paralax}>
      <Meta />
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

      <main className={styles.main}>
        <div className={styles.main__container}>
          <div className={styles.main__title}>
            <h1>Model S</h1>
            <span>
              Order Online for <a href="#">Touchless Delivery</a>
            </span>
          </div>

          <div className={`${styles.flex__between} ${styles.main__buttons}`}>
            <button className="main__buttonItem">Custom Order</button>
            <button className="main__buttonItem">Existing Inventory</button>
          </div>
        </div>
      </main>

      <footer className={`${styles.container} ${styles.footer}`}>
        <div className={`${styles.flex__between} ${styles.footer__container}`}>
          <a href="#" className="footer__link">
            Tesla C 2022
          </a>
          <a href="#" className="footer__link">
            Privacy & Legal
          </a>
          <a href="#" className="footer__link">
            Contact
          </a>
          <a href="#" className="footer__link">
            Careers
          </a>
          <a href="#" className="footer__link">
            News
          </a>
          <a href="#" className="footer__link">
            Engage
          </a>
          <a href="#" className="footer__link">
            Locations
          </a>
        </div>
      </footer>
    </div>
  );
}
