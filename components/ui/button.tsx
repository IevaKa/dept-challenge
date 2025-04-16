type Props = {
  label: string;
  type?: "submit" | "reset" | "button";
  className?: string;
};

export default function Button({ label, type, className = "" }: Props) {
  return (
    <button
      className={`w-full cursor-pointer sm:w-auto py-3 px-16 border-1 rounded-[50px] transition-colors duration-200 uppercase hover:text-white ${className}`}
      type={type}
    >
      {label}
    </button>
  );
}
