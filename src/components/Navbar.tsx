import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
// import NavIcons from "./NavIcons";
import SearchBar from "./SearchBar";
import dynamic from "next/dynamic";

const NavIcons = dynamic(() => import("./NavIcons"), {ssr: false});

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

const Navbar = () => {
  return (
    <div className="  h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* MOBILE */}
      <div className=" h-full flex items-center justify-between sm:hidden">
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
      <div className=" hidden sm:flex items-center h-full justify-between">
        {/* LEFT */}
        <div className=" w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={24} height={24} />
            <div className="text-2xl tracking-wide">SHOP</div>
          </Link>
          <div className="hidden flex-shrink gap-4 xl:flex">
            {pageLinks.map((link) => (
              <Link href={link.href} className="relative group">
                {link.name}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-rosa transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className=" hidden w-auto sm:flex items-center justify-end flex-shrink-0">
          <SearchBar />
          <NavIcons />
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
