"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/lib/constants";

const LeftSideBar = () => {
  const pathname = usePathname();

  return (
    <div className="h-screen left-0 top-0 sticky w-[300px] flex flex-col gap-16 bg-[#000000d6] shadow-xl max-lg:hidden">
      <div className="flex justify-center items-center pt-[20px] ">
        <Image src="/logo-ok.png" alt="logo" width={150} height={70} />
      </div>

      <div className="flex flex-col gap-[1.5rem]">
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className={`flex items-center p-[10px] pl-[20px] w-full text-[18px] leading-[100%] text-slate-50 ${
              pathname === link.url
                ? "bg-orange-500 font-bold rounded-[5px]"
                : ""
            }`}>
            {link.icon} <p className="ml-[6px]">{link.label}</p>
          </Link>
        ))}
      </div>

      <div className="flex gap-4 text-body-medium items-center  p-[10px] justify-center items-center bg-blue-500 rounded-[5px]">
        <UserButton showName />
        {/* <button className="text-white">Tài Khoản</button> */}
      </div>
    </div>
  );
};

export default LeftSideBar;
