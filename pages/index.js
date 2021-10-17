import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-cool-gray-100 w-full min-h-screen ">
      <Header />
      <div className="bg-white">
        <div className="">Carausel</div>
        <div className="">Our Product & Services</div>
        <div className="">Why Eagles Crew?</div>
        <div className="">Our Happy Clients</div>
      </div>
      <Footer />
    </div>
  );
}
