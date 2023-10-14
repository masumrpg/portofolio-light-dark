import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

import emailjs from '@emailjs/browser';
import { useRef, useState, useEffect } from "react";

import Layout from "@/components/Layout";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import { HiOutlineMail } from 'react-icons/hi';
import { FaFacebookMessenger } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { FaCheckCircle } from 'react-icons/fa';

const EmailSent = () => {
  return (
    <div className='email-sent'>
      <FaCheckCircle className='sent-icon' />
      <p>Email terkirim!</p>
    </div>
  );
};

export default function Contact() {
  // ========== FUNCTION EMAIL SEND ==========
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    let timer;
    if (emailSent) {
      timer = setTimeout(() => {
        setEmailSent(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [emailSent]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1czp9ns', 'template_ebjr4yb', form.current, '44RxuASXDJFAdKPDK');

    e.target.reset();
    setEmailSent(true);
  };
  return (
    <>
      <Head>
        <title>Contact Page</title>
        <meta name="description" content="Contact me." />
      </Head>
      <TransitionEffect />
      <main
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Get in Touch and Contact Me!"
            className="!text-8xl !leading-tight mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <h2 className="font-bold text-4xl w-full text-center mb-14 transition-all delay-[1000ms] dark:transition-all dark:delay-[500ms]">
            Contact Me
          </h2>

          <div className="flex gap-[4rem] justify-center md:flex-col md:mx-10">
            <div className="gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
              <div
                className="w-full p-4 py-6 my-2 rounded-xl sm:flex-col items-center justify-center text-center
              bg-light text-dark first:mt-0 border border-solid border-dark
              border-r-4 border-b-4 dark:bg-dark dark:border-light dark:text-light  transition-all delay-[1000ms] dark:transition-all dark:delay-[500ms]">
                <BsWhatsapp className="ml-[44%] mb-3 text-[1.5rem]" />
                <h3 className="font-bold">Whatsapp</h3>
                <p className="mb-3">+6287729647721</p>
                <Link href="https://wa.me/6287729647721" className="p-2 py-1 rounded-xl sm:flex-col bg-dark text-light first:mt-0 border-2 border-light dark:bg-light dark:border-dark dark:text-dark hover:bg-light hover:border-dark hover:text-dark hover:dark:bg-dark hover:dark:border-light hover:dark:text-light">Kirim Pesan</Link>
              </div>
              <div
                className="w-full p-4 py-6 my-2 rounded-xl sm:flex-col items-center justify-center text-center
              bg-light text-dark first:mt-0 border border-solid border-dark
              border-r-4 border-b-4 dark:bg-dark dark:border-light dark:text-light  transition-all delay-[1000ms] dark:transition-all dark:delay-[500ms]">
                <FaFacebookMessenger className="ml-[44%] mb-3 text-[1.5rem]" />
                <h3 className="font-bold">Messenger</h3>
                <p className="mb-3">masum.rpg</p>
                <Link href="https://m.me/masum.rpg" className="p-2 py-1 rounded-xl sm:flex-col bg-dark text-light first:mt-0 border-2 border-light dark:bg-light dark:border-dark dark:text-dark hover:bg-light hover:border-dark hover:text-dark hover:dark:bg-dark hover:dark:border-light hover:dark:text-light">Kirim Pesan</Link>
              </div>
              <div
                className="w-full p-4 py-6 my-2 rounded-xl items-center justify-center text-center
                bg-light text-dark first:mt-0 border border-solid border-dark
                  border-r-4 border-b-4 dark:bg-dark dark:border-light dark:text-light transition-all delay-[1000ms] dark:transition-all dark:delay-[500ms]">
                <HiOutlineMail className="ml-[44%] mb-3 text-[1.5rem]" />
                <h3 className="font-bold">Email</h3>
                <p className="mb-3">masumrpg@gmail.com</p>
                <Link href="mailto:masumrpg@gmail.com" className="p-2 py-1 rounded-xl sm:flex-col bg-dark text-light first:mt-0 border-2 border-light dark:bg-light dark:border-dark dark:text-dark hover:bg-light hover:border-dark hover:text-dark hover:dark:bg-dark hover:dark:border-light hover:dark:text-light">Kirim Pesan</Link>
              </ div>
            </div>
            {emailSent ? <EmailSent /> : (
              <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-[1.2rem] items-center">
                <input className="w-[30rem] p-4 py-2 rounded-xl sm:flex-col bg-light text-dark first:mt-0 border border-solid border-dark
                border-r-4 border-b-4 dark:bg-dark dark:border-light dark:text-light md:w-full sm:w-full transition-all delay-[1000ms] dark:transition-all dark:delay-[500ms]"
                  type="text" name='name' placeholder='Nama Full' required />
                <input className="w-[30rem] p-4 py-2 rounded-xl sm:flex-col bg-light text-dark first:mt-0 border border-solid border-dark
                border-r-4 border-b-4 dark:bg-dark dark:border-light dark:text-light md:w-full sm:w-full  transition-all delay-[1000ms] dark:transition-all dark:delay-[500ms]" type="email" name='email' placeholder='Email Kamu' required />
                <textarea className="w-[30rem] p-4 py-2 rounded-xl sm:flex-col bg-light text-dark first:mt-0 border border-solid border-dark
                border-r-4 border-b-4 dark:bg-dark dark:border-light dark:text-light md:w-full sm:w-full  transition-all delay-[1000ms] dark:transition-all dark:delay-[500ms]" name="message" rows="7" placeholder='Masukan Pesan Kamu' required />
                <button type='submit' className='font-bold p-5 py-2 rounded-xl sm:flex-col bg-dark text-light first:mt-0 border-2 border-light dark:bg-light dark:border-dark dark:text-dark hover:bg-light hover:border-dark hover:text-dark hover:dark:bg-dark hover:dark:border-light hover:dark:text-light'>Kirim</button>
              </form>
            )}
          </div>
        </Layout>
      </main >
    </>
  );
}
