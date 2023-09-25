import {
  motion,
  useScroll,
  useSpring,
  AnimatePresence
} from "framer-motion";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
// pages/_app.js
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });


export default function App({ Component, pageProps }) {
  // scrollbar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  //router
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen h-full`}
      >
        <Navbar />
        <AnimatePresence initial={false} mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
      {/* scrollbar */}
      <motion.div className="fixed left-0 right-0 rounded-xl h-[5px] md:hidden bg-black bottom-[90px] dark:bg-white" style={{ scaleX }} />
    </>
  );
}
