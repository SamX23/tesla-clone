import Head from "next/head";

const Meta = () => {
  return (
    <Head>
      <title>Electric Cars, Solar & Clean Energy | Tesla Clone</title>
      <meta
        name="title"
        content="Electric Cars, Solar & Clean Energy | Tesla Clone"
      />
      <meta
        name="description"
        content="A clone of tesla homepage created using Next JS only for learning purpose, created by : Sami Kalammallah"
      />
      <meta
        property="og:title"
        content="Electric Cars, Solar & Clean Energy | Tesla Clone"
      />
      <meta property="og:site_name" content="Tesla Landing Page Clone" />
      <meta property="og:url" content="https://tesla-clone-black.vercel.app/" />
      <meta
        property="og:description"
        content="A clone of tesla homepage created using Next JS only for learning purpose, created by : Sami Kalammallah"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://tesla-clone-black.vercel.app/Assets/home-1.webp"
      />
      <meta
        name="keywords"
        content="tesla, tesla clone, sami kalammallah, landing page"
      />
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    </Head>
  );
};

export default Meta;
