import { useState } from "react";

const education = () => {
  const [skills, setSkills] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const skillStack = [
    "Zuri Training",
    "Shecodes Plus",
    "Shecodes Responsive",
    "Shecodes React",
  ];

  const skill = () => {
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
        onClick={skill}
        className="w-40 h-12 block lg:inline-block bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white font-bold py-2 px-4 rounded-lg m-10"
      >
        Education
      </button>
      {isOpen && (
        <ul className="ml-10 text-gray-300">
          <li>{skills}</li>
        </ul>
      )}
    </span>
  );
};

export default education;
