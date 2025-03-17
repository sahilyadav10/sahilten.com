import React from "react";

type SectionProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
  withSpacing?: boolean;
};

export default function Section({
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
    >
      <h2 className="text-neutral-900 dark:text-neutral-50 font-bold text-lg">
        {title}
      </h2>
      {children}
    </div>
  );
}
