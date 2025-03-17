"use client";
import CopyText from "@/components/generic/CopyText";
import { SocialLink } from "@/components/app/Socials";

type SocialCardProps = {
  social: SocialLink;
};

export default function SocialCard({ social }: SocialCardProps) {
  const Icon = social.icon;

  const handleClick = () => {
    window.open(social.url, social.isEmail ? "_self" : "_blank");
  };

  return (
    <div
      className="basis-1/3 md:max-w-[32%] p-4 border border-primary/30 rounded-2xl transition-all duration-200 hover:border-primary cursor-pointer"
      role="button"
      onClick={handleClick}
      tabIndex={0}
      aria-label={`Visit ${social.name} profile`}
    >
      <Icon size={30} className="text-neutral-900 dark:text-neutral-50" />
      <div className="mt-2">
        <p className="font-medium text-neutral-900 dark:text-neutral-50">
          {social.name}
        </p>
        <div>
          <CopyText text={social.text} />
        </div>
      </div>
    </div>
  );
}
