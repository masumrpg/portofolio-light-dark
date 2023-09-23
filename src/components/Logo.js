import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import blackLogo from '../../public/images/black-logo.png';


let MotionLink = motion(Link);

const Logo = () => {

  return (
    <div
      className='flex flex-col items-center justify-center mt-2'>
      <MotionLink href=""
        className='flex items-center justify-center rounded-full w-12 h-12 cursor-default'
      ><Image src={blackLogo} alt='LogoMasum' /></MotionLink>
    </div>
  );
};

export default Logo;