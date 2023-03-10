import type { NextPage } from "next";
import Head from "next/head";
import { RandomFox } from "../components/RandomFox";

const random = () => Math.floor(Math.random() * 123) + 1;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline">Hello 😎!</h1>
        <RandomFox
          alt="random fox image"
          image={`https://randomFox.ca/images/${random()}.jpg`}
        />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
