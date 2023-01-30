import Head from "next/head";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sabilillah | Front-end Developer</title>
        <meta
          name="description"
          content="Hi there, I am Sabilillah, a Front-end Developer from Jakarta, Indonesia."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>Home Page</main>
    </>
  );
}
