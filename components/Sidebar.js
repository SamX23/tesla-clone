import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import styles from "../styles/Home.module.scss";

const Container = styled.div`
  ${(props) =>
    props.display &&
    css`
      display: block;
    `}
`;
const Sidebar = ({ display }) => {
  const [show, setShow] = useState();

  useEffect(() => setShow(display), [display]);

  const handleClick = (e) => {
    e.preventDefault();

    setShow((state) => !state);
  };

  return (
    <Container className={styles.sidebar__container} display={show}>
      <div className={styles.sidebar__fill}>
        <div className={styles.sidebar__header}>
          <button
            type="button"
            onClick={handleClick}
            className={styles.sidebar__close}
          >
            X
          </button>
        </div>
        <div className={styles.sidebar__menu}>
          <a className={styles.menu__item} href="#" alt="">
            Model S
          </a>
          <a className={styles.menu__item} href="#" alt="">
            Model 3
          </a>
          <a className={styles.menu__item} href="#" alt="">
            Model x
          </a>
          <a className={styles.menu__item} href="#" alt="">
            Model Y
          </a>
          <a className={styles.menu__item} href="#" alt="">
            Solar Roof
          </a>
          <a className={styles.menu__item} href="#" alt="">
            Solar Panels
          </a>
          <a className={styles.menu__item} href="#" alt="">
            Existing Inventory
          </a>
          <a className={styles.menu__item} href="#" alt="">
            Used Inventory
          </a>
          <a className={styles.menu__item} href="#" alt="">
            Trade-In
          </a>
          <a className={styles.menu__item} href="#" alt="">
            Powerwall
          </a>
          <a className={styles.menu__item} href="#" alt="">
            Commercial Energy
          </a>
          <a className={styles.menu__item} href="#" alt="">
            Utilities
          </a>
          <a className={styles.menu__item} href="#" alt="">
            Charging
          </a>
          <a className={styles.menu__item} href="#" alt="">
            Find Us
          </a>
          <a className={styles.menu__item} href="#" alt="">
            Support
          </a>
          <a className={styles.menu__item} href="#" alt="">
            Investor Relations
          </a>
          <a className={styles.menu__item} href="#" alt="">
            Shop
          </a>
          <a className={styles.menu__item} href="#" alt="">
            Account
          </a>
          <button className={`${styles.menu__itemOption} ${styles.menu__item}`}>
            <span>More</span>
            <span>Arrow</span>
          </button>

          <button className={`${styles.menu__itemOption} ${styles.menu__item}`}>
            <span>Globe</span>
            <div>
              <span>United States</span>
              <span>English</span>
            </div>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Sidebar;
