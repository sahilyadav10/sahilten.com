"use client";
import Section from "@/components/generic/Section";
import Card from "../generic/Card";

export default function Projects() {
  return (
    <Section id="projects" title="Projects" withSpacing>
      <div className="flex gap-3 justify-start flex-wrap sm:flex-nowrap">
        <Card
          heading="Resto"
          subheading="Resto is a powerful app for discovering, managing, and rating restaurants. Add, edit, and review dining spots effortlessly—all in one place! 🍽️"
          variant="content"
          image={{
            src: "/resto.webp",
            alt: "Resto app screenshot",
          }}
          className="sm:basis-1/2 md:basis-1/3"
          href={"https://github.com/sahilyadav10/resto"}
        />
        <Card
          heading="Quackpolls"
          subheading="QuackPolls is a simple and efficient platform for creating, editing, and managing polls. Gather opinions and make decisions faster! 🗳️"
          variant="content"
          image={{
            src: "/quackpolls.webp",
            alt: "Resto app screenshot",
          }}
          className="sm:basis-1/2 md:basis-1/3"
          href={"https://github.com/sahilyadav10/quackpolls"}
        />
      </div>
    </Section>
  );
}
