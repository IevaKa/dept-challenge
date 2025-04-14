import Image from "next/image";
import Link from "next/link";

type Props = {
  src: string;
  className?: string;
};

export default function Logo({ src, className = "" }: Props) {
  return (
    <Link href="/" className={className}>
      <div className="relative w-[53px] h-[15px] lg:w-[88px] lg:h-[25px]">
        <Image src={src} alt="Logo" fill className="object-contain" priority />
      </div>
    </Link>
  );
}
