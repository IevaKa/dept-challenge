"use client";
import Link from "next/link";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Logo from "./logo";
import ExpandedMenu from "./expanded-menu";
import "./styles.css";
import { mainMenuRoutes, routeLabels } from "@/constants";
import IconButton from "@/components/ui/icon-button";

const selectedRoutes = [
  routeLabels.WORK,
  routeLabels.CULTURE,
  routeLabels.SERVICES,
  routeLabels.INSIGHTS,
  routeLabels.CAREERS,
  routeLabels.CONTACT,
];

const shownRoutes = mainMenuRoutes.filter((route) =>
  selectedRoutes.includes(route.label)
);

export default function Navbar() {
  const [menuExpanded, setMenuExpanded] = useState(false);

  const closeMenu = () => {
    setMenuExpanded(false);
  };

  const openMenu = () => {
    setMenuExpanded(true);
  };

  return (
    <nav className="nav-padding contrast-section">
      <div className="flex items-center justify-between">
        <Logo src="/logo-white.svg" className="hidden lg:block" />
        <Logo src="/logo-black.svg" className="lg:hidden" />

        <div className="hidden lg:flex gap-12 flex-row items-center">
          {shownRoutes.map(({ label, route }) => (
            <Link
              key={label}
              href={route}
              className="text-sm xl:text-md uppercase hover:underline"
            >
              {label}
            </Link>
          ))}
          <IconButton handleOnClick={openMenu}>
            <EllipsisHorizontalIcon className="size-8 cursor-pointer" />
          </IconButton>
        </div>
        <div className="lg:hidden uppercase" onClick={openMenu}>
          Menu
        </div>
      </div>
      <ExpandedMenu visible={menuExpanded} closeMenu={closeMenu} />
    </nav>
  );
}
