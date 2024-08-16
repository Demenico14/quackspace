import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton, SignedOut } from '@clerk/nextjs';

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="QuackSpace logo"
          className="sm:w-8 sm:h-8 w-6 h-6" // Adjusted for small screen sizes
        />
        <p className="text-[26px] font-extrabold text-white hidden sm:block">
          QuackSpace
        </p>
      </Link>

      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton />
        </SignedIn>

      

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
