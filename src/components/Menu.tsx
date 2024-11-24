"use client";

import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";

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

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);


  return (
    <div className="flex-shrink-0 ml-3 cursor-pointer xl:hidden overflow-hidden">
      <Image
        src="/menu.png"
        alt="menu hamburguer"
        width={28}
        height={28}
        className=""
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-screen flex flex-col items-center justify-start pt-[20vh] gap-8 text-xl z-30">
          {pageLinks.map((link) => (
            <Link key={link.name} href={link.href} className="relative group" onClick={() => setOpen(false)}>
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
