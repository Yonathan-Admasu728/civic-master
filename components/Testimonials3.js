import Image from "next/image";
import config from "../config";

// The list of your testimonials, specifically tailored for CivicMaster.
const list = [
  {
    name: "Anna Lee",
    text: "The practice tests and flashcards boosted my confidence significantly! It's like having a personal tutor for the citizenship test.",
    
  },
  {
    name: "Luis Hernandez",
    text: "CivicMaster turned a daunting process into a manageable one. The step-by-step guidance and pronunciation aids were invaluable.",
  },
  {
    name: "Maria Rivera",
    text: "As a non-native English speaker, the bilingual resources were a game-changer for me. Highly recommend for comprehensive test preparation.",
    
  },
];

// A single testimonial, to be rendered in a list
const Testimonial = ({ i }) => {
  const testimonial = list[i];

  if (!testimonial) return null;

  return (
    <li key={i}>
      <figure className="relative max-w-lg h-full p-6 md:p-10 bg-base-200 rounded-2xl flex flex-col">
        <blockquote className="relative flex-1">
          <p className="text-base-content/80 leading-relaxed">
            {testimonial.text}
          </p>
        </blockquote>
        <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/5">
          <div className="flex items-center gap-2">
            <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
              {testimonial.img ? (
                <Image
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                  src={testimonial.img}
                  alt={`${testimonial.name}'s testimonial for ${config.appName}`}
                  width={48}
                  height={48}
                />
              ) : (
                <span className="w-10 h-10 md:w-12 md:h-12 rounded-full flex justify-center items-center text-lg font-medium">
                  {testimonial.name.charAt(0)}
                </span>
              )}
            </div>
            <div className="font-medium text-base-content">
              {testimonial.name}
            </div>
          </div>
        </figcaption>
      </figure>
    </li>
  );
};

const Testimonials3 = () => {
  return (
    <section id="testimonials">
      <div className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="sm:text-5xl text-4xl font-extrabold text-base-content">
            Hear from Our Users
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-base-content/80">
            Don't just take our word for it. Here's how CivicMaster helped our users pass their U.S. Citizenship Test with ease.
          </p>
        </div>

        <ul
          role="list"
          className="flex flex-col items-center lg:flex-row lg:items-stretch gap-6 lg:gap-8"
        >
          {[...Array(3)].map((e, i) => (
            <Testimonial key={i} i={i} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials3;
