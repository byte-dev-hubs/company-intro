import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ServiceCard = ({
  src,
  title,
  description,
  link,
}: ServiceCardProps) => {
  return (
    <div className="flex justify-center items-center" style={{ height: '100vh', opacity: '0.7', clipPath: 'ellipse(50% 30% at 50% 65%)' }}>
      <Link
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        className="relative overflow-hidden rounded-lg shadow-lg px-10"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)), url(${src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '450px',
          height: '400px',
        }}
      >
        <div className="flex flex-col justify-end h-full">
          <h1 className="text-4xl font-semibold text-white text-center">{title}</h1>
          <p className="mt-3 mb-5 text-gray-300 text-center text-xl">{description}</p>
        </div>
      </Link>
    </div>
  );
};
