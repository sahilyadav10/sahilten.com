"use client";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { IconType } from "react-icons";

import SocialCard from "@/components/generic/SocialCard";
import Section from "@/components/generic/Section";

export type SocialLink = {
  name: string;
  icon: IconType;
  url: string;
  text: string;
  isEmail?: boolean;
};

const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/sahilyadav10",
    text: "https://www.linkedin.com/in/sahilyadav10",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/sahilyadav10",
    text: "https://github.com/sahilyadav10",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    url: "mailto:10sahil11@gmail.com",
    text: "10sahil11@gmail.com",
    isEmail: true,
  },
];

export default function Socials() {
  return (
    <Section id="socials" title="Socials" withSpacing>
      <div className="flex flex-col md:flex-row gap-3">
        {socialLinks.map((social) => (
          <SocialCard key={social.name} social={social} />
        ))}
      </div>
    </Section>
  );
}
