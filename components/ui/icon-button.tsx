import { PropsWithChildren } from "react";

type Props = {
  handleOnClick?: () => void;
};

export default function IconButton({
  children,
  handleOnClick,
}: PropsWithChildren<Props>) {
  return (
    <button
      className="flex flex-col justify-center items-center cursor-pointer"
      onClick={handleOnClick}
      aria-label="Scroll to top"
      tabIndex={0}
    >
      {children}
    </button>
  );
}
