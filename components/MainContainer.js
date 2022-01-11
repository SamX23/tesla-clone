import source from "../data/string.json";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const MainSection = dynamic(() => import("./MainSection"));

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
