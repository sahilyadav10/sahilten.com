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
  stat: "bg-neutral-50 border border-primary/30",
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
      className={`rounded-2xl flex flex-col ${variantStyles[variant]} ${className}`}
    >
      {image && (
        <div className="w-full h-48 min-h-48 relative overflow-hidden rounded-t-2xl">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-500 hover:scale-120"
          />
        </div>
      )}

      {variant === "stat" ? (
        <div className="flex flex-col items-center py-3">
          <span className="text-3xl font-bold text-neutral-900">{heading}</span>
          {subheading && <span className="text-neutral-500">{subheading}</span>}
        </div>
      ) : (
        <div className="pt-2 h-full flex gap-2 flex-col justify-between px-4 pb-4">
          <div>
            <h3 className="font-semibold text-neutral-900">{heading}</h3>
            {subheading && (
              <p className="text-neutral-600 text-sm">{subheading}</p>
            )}
          </div>
          <Button
            className="justify-center"
            size="sm"
            onClick={href ? handleClick : undefined}
            tabIndex={href ? 0 : undefined}
          >
            View <HiArrowRight />
          </Button>
        </div>
      )}
    </div>
  );
}
