import source from "../data/string.json";
import MainSection from "./MainSection";
import { useEffect, useState } from "react";

const MainContainer = () => {
  const [data, setData] = useState({});
  useEffect(() => setData(source), [data]);

  return (
    <>
      {data.length > 0 &&
        data?.map((item, key) => <MainSection key={key} data={item} />)}
    </>
  );
};

export default MainContainer;
