import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  InstagramIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";
import { useThemeSwitch } from "./Hooks/useThemeSwitch";

// Logo mid
// import blackLogo from '../../public/images/black-logo.png';
// import whiteLogo from '../../public/images/white-logo.png';
// import Image from "next/image";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className}  rounded relative group lg:text-light lg:dark:text-dark`}>
      {title}
      <span
        className={`
              inline-block h-[1px] bg-dark absolute left-0 -bottom-0.5
              transition-all delay-[1000ms] dark:transition-all dark:delay-[1000ms]
              group-hover:w-full dark:bg-light
              ${router.asPath === href ? "w-full" : " w-0"} lg:bg-light lg:dark:bg-dark
              `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button className={`${className}  rounded relative group lg:text-light lg:dark:text-dark`} onClick={handleClick}>
      {title}
      <span
        className={`
              inline-block h-[1px]  bg-dark absolute left-0 -bottom-0.5
              transition-all delay-[1000ms] dark:transition-all dark:delay-[1000ms]
              group-hover:w-full dark:bg-light
              ${router.asPath === href ? "w-full" : " w-0"} lg:bg-light lg:dark:bg-dark
              `}
      >
        &nbsp;
      </span>
    </button>
  );
};



const Navbar = () => {
  const [mode, setMode] = useThemeSwitch();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };


  // disable scroll on popup
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // console.log(document.body.style.overflow);
  });



  // Logo mid
  // let MotionLink = motion(Link);
  // let logo = blackLogo;

  // Logo mid
  // if (mode === 'dark') {
  //   logo = whiteLogo;
  // } else if (mode === 'light') {
  //   logo = blackLogo;
  // }


  return (
    <header className="w-full flex items-center justify-between px-32 py-8 font-medium z-10 dark:text-light
    lg:px-16 relative z-1 md:px-12 sm:px-8
    ">

      <button
        type="button"
        className="flex-col items-center justify-center hidden lg:flex"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        onClick={handleClick}
      >
        <span className="sr-only">Open main menu</span>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}></span>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? "opacity-0" : "opacity-100"} my-0.5`}></span>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden"
      >
        <nav className="flex items-center justify-center">
          <CustomLink className="mr-4 transition-all delay-[500ms] dark:transition-all dark:delay-[800ms]" href="/" title="Home" />
          <CustomLink className="mx-4 transition-all delay-[600ms] dark:transition-all dark:delay-[700ms]" href="/about" title="About" />
          <CustomLink className="mx-4 transition-all delay-[700ms] dark:transition-all dark:delay-[600ms]" href="/projects" title="Projects" />
          <CustomLink className="ml-4 transition-all delay-[800ms] dark:transition-all dark:delay-[500ms]" href="/contact" title="Contact" />
        </nav>
        <nav
          className="flex items-center justify-center flex-wrap lg:mt-2
      "
        >
          <motion.a
            target={"_blank"}
            className="w-6 mr-1"
            href="https://twitter.com/xMacum"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Checkout my twitter profile"
          >
            <TwitterIcon />
          </motion.a>

          <motion.a
            target={"_blank"}
            className="w-6 mx-3"
            href="https://github.com/masumrpg"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Checkout my github profile"
          >
            <GithubIcon />
          </motion.a>

          <motion.a
            target={"_blank"}
            className="w-6 mx-3"
            href="https://www.linkedin.com/in/ma-sum-575068196/"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Checkout my linkedin profile"
          >
            <LinkedInIcon />
          </motion.a>

          <motion.a
            target={"_blank"}
            className="w-6 mx-3"
            href="https://www.instagram.com/masum.rpg/"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Checkout my dribbble profile"
          >
            <InstagramIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`w-6 h-6 ease ml-3 flex items-center justify-center rounded-full p-1
            ${mode === "light" ? "bg-dark  text-light" : "bg-light  text-dark"}
            `}
            aria-label="theme-switcher"
          >
            {mode === "light" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>
      {
        isOpen ?

          <motion.div className="min-w-full flex justify-between items-center flex-col fixed top-1/2 left-1/2 -translate-x-1/2
      -translate-y-1/2
      py-52 bg-dark/90 dark:bg-light/75 rounded-lg z-50 backdrop-blur-md"
            initial={{ scale: 0, x: "-50%", y: "-50%", opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <nav className="flex items-center justify-center flex-col">
              <CustomMobileLink toggle={handleClick} className="mr-4 lg:m-0 lg:my-2 transition-all delay-[500ms] dark:transition-all dark:delay-[800ms]" href="/" title="Home" />
              <CustomMobileLink toggle={handleClick} className="mx-4 lg:m-0 lg:my-2 transition-all delay-[600ms] dark:transition-all dark:delay-[700ms]" href="/about" title="About" />
              <CustomMobileLink toggle={handleClick} className="mx-4 lg:m-0 lg:my-2 transition-all delay-[700ms] dark:transition-all dark:delay-[600ms]" href="/projects" title="Projects" />
              <CustomMobileLink toggle={handleClick} className="ml-4 lg:m-0 lg:my-2 transition-all delay-[800ms] dark:transition-all dark:delay-[500ms]" href="/contact" title="Contact" />
            </nav>
            <nav
              className="flex items-center justify-center  mt-2
      "
            >
              <motion.a
                target={"_blank"}
                className="w-6 m-1 mr-3 sm:mx-1"
                href="https://twitter.com/xMacum"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Checkout my twitter profile"
              >
                <TwitterIcon />
              </motion.a>

              <motion.a
                target={"_blank"}
                className="w-6 m-1 mx-3 sm:mx-1"
                href="https://github.com/masumrpg"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Checkout my github profile"
              >
                <GithubIcon />
              </motion.a>

              <motion.a
                target={"_blank"}
                className="w-6 m-1 mx-3 sm:mx-1"
                href="https://www.linkedin.com/in/ma-sum-575068196/"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Checkout my linkedin profile"
              >
                <LinkedInIcon />
              </motion.a>

              <motion.a
                target={"_blank"}
                className="w-6 m-1 mx-3 sm:mx-1"
                href="https://www.instagram.com/masum.rpg/"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Checkout my dribbble profile"
              >
                <InstagramIcon />
              </motion.a>

              <button
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className={`w-6 h-6 ease m-1 ml-3 sm:mx-1 flex items-center justify-center rounded-full p-1
            ${mode === "light" ? "bg-dark  text-light" : "bg-light  text-dark"}
            `}
                aria-label="theme-switcher"
              >
                {mode === "light" ? (
                  <SunIcon className={"fill-dark"} />
                ) : (
                  <MoonIcon className={"fill-dark"} />
                )}
              </button>
            </nav>
          </motion.div>

          : null
      }

      {/* Logo mid */}
      {/* <div className="absolute left-[50%] top-2 translate-x-[-50%] ">
        <div
          className='flex flex-col items-center justify-center mt-2'>
          <MotionLink href=""
            className='flex items-center justify-center rounded-full w-12 h-12 cursor-default'
          ><Image src={logo} alt='LogoMasum' /></MotionLink>
        </div>
      </div> */}

    </header>
  );
};

export default Navbar;
