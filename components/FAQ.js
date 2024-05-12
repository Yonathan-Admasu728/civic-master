"use client";

import { useRef, useState } from "react";

// FAQ content specifically tailored for CivicMaster
const faqList = [
  {
    question: "How does CivicMaster help me prepare for the Citizenship Test?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>CivicMaster offers a comprehensive suite of learning tools, including interactive quizzes, flashcards, and expert guidance to ensure you are well-prepared for the U.S. Citizenship Test.</p>
      </div>
    ),
  },
  {
    "question": "How are CivicMaster's flashcards different from USCIS website flashcards?",
    "answer": (
      <p>
      CivicMaster's flashcards are designed to enhance your learning experience by making it more intuitive and user-friendly. Unlike USCIS flashcards, where you might accidentally see the answers due to their scroll-down format, our flashcards employ a flip mechanism that allows you to genuinely test your knowledge before revealing the solution. This innovative approach ensures that you are learning actively, not just passively viewing answers. Additionally, our content is regularly updated to reflect the latest information and best practices, ensuring you have the most current materials at your fingertips.
      </p>
    ),
},

  {
    question: "Can I access the study materials offline?",
    answer: (
      <p>
        Currently, all study materials require an internet connection to access. We are working on offline capabilities for future updates.
      </p>
    ),
  },
  {
    question: "What languages are supported by CivicMaster?",
    answer: (
      <p>
        CivicMaster provides bilingual support in English and Spanish, catering to a diverse range of learners.
      </p>
    ),
  },
];

const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
