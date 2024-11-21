"use client";

import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

const pageLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Produtos",
    href: "/list",
  },
  {
    name: "Compras",
    href: "/list",
  },
  {
    name: "Sobre",
    href: "/",
  },
  {
    name: "Contato",
    href: "/",
  },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex-shrink-0">
      <Image
        src="/menu.png"
        alt="menu hamburguer"
        width={28}
        height={28}
        className="ml-2 cursor-pointer xl:hidden"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          {pageLinks.map((link) => (
            <Link href={link.href} className="relative group">
              {link.name}
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-rosa transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
