"use client";

import {useEffect, useState, useRef} from "react";
import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import dynamic from "next/dynamic";
import SearchBar from "./SearchBar";

const NavIcons = dynamic(() => import("./NavIcons"), {ssr: false});

const pageLinks = [
  {name: "Home", href: "/"},
  {name: "Produtos", href: "/list"},
  {name: "Compras", href: "/list"},
  {name: "Sobre", href: "/"},
  {name: "Contato", href: "/"},
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const resetTimer = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setIsVisible(false), 3000);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
      setIsVisible(true);
      resetTimer();
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 50) {
        setIsVisible(true);
        if (timerRef.current) clearTimeout(timerRef.current);
      } else {
        resetTimer();
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div
      className={`h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 z-50 transition-all ease-in duration-300 ${
        isScrolled
          ? `fixed top-0 left-0 w-full bg-white shadow-md ${
              isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            }`
          : "relative"
      }`}
    >
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between sm:hidden">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="" width={24} height={24} />
          <div className="text-2xl tracking-wide">SHOP</div>
        </Link>
        <div className="hidden xxs:flex items-center justify-between gap-2">
          <NavIcons />
          <Menu />
        </div>
      </div>

      {/* BIGGER SCREENS */}
      <div className="hidden sm:flex items-center h-full justify-between">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={24} height={24} />
            <div className="text-2xl tracking-wide">SHOP</div>
          </Link>
          <div className="hidden flex-shrink gap-4 xl:flex">
            {pageLinks.map((link) => (
              <Link key={link.name} href={link.href} className="relative group">
                {link.name}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-rosa transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="hidden w-auto sm:flex items-center justify-end flex-shrink-0">
          <SearchBar />
          <NavIcons />
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
