import Image from "next/image";
import Button from "@/components/generic/Button";
import { HiArrowRight } from "react-icons/hi";

type CardVariant = "stat" | "content";
type CardProps = {
  heading: string;
  subheading?: string;
  image?: {
    src: string;
    alt: string;
  };
  variant: CardVariant;
  className?: string;
  href?: string;
};

const variantStyles = {
  stat: "bg-neutral-50 border border-neutral-200",
  content: "bg-neutral-50 shadow-lg",
};

export default function Card({
  heading,
  subheading,
  image,
  variant = "content",
  className = "",
  href,
}: CardProps) {
  const handleClick = () => {
    if (href) {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className={`group rounded-2xl flex flex-col ${variantStyles[variant]} ${
        href ? "cursor-pointer" : ""
      } ${className}`}
      onClick={href ? handleClick : undefined}
      role={href ? "link" : undefined}
      tabIndex={href ? 0 : undefined}
    >
      {image && (
        <div className="w-full h-48 relative overflow-hidden rounded-t-2xl">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-120"
          />
        </div>
      )}

      {variant === "stat" ? (
        <div className="flex flex-col items-center py-3">
          <span className="text-3xl font-bold text-neutral-900">{heading}</span>
          {subheading && <span className="text-neutral-500">{subheading}</span>}
        </div>
      ) : (
        <div className="pt-2 flex flex-col px-4 pb-4 hover:border-x hover:border-b hover:border-primary hover:rounded-b-2xl hover:border-t-none">
          <h3 className="font-semibold text-neutral-900">{heading}</h3>
          {subheading && (
            <p className="text-neutral-600 text-sm">{subheading}</p>
          )}
          <Button className="justify-center mt-3" size="sm">
            View <HiArrowRight />
          </Button>
        </div>
      )}
    </div>
  );
}
