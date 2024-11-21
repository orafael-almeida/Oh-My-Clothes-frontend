"use client";

import Image from "next/image";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import CartModal from "./CartModal";
import {useWixClient} from "@/hooks/useWixClient";
import Cookies from "js-cookie";
import {useCartStore} from "@/hooks/useCartStore";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const wixClient = useWixClient();
  const isLoggedIn = wixClient.auth.loggedIn();

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setIsCartOpen(false);
      setIsProfileOpen((prev) => !prev);
    }
  };

  const handleCart = () => {
    setIsProfileOpen(false);
    setIsCartOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    setIsLoading(true);
    Cookies.remove("refreshToken");
    const {logoutUrl} = await wixClient.auth.logout(window.location.href);
    setIsLoading(false);
    setIsProfileOpen(false);
    router.push(logoutUrl);
  };

  const {cart, counter, getCart} = useCartStore();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        !target.closest(".profile-dropdown") &&
        !target.closest(".profile-icon") &&
        isProfileOpen
      ) {
        setIsProfileOpen(false);
      }

      if (
        !target.closest(".cart-modal") &&
        !target.closest(".cart-icon") &&
        isCartOpen
      ) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfileOpen, isCartOpen]);

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt="search icon"
        width={22}
        height={22}
        className="cursor-pointer profile-dropdown"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div
          className="z-20 bg-white absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] profile-dropdown"
          onClick={(e) => e.stopPropagation()}
        >
          <Link href="">Profile</Link>
          <div
            className="mt-2 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              handleLogout();
            }}
          >
            {isLoading ? "Saindo..." : "Logout"}
          </div>
        </div>
      )}
      <Image
        src="/notification.png"
        alt="search icon"
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div className="relative cursor-pointer cart-icon flex-shrink-0" onClick={handleCart}>
        <Image 
        src="/cart.png" 
        alt="search icon" 
        width={22} 
        height={22} />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-rosa rounded-full text-white text-sm flex items-center justify-center">
          {counter}
        </div>
        {isCartOpen && (
          <div className="cart-modal absolute -top-1 -right-3">
            <CartModal />
          </div>
        )}
      </div>
    </div>
  );
};
export default NavIcons;
