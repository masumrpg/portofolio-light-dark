import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import blackLogo from '../../public/images/black-logo.png';
import whiteLogo from '../../public/images/white-logo.png';


let MotionLink = motion(Link);
let data = ''
let logo = blackLogo

const Logo = () => {
  useEffect(() => {
    const userPref = window.localStorage.getItem("theme");
    data = userPref
  });

  if (data.match('light')) {
    logo = blackLogo
  }
  if (data.match('dark')) {
    logo = whiteLogo
  }

  return (
    <div
      className='flex flex-col items-center justify-center mt-2'>
      <MotionLink href="/"
        className='flex items-center justify-center rounded-full w-14 h-14'
      ><Image src={logo} alt='LogoMasum' /></MotionLink>
    </div>
  )
}

export default Logo