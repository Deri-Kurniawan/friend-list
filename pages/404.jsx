import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Friend List | Page Not Found</title>
        <meta name="keywords" content="page not found" />
      </Head>

      <div className="not-found">
        <h1>Ooops...</h1>
        <h2>That Page Cannot Be Found</h2>
        <p>
          Go back to the{" "}
          <Link href="/">
            <a>Home Page</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
