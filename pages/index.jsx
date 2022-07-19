import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>Friend List | Home</title>
        <meta name="keywords" content="home" />
      </Head>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet in,
        cupiditate odio quam libero ipsa laboriosam veritatis minima pariatur ad
        eaque autem aut est. Quam aut commodi vitae reprehenderit eligendi.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet in,
        cupiditate odio quam libero ipsa laboriosam veritatis minima pariatur ad
        eaque autem aut est. Quam aut commodi vitae reprehenderit eligendi.
      </p>
      <Link href="/friends">
        <a className={styles.btn}>See Friends Listing</a>
      </Link>
    </>
  );
};

export default Home;
