"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { navLinks } from "@/lib/constants";

const TopBar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-20 w-full flex justify-between items-center px-8 py-4 bg-black shadow-xl lg:hidden">
      <Image src="/logo-ok.png" alt="logo" width={150} height={70} />

      {/* <div className="flex gap-8 max-md:hidden">
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className={`flex gap-4 text-body-medium ${
              pathname === link.url ? "text-orange-500" : "text-white"
            }`}>
            <p className=" capitalize">{link.label}</p>
          </Link>
        ))}
      </div> */}
      <div className="min-[1024px]:hidden text-heading3-bold text-white tracking-[1.1px]">
        Trang Quản Trị Viên{" "}
      </div>

      <div className="relative flex gap-4 items-center">
        <Menu
          className="cursor-pointer min-[1024px]:hidden"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />
        {dropdownMenu && (
          <div className="absolute w-[300px] top-10 right-6 flex flex-col gap-8 p-5 bg-white shadow-xl rounded-lg">
            {navLinks.map((link) => (
              <Link
                href={link.url}
                key={link.label}
                className="flex gap-4 text-body-medium"
                style={{
                  borderBottom: "1px solid #ccc",
                  padding: "10px",
                }}>
                {link.icon} <p>{link.label}</p>
              </Link>
            ))}
          </div>
        )}
        <UserButton />
      </div>
    </div>
  );
};

export default TopBar;
