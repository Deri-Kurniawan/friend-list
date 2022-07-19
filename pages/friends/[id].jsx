// untuk menyiapkan halaman yang ingin di pre rendering
// maka setiap path halaman harus didaftarkan di getStaticPaths()

export const getStaticPaths = async () => {
  // Fetch API
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  // Mengambil unique value yang ingin digunakan sebagai key prerendering dan harus berupa string
  // /friends/[id]
  const paths = data.map((friend) => ({
    params: { id: friend.id.toString() },
  }));

  return {
    // path yang ingin di prerendering
    paths,
    // jika mengakses dengan id yang tidak terdaftar di path, maka akan menampilkan 404
    fallback: false,
  };
};

// menerima parameter context dari getStaticPaths
export const getStaticProps = async (context) => {
  // mengambil parameter id
  const id = context.params.id;

  // Fetch API
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  // mengirimkan props ke component Detail
  return {
    props: {
      friend: data,
    },
  };
};

// mendestruct props dari getStaticProps
const Detail = ({ friend }) => {
  return (
    <div>
      <h1>{friend.name}</h1>
      <p>{friend.email}</p>
      <p>{friend.website}</p>
      <p>{friend.address.city}</p>
    </div>
  );
};

export default Detail;
