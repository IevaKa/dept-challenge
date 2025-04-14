"use client";
import Link from "next/link";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Logo from "./logo";
import ExpandedMenu from "./expanded-menu";
import "./styles.css";
import { routes, routeLabels } from "@/constants";

const selectedRoutes = [
  routeLabels.WORK,
  routeLabels.CULTURE,
  routeLabels.SERVICES,
  routeLabels.INSIGHTS,
  routeLabels.CAREERS,
  routeLabels.CONTACT,
];

const shownRoutes = routes.filter((route) =>
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
              className="font-normal text-[14px] xl:text-[18px] uppercase hover:underline"
            >
              {label}
            </Link>
          ))}

          <EllipsisHorizontalIcon
            className="size-8 cursor-pointer"
            onClick={openMenu}
          />
        </div>
        <div className="lg:hidden uppercase" onClick={openMenu}>
          Menu
        </div>
      </div>
      <ExpandedMenu visible={menuExpanded} closeMenu={closeMenu} />
    </nav>
  );
}
