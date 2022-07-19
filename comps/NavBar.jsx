import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Friend List</h1>
      </div>
      <Link href="/">Home</Link>
      <Link href="/friends">Friend List</Link>
      <Link href="/about">About</Link>
    </nav>
  );
};

export default NavBar;
