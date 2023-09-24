import Link from "next/link";
import React from "react";
import Layout from "./Layout";
import { TbBrandNextjs } from "react-icons/tb";

const Footer = () => {
  return (
    <footer
      className="w-full font-medium text-lg dark:text-light sm:text-base"
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>

        <div className="flex items-center lg:py-2">
          Built with <span className="text-black text-2xl px-1 dark:text-white"><TbBrandNextjs /></span> by&nbsp;
          <Link
            href="https://www.linkedin.com/in/ma-sum-575068196/"
            target="_blank"
            className="underline underline-offset-2"
          >
            Ma&apos;sum
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
