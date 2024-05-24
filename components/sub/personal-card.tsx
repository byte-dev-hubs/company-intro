import Image from "next/image";
import Link from "next/link";

type PersonalCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const PersonalCard = ({
  src,
  title,
  description,
  link,
}: PersonalCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]"
    >
      {
        title === "CEO & Co-Founder" ?
          <Image
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className="w-full object-contain"
            style={{ clipPath: 'ellipse(50% 40% at 50% 40%)', transform: 'scale(0.8)' }}
          /> :
          <Image
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className="w-full object-contain"
            style={{ clipPath: 'ellipse(50% 40% at 50% 40%)', transform: 'scale(0.75)' }}
          />
      }


      <div className="relative" style={{ marginTop: "-80px" }}>
        <h1 className="text-3xl font-semibold text-white text-center">{title}</h1>
        <p className="mt-3 mb-5 text-gray-300 text-center text-2xl">{description}</p>
      </div>
    </Link>
  );
};
