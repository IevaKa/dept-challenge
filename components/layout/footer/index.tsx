import {
  routeLabels,
  mainMenuRoutes,
  aboutRoute,
  termsAndConditionsRoute,
} from "@/constants";
import Image from "next/image";
import Link from "next/link";
import GoToTopButton from "./go-to-top-button";
import Socials from "./socials";

const selectedRoutes = [
  routeLabels.WORK,
  routeLabels.SERVICES,
  routeLabels.STORIES,
  routeLabels.ABOUT,
  routeLabels.CAREERS,
  routeLabels.CONTACT,
];

const relevantRoutes = [...mainMenuRoutes, aboutRoute];

const shownRoutes = selectedRoutes.map(
  (selectedRoute) =>
    relevantRoutes.find(({ label }) => selectedRoute === label)!
);

export default function Footer() {
  return (
    <footer className="xl:h-[310px] w-full flex">
      <div className="flex-1 py-[45px] px-9 md:py-[65px] md:px-[50px]">
        <div className="xl:h-1/2 w-full border-b border-gray-600 pb-[45px] xl:pb-[83px]">
          <div className="flex sm:items-start md:justify-between lg:justify-start">
            <Image
              src="/logo-white.svg"
              alt="Logo"
              width={88}
              height={25}
              className="hidden md:block lg:mr-[114px]"
              priority
            />
            <div className="w-full md:w-auto lg:w-full flex lg:flex-col xl:flex-row justify-between">
              <div className="flex flex-col sm:flex-row gap-8 md:gap-5 lg:mb-5 justify-end">
                {shownRoutes.map(({ label, route }) => (
                  <Link
                    key={label}
                    href={route}
                    className="text-md uppercase hover:underline"
                  >
                    {label}
                  </Link>
                ))}
              </div>
              <Socials className="sm:hidden xl:flex" />
            </div>
          </div>
        </div>
        <div className="xl:h-1/2 w-full text-gray-600 text-sm-2 flex justify-between mt-[45px] xl:mt-0">
          <div className="h-full flex flex-col xl:flex-row justify-between xl:items-end">
            <div className="flex flex-col xl:flex-row xl:gap-9 mb-6 xl:mb-0">
              <p>Chamber of Commerce: 63464101</p>
              <p>VAT: NL 8552.47.502.B01</p>
              <Link
                key={termsAndConditionsRoute.label}
                href={termsAndConditionsRoute.label}
                className="hover:underline"
              >
                {termsAndConditionsRoute.label}
              </Link>
            </div>
            <p>© 2022 Dept Agency</p>
          </div>
          <Socials className="hidden sm:flex flex-row items-start xl:hidden" />
        </div>
      </div>
      <div className="w-[120px] bg-white hidden lg:flex items-center justify-center">
        <GoToTopButton />
      </div>
    </footer>
  );
}
