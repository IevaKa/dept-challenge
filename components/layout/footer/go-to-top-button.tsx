"use client";

import IconButton from "@/components/ui/icon-button";
import Image from "next/image";

export default function GoToTopButton() {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <IconButton handleOnClick={goToTop}>
      <Image
        src="/arrow-up.svg"
        alt="Logo"
        width={18}
        height={36}
        className="mb-4"
        priority
      />
      <div className="text-purple text-md">TOP</div>
    </IconButton>
  );
}
