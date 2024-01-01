import React from 'react'
import LogoImage from "@logos/saas.png";
import Link from "next/link";
import {AspectRatio} from "./ui/aspect-ratio";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/" prefetch={false} className='overflow-hidden'>
        <div className="flex items-center w-72 h-60">
        <AspectRatio ratio={16/9} className="flex items-center justify-center">
            <Image src={LogoImage} alt="logo" className="w-14 h-14 pt-200 dark:filter dark:invert"/>
        </AspectRatio>
        </div>
    </Link>
  )
}

export default Logo;