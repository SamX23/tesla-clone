import Footer from "../components/Footer";
import MainContainer from "../components/MainContainer";
import Meta from "../components/Meta";
import Navigation from "../components/Navigation";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.bg__paralax}>
      <Meta />
      <Navigation />
      <MainContainer />
      <Footer />
    </div>
  );
}
