import IconButton from "@/components/ui/icon-button";
import Image from "next/image";

export default function ReadMoreButton() {
  return (
    <IconButton className="flex-row items-center">
      <Image
        src="/read-more-icon.svg"
        alt=""
        width={18}
        height={36}
        className="mr-2"
      />
      <span className="hover:underline decoration-transparent hover:decoration-inherit transition-colors duration-200">
        Read more
      </span>
    </IconButton>
  );
}
