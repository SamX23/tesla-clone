import { Fade } from "react-awesome-reveal";
import styled from "styled-components";
import styles from "../styles/Home.module.scss";

const Container = styled.div`
  background-image: url(${({ bg }) => bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const MainSection = ({ data }) => {
  const item = data;

  return (
    <div id={item.id} className={styles.main__section}>
      <Container className={styles.main__container} bg={item.background}>
        <Fade>
          <div className={styles.main__title}>
            <h1>{item.title}</h1>
            {item.subTitle != "" && (
              <span>
                {item.subTitle}
                {item.subTitleLink != "" && (
                  <a href="#" alt={item.title}>
                    {item.subTitleLink}
                  </a>
                )}
              </span>
            )}
          </div>
          {item.id == 7 ? (
            <div className={`${styles.main__buttons}`}>
              <button type="button">SHOP NOW</button>
            </div>
          ) : (
            <div className={`${styles.flex__between} ${styles.main__buttons}`}>
              <button type="button">Custom Order</button>
              <button type="button">Existing Inventory</button>
            </div>
          )}
        </Fade>
      </Container>
    </div>
  );
};

export default MainSection;
