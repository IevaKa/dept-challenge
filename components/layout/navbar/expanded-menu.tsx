"use client";

import Link from "next/link";
import Logo from "./logo";
import { routes } from "@/constants";
import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

type Props = {
  visible: boolean;
  closeMenu: () => void;
};

export default function ExpandedMenu({ visible, closeMenu }: Props) {
  const pathname = usePathname();

  const navigatorVisibilityClass = (route: string) =>
    pathname === route ? "inline-block" : "hidden";

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  return (
    <div
      className={`w-full h-screen ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      } absolute top-0 left-0 flex flex-col bg-background transition-opacity duration-500  text-white`}
    >
      <div className={`nav-padding flex flex-col h-screen relative`}>
        <div className="flex justify-between mt-1 mb-[53px]">
          <Logo src="/logo-white.svg" />
          <XMarkIcon
            className="size-4 lg:size-8 cursor-pointer"
            onClick={closeMenu}
          />
        </div>

        <div className="flex flex-col items-end flex-1 overflow-auto">
          {Object.values(routes).map(({ label, route }) => (
            <Link
              key={label}
              href={route}
              onClick={closeMenu}
              className="w-full flex justify-end items-center text-lg lg:text-xl uppercase border-b border-grey"
            >
              <div
                className={`${navigatorVisibilityClass(
                  route
                )} relative w-[15px] h-[18px] lg:w-[22px] lg:h-[25px] mr-4`}
              >
                <Image
                  src="/nav-indicator.svg"
                  alt="nav-indicator"
                  fill
                  className="object-contain"
                />
              </div>
              {label}
            </Link>
          ))}
        </div>
        <div className="absolute bottom-0 w-full h-[156px] bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
}
