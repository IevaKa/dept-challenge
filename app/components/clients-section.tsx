"use client";

import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";

export default function ClientsSection() {
  const isMobile = useIsMobile();

  const logos = [
    { src: "/logos/google.svg", mobileOrder: 1, desktopOrder: 1 },
    { src: "/logos/levi.svg", mobileOrder: 2, desktopOrder: 2 },
    { src: "/logos/netflix.svg", mobileOrder: 10, desktopOrder: 3 },
    { src: "/logos/spotify.svg", mobileOrder: 3, desktopOrder: 4 },
    { src: "/logos/patagonia.svg", mobileOrder: 4, desktopOrder: 5 },
    { src: "/logos/fujitsu.svg", mobileOrder: 12, desktopOrder: 6 },
    { src: "/logos/adyen.svg", mobileOrder: 5, desktopOrder: 7 },
    { src: "/logos/audi.svg", mobileOrder: 6, desktopOrder: 8 },
    { src: "/logos/triumph.svg", mobileOrder: 9, desktopOrder: 9 },
    { src: "/logos/tesla.svg", mobileOrder: 7, desktopOrder: 10 },
    { src: "/logos/asos.svg", mobileOrder: 8, desktopOrder: 11 },
    { src: "/logos/takeaway.svg", mobileOrder: 11, desktopOrder: 12 },
  ];

  const sortedLogos = [...logos].sort((a, b) =>
    isMobile ? a.mobileOrder - b.mobileOrder : a.desktopOrder - b.desktopOrder
  );

  return (
    <div className="w-full bg-background px-4 py-[92px] md:px-[43px]">
      <h2 className="text-lg mb-8">Clients</h2>
      <p className="text-md mb-16">
        We value a great working relationship with our clients above all else.
        It’s why they often come to our parties. It’s also why we’re able to
        challenge and inspire them to reach for the stars.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-30 lg:gap-x-4 lg:gap-y-15 place-items-center">
        {sortedLogos.map(({ src }) => (
          <div
            key={src}
            className="w-[115px] h-[60px] md:w-[172px] md:h-[90px]"
          >
            <Image src={src} alt={src} width={172} height={90} />
          </div>
        ))}
      </div>
    </div>
  );
}
