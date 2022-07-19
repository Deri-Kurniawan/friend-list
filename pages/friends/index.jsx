import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Friends.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      friends: data,
    },
  };
};

const Friends = ({ friends }) => {
  return (
    <>
      <Head>
        <title>Friend List | About</title>
        <meta name="keywords" content="about" />
      </Head>

      <h1>Friends</h1>

      {friends.map((friend) => (
        <Link key={friend.id} href={`/friends/${friend.id}`}>
          <a className={styles.single}>
            <h3>{friend.name}</h3>
          </a>
        </Link>
      ))}
    </>
  );
};

export default Friends;
