import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import Section from "@/components/generic/Section";
import CopyText from "@/components/generic/CopyText";

export default function Socials() {
  return (
    <Section title="Socials" withSpacing>
      <div className="flex flex-col md:flex-row gap-3">
        <div className="basis-1/3 max-w-[32%] p-4 border border-neutral-200 rounded-2xl">
          <FaLinkedin
            size={30}
            className="text-neutral-900 dark:text-neutral-50"
          />
          <div className="mt-2">
            <p className="font-medium text-neutral-900 dark:text-neutral-50">
              LinkedIn
            </p>
            <CopyText text="https://www.linkedin.com/in/sahilyadav10" />
          </div>
        </div>
        <div className="basis-1/3 max-w-[32%] p-4 border border-neutral-200 rounded-2xl">
          <FaGithub
            size={30}
            className="text-neutral-900 dark:text-neutral-50"
          />
          <div className="mt-2">
            <p className="font-medium text-neutral-900 dark:text-neutral-50">
              GitHub
            </p>
            <CopyText text="https://github.com/sahilyadav10" />
          </div>
        </div>
        <div className="basis-1/3 p-4 border border-neutral-200 rounded-2xl">
          <FaEnvelope
            size={30}
            className="text-neutral-900 dark:text-neutral-50"
          />
          <div className="mt-2">
            <p className="font-medium text-neutral-900 dark:text-neutral-50">
              Email
            </p>
            <CopyText text="10sahil11@gmail.com" />
          </div>
        </div>
      </div>
    </Section>
  );
}
