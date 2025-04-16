import { PropsWithChildren } from "react";

type Props = {
  handleOnClick?: () => void;
  className?: string;
};

export default function IconButton({
  children,
  handleOnClick,
  className,
}: PropsWithChildren<Props>) {
  return (
    <button
      className={`flex flex-col justify-center items-center cursor-pointer ${className}`}
      onClick={handleOnClick}
      aria-label="Scroll to top"
      tabIndex={0}
    >
      {children}
    </button>
  );
}
