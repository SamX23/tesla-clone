import { Fade } from "react-awesome-reveal";
import styles from "../styles/Home.module.scss";

const MainContainer = () => {
  return (
    <main className={styles.main}>
      <div className={styles.main__container}>
        <Fade>
          <div className={styles.main__title}>
            <h1>Model S</h1>
            <span>
              Order Online for <a href="#">Touchless Delivery</a>
            </span>
          </div>

          <div className={`${styles.flex__between} ${styles.main__buttons}`}>
            <button type="button">Custom Order</button>
            <button type="button">Existing Inventory</button>
          </div>
        </Fade>
      </div>
    </main>
  );
};

export default MainContainer;
