import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail, AiOutlineFileText } from "react-icons/ai";

type PersonalSmallCardProps = {
    src: string;
    title: string;
    description: string;
    link: string;
    gmail: string;
};

export const PersonalSmallCard = ({
    src,
    title,
    description,
    link,
    gmail,
}: PersonalSmallCardProps) => {
    return (
        <Link
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="relative rounded-lg shadow-lg border border-[#2A0E61]"
        >
            <Image
                src={src}
                alt={title}
                width={1000}
                height={1000}
                className="object-cover object-center"
                style={{ clipPath: 'ellipse(50% 40% at 50% 40%)', transform: 'scale(0.8)' }}
            />

            <div className="relative flex justify-center space-x-4" style={{ marginTop: "-60px" }}>
                <a href={gmail} target="_blank" rel="noopener noreferrer">
                    <AiOutlineMail className="w-10 h-10 text-white bg-[#2A0E61] rounded-full p-2" />
                </a>
                <AiOutlineFileText className="w-10 h-10 text-white bg-[#2A0E61] rounded-full p-2" />
            </div>

            <div className="relative" style={{ marginTop: "0px" }}>
                <h1 className="text-2xl font-semibold text-white text-center">{title}</h1>
                <p className="mt-1 mb-5 text-gray-300 text-center text-2xl">{description}</p>
            </div>
        </Link>
    );
};
