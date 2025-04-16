import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="section-padding relative w-full flex items-end h-[415px] lg:h-[628px]">
      <Image
        src="/images/hero.webp"
        alt="office"
        fill
        priority
        className="object-cover w-full"
        placeholder="blur"
        blurDataURL="/images/hero-blur.jpg"
      />
      <div className="z-5">
        <p className="uppercase text-sm-2 pb-8">Work</p>
        <h1 className="text-lg w-full lg:w-[579px]">
          A selection of projects that <b>pioneer tech</b> and <b>marketing</b>{" "}
          to help brands stay ahead.
        </h1>
      </div>
    </section>
  );
}
