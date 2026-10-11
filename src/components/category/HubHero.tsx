import Image from "next/image";

type Props = {
  title: string;
  headline?: string;
  image?: string | null;
};

/** Banner with the page title over a darkened photo (or a plain gradient). */
export default function HubHero({ title, headline, image }: Props) {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-[#234858] to-[#4e6c7a]">
      {image && (
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />

      <div className="container relative flex min-h-[150px] flex-col justify-center gap-1 py-8 desk:min-h-[190px]">
        <h1
          className="text-3xl leading-tight text-white sm:text-4xl desk:text-[44px]"
          style={{ textShadow: "0 2px 3px rgba(0,0,0,.5)" }}
        >
          {title}
        </h1>
        {headline && (
          <h2
            className="max-w-2xl text-base font-normal text-white sm:text-lg"
            style={{ textShadow: "0 2px 3px rgba(0,0,0,.5)" }}
          >
            {headline}
          </h2>
        )}
      </div>
    </header>
  );
}
