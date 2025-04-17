"use client";

import IconButton from "@/components/ui/icon-button";
import Image from "next/image";

type Props = {
  className?: string;
};

export default function Socials({ className = "" }: Props) {
  const goToSocialPage = (social: string) => () => {
    const page = `https://www.${social}.com/DeptAgency`;
    window.open(page, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={`flex flex-col lg:flex-row gap-9 ${className}`}>
      <IconButton handleOnClick={goToSocialPage("facebook")}>
        <Image
          src="/logos/facebook.svg"
          alt="facebook-logo"
          height={25}
          width={14}
        />
      </IconButton>
      <IconButton handleOnClick={goToSocialPage("twitter")}>
        <Image
          src="/logos/twitter.svg"
          alt="twitter-logo"
          height={20}
          width={25}
        />
      </IconButton>
      <IconButton handleOnClick={goToSocialPage("instagram")}>
        <Image
          src="/logos/instagram.svg"
          alt="instagram-logo"
          height={27}
          width={27}
        />
      </IconButton>
    </div>
  );
}
