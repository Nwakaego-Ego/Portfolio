import { useState } from "react";

const skills = () => {
  const [skills, setSkills] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const skillStack = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "REACT",
    "NEXTJS",
    "TAILWIND",
  ];

  const toggleSkill = () => {
    setIsOpen(!isOpen);

    if (isOpen) {
      setSkills([]);
    } else {
      const skillRoll = skillStack.map((professional, index) => (
        <div key={index}>{professional}</div>
      ));
      setSkills(skillRoll);
    }
  };

  return (
    <span>
      <button
        onClick={toggleSkill}
        className="w-40 inline-block bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white font-bold py-2 px-4 rounded-lg m-10"
      >
        Skills
      </button>
      {isOpen && <div className="ml-10 text-gray-300">{skills}</div>}
    </span>
  );
};

export default skills;
