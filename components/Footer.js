import styles from "../styles/Home.module.scss";

const Footer = () => {
  return (
    <footer className={`${styles.container} ${styles.footer}`}>
      <div className={`${styles.flex__between} ${styles.footer__container}`}>
        <span>Tesla &copy; 2022</span>
        <a href="#">Privacy &#38; Legal</a>
        <a href="#">Contact</a>
        <a href="#">Careers</a>
        <a href="#">News</a>
        <a href="#">Engage</a>
        <a href="#">Locations</a>
      </div>
    </footer>
  );
};

export default Footer;
