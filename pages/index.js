import Head from "next/head";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Projects from "../components/projects";
import Contact from "../components/Contact";
import { useEffect } from "react";

export default function Home() {

  return (
    <div >
      <Head>
        <title>Shubham.</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />
      <Header />
      <Projects />
      <Contact />
    </div>
  );
}
