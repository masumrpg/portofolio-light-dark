import AnimatedText from "@/components/AnimatedText";
import { GithubIconSmall } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import proj1 from "../../public/images/projects/al-quran-react-native.png";
import proj2 from "../../public/images/projects/porto-html.png";
import proj3 from "../../public/images/projects/porto-react.png";
import proj4 from "../../public/images/projects/proj4-nextjs-porto.png";
import proj5 from "../../public/images/projects/agency-website-cover-image.jpg";
import proj6 from "../../public/images/projects/devdreaming.jpg";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {

  return (
    <article
      className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col
lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4
    "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
        dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target={"_blank"}
            className="w-10"
            aria-label="Crypto Screener Application github link"
          >
            <GithubIconSmall />
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg
            bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark
            sm:px-4 sm:text-base
            "
            aria-label="Crypto Screener Application"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {

  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark
      xs:p-4
      "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
        dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]  "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>

        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className="flex w-full items-center  justify-between">
          <Link
            href={link}
            target={"_blank"}
            className="rounded text-lg
            font-medium underline md:text-base
            "
            aria-label={title}
          >
            Visit
          </Link>
          <Link
            href={github}
            target={"_blank"}
            className="w-8 md:w-6"
            aria-label={title}
          >
            <GithubIconSmall />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects Page</title>
        <meta
          name="description"
          content="Project portfolio."
        />
      </Head>

      <TransitionEffect />
      <main
        className={"mb-16  flex w-full flex-col items-center justify-center dark:text-light"}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Mobile React Native"
                title="Al Qu'ran Offline"
                summary="A mobile Al Qur'an App using React Native, Expo, Expo Router and Expo Tabs. It shows detail surah almost all the verses. Translete only in Indonesia for now."
                img={proj1}
                link="https://play.google.com/store/apps/details?id=com.masumrpg.AlQuranOffline"
                github="https://github.com/masumrpg/Al-Quran-Offline"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Portofolio"
                title="Portofolio HTML CSS JS"
                img={proj2}
                link="https://masumrpg.github.io/Portofolio"
                github="https://github.com/masumrpg/Portofolio"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Portofolio"
                title="Portofolio ReactJS"
                img={proj3}
                link="https://masumrpg.netlify.app"
                github="https://github.com/masumrpg/portofolioReactJS"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Portfolio NextJS"
                title="Next Portfolio Website"
                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive."
                img={proj4}
                link="https://masumrpg.vercel.app"
                github="https://github.com/masumrpg/masum-rpg.git"
              />
            </div>
            {/* <div className="col-span-12">
              <FeaturedProject
                type="Mobile React Native"
                title="Al Qu'ran Offline"
                summary="A mobile Al Qur'an App using React Native, Expo, Expo Router and Expo Tabs. It shows detail surah almost all the verses. Translete only in Indonesia for now."
                img={proj1}
                link="https://play.google.com/store/apps/details?id=com.masumrpg.AlQuranOffline"
                github="https://github.com/masumrpg/Al-Quran-Offline"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website Template"
                title="NFT collection Website"
                img={proj2}
                link="link"
                github="link"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website"
                title="Fashion Studio Website"
                img={proj3}
                link="link"
                github="link"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Portfolio Website"
                title="React Portfolio Website"
                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive."
                img={proj4}
                link="link"
                github="link"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website Template"
                img={proj5}
                title="Agency Website Template"
                link="link"
                github="link"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Blog Website"
                img={proj6}
                title="Title"
                link="link"
                github="link"
              />
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
}
