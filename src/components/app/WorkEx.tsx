import Image from "next/image";
import { HiChevronDoubleRight } from "react-icons/hi";

import workEx from "@/assets/workEx.json";
import Section from "@/components/generic/Section";

export default function WorkEx() {
  return (
    <Section title="Work Ex" withSpacing className="relative">
      {workEx.map((experience, index) => (
        <div
          key={index}
          className="flex pb-10 ml-0 md:ml-4 last:pb-0 last:bg-neutral-50 dark:last:bg-theme-dark"
        >
          <div className="-z-1 absolute left-[36px] md:left-[52px] top-20 h-[90%] w-[1px] bg-neutral-600" />
          <div className="flex gap-2 items-start">
            <div className="min-w-10 h-10 overflow-clip flex items-center justify-center bg-neutral-100 border-2 border-neutral-700 rounded-full">
              {experience?.logo ? (
                <Image
                  src={`/${experience.logo}`}
                  alt={`${experience.company} logo`}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              ) : (
                <p className="text-lg font-semibold text-primary">
                  {experience.company[0]}
                </p>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
                {experience.company}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {experience.jobTitle}, {experience.duration}
              </p>
              <ul>
                {experience.accomplishment.map((accomplishment, index) => {
                  if (Array.isArray(accomplishment)) {
                    return (
                      <div className="flex gap-2" key={index}>
                        <HiChevronDoubleRight className="text-neutral-500 mt-[5px] min-w-10" />
                        <li className="text-wrap text-neutral-900 dark:text-neutral-50">
                          {accomplishment.map((item, i) => (
                            <span
                              key={`${index}-${i}`}
                              className={
                                item?.isHightlight ? "text-primary" : ""
                              }
                            >
                              {item.text}
                            </span>
                          ))}
                        </li>
                      </div>
                    );
                  }
                  return (
                    <div className="flex gap-2" key={index}>
                      <HiChevronDoubleRight className="text-neutral-500 mt-[5px] min-w-10" />
                      <li className="text-neutral-900 dark:text-neutral-50">
                        {accomplishment}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </Section>
  );
}
