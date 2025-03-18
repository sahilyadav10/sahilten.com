import React from "react";
import Underline from "@/components/icons/Underline";

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  withSpacing?: boolean;
};

export default function Section({
  id,
  title,
  children,
  className = "",
  withSpacing = false,
}: SectionProps) {
  return (
    <div
      className={`flex flex-col gap-2 ${
        withSpacing ? "p-4 my-10" : ""
      } ${className}`}
      id={id}
    >
      <h2 className="text-neutral-900 dark:text-neutral-50 font-bold text-lg mb-2">
        {title} <Underline width={100} />
      </h2>
      {children}
    </div>
  );
}
