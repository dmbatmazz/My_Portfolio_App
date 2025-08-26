import React, { useState, useEffect, useRef } from "react";
import { FaGraduationCap, FaHeart, FaLanguage } from "react-icons/fa";
import "./About.css";

const boxes = [
  {
    title: "Education",
    icon: <FaGraduationCap size={28} />,
    content: (
      <div>
        <p>
          I graduated from Zafer College Science High School in 2019 and was awarded a 50% scholarship to study Software Engineering at Atılım University.
        </p>
        <p>
          I completed two internships — at Karel R&D in Bilkent Cyberpark and Goldtag — before graduating in 2024.  
          I am now working as a Frontend Developer at Bilabs Software & Engineering Inc.
        </p>
      </div>
    ),
  },
  {
    title: "Interests",
    icon: <FaHeart size={28} />,
    content: (
      <ul>
        <li>Passionate about tennis, constantly improving my skills.</li>
        <li>Enjoy watercolor and oil painting as hobbies.</li>
        <li>Love concerts, theater events, and social coffee meetups.</li>
      </ul>
    ),
  },
  {
    title: "Languages",
    icon: <FaLanguage size={28} />,
    content: (
      <div>
        <h4>Spoken Languages</h4>
        <ul>
          <li>Turkish (Native)</li>
          <li>English (Upper-Intermediate, C1)</li>
          <li>French (Beginner)</li>
        </ul>
        <h4>Programming & Technologies</h4>
        <ul>
          <li>HTML, CSS, JavaScript, React, Next.js, Node.js</li>
          <li>C, C++, Python</li>
          <li>Flutter & Dart, Kotlin (Kuika), SQL</li>
        </ul>
      </div>
    ),
  },
];

export default function About() {
  const [openIndex, setOpenIndex] = useState(null);
  const containerRef = useRef(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpenIndex(null); // kutuların dışına tıklayınca kapat
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="about-wrapper">
      <div className="about-header">
        <h2>Get to Know Me</h2>
        <p>Here’s a quick look at my background, passions, and skills.</p>
      </div>

      <div className="about-container" ref={containerRef}>
        {boxes.map((box, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              className={`about-box ${isOpen ? "open" : ""}`}
              onClick={() => handleToggle(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") handleToggle(index);
              }}
            >
              <div className="about-title">
                {box.icon}
                <span>{box.title}</span>
              </div>
              <div
                className="about-content"
                onClick={(e) => e.stopPropagation()} // içerikte tıklama kapanmayı tetiklemesin
              >
                {box.content}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
