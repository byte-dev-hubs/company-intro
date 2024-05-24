import { PersonalCard } from "@/components/sub/personal-card";
import { PersonalSmallCard } from "../sub/personal-small-card";
import { US, Developers } from "@/constants";

export const AboutUs = () => {
    return (
        <section className="flex flex-col items-center justify-center py-10" id="about-us">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                About Us
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-12 px-10 justify-center mb-10">
                {US.map((person) => (
                    <PersonalCard
                        key={person.title}
                        src={person.image}
                        title={person.title}
                        description={person.description}
                        link={person.link}
                    />
                ))}
            </div>
            <div className="h-full w-full flex flex-col md:flex-row gap-12 px-10 justify-center mt-10">
                {Developers.map((dev) => (
                    <PersonalSmallCard
                        key={dev.gmail}
                        src={dev.image}
                        title={dev.title}
                        description={dev.description}
                        link={dev.link}
                        gmail={dev.gmail}
                    />
                ))}
            </div>
        </section>
    );
};
