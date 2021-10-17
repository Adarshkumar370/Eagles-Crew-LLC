import styles from "../styles/Header.module.css";
import Link from "next/link";
import Logo from "../components/Icons/Logo";
import { useState } from "react";
const Header = () => {
  const [menu, setMenu] = useState("hidden");
  return (
    <div className="flex flex-col gap-3 ">
      <div className="hidden  container mx-auto pt-2 lg:flex flex-col text-center lg:flex-row justify-center text-lg gap-3 font-semibold lg:gap-6">
        <span className={styles.primary}>
          Sales: <span className=" text-black">+971 56 658 8598</span>
        </span>

        <span className={styles.primary}>
          Support:
          <span className=" text-black"> +971 54 303 8220</span>
        </span>
        <span className={styles.primary}>
          Email:
          <span className=" text-black"> info@eaglescrewllc.com</span>
        </span>
      </div>
      <hr />
      <div className="flex flex-col lg:flex-row lg:justify-between container mx-auto">
        <div className=" lg:mx-2 flex justify-between px-6">
          {" "}
          <div className="w-72">
            <Logo />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 my-auto lg:hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => {
              menu === "hidden" ? setMenu("flex") : setMenu("hidden");
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div
          className={` ${menu} transition duration-300 delay-100 lg:flex flex-col lg:flex-row gap-4 my-6 text-lg text-gray-700 text-center font-semibold `}
        >
          <Link href="/">
            <span className="hover:text-red-600  border-b my-1 border-cool-gray-100 lg:hover:border-rose-600 cursor-pointer">
              Home
            </span>
          </Link>
          <Link href="/">
            <span className="hover:text-red-600  border-b my-1 border-cool-gray-100 lg:hover:border-rose-600 cursor-pointer">
              About Us
            </span>
          </Link>
          <Link href="/">
            <span className="hover:text-red-600  border-b my-1 border-cool-gray-100 lg:hover:border-rose-600 cursor-pointer">
              Contact Us
            </span>
          </Link>
          <Link href="/">
            <span className="hover:text-red-600  border-b my-1 border-cool-gray-100 lg:hover:border-rose-600 cursor-pointer">
              Product & Services
            </span>
          </Link>
          <Link href="/">
            <span className="hover:text-red-600  border-b my-1 border-cool-gray-100 lg:hover:border-rose-600 cursor-pointer">
              Get a Quote &rarr;
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
