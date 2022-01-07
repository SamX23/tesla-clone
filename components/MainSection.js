import { Fade } from "react-awesome-reveal";
import styles from "../styles/Home.module.scss";

const Container = `
`;

const MainSection = ({ data }) => {
  return (
    <div className={styles.main__container}>
      <Fade>
        <div className={styles.main__title}>
          <h1>{data.title}</h1>
          <span>
            {data.subTitle}
            <a href="#">{data.subTitleLink}</a>
          </span>
        </div>

        <div className={`${styles.flex__between} ${styles.main__buttons}`}>
          <button type="button">Custom Order</button>
          <button type="button">Existing Inventory</button>
        </div>
      </Fade>
    </div>
  );
};

export default MainSection;
