import React from "react";
import Pill from "@/components/generic/Pill";
import Section from "@/components/generic/Section";

const FRONTEND_SKILLS = [
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "React.js",
  "Next.js",
];
const BACKEND_SKILLS = ["Node.js (Express)", "Python (Django)"];
const AWS_SKILLS = [
  "AWS EC2",
  "AWS CloudFront",
  "AWS S3",
  "AWS Lambda",
  "AWS API Gateway",
];

export default function Skills() {
  return (
    <Section title="Skills" withSpacing>
      <div className="flex gap-2 flex-wrap">
        {FRONTEND_SKILLS.map((skill) => (
          <Pill key={skill}>{skill}</Pill>
        ))}
      </div>
      <div className="flex gap-2 flex-wrap">
        {BACKEND_SKILLS.map((skill) => (
          <Pill key={skill}>{skill}</Pill>
        ))}
      </div>
      <div className="flex gap-2 flex-wrap">
        {AWS_SKILLS.map((skill) => (
          <Pill key={skill}>{skill}</Pill>
        ))}
      </div>
    </Section>
  );
}
