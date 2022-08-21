import Head from "next/head";
import Feed from "../components/Feed/Feed";
import Header from "../components/Header/Header";
import Modal from "../components/Modal/Modal";

export default function Home() {
  return (
    // div className={styles.container}
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>MUNIN</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://firebasestorage.googleapis.com/v0/b/munin-7a28b.appspot.com/o/ico22.ico?alt=media&token=c664c8ed-b9aa-4855-b13c-0337bc823b09"
        />
      </Head>
      {/* header */}
      <Header />

      {/* feed */}
      <Feed />
      {/* modal */}
      <Modal/>
    </div>
  );
}
