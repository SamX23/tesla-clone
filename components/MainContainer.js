import source from "../data/string.json";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.scss";

const MainSection = dynamic(() => import("./MainSection"));

const MainContainer = () => {
  const [data, setData] = useState({});
  useEffect(() => setData(source), [data]);

  return (
    <main className={styles.main}>
      {data.length > 0 &&
        data?.map((item, key) => <MainSection key={key} data={item} />)}
    </main>
  );
};

export default MainContainer;
