import Image from "next/image";

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
  content: "bg-transparent",
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
      className={`rounded-2xl flex flex-col ${variantStyles[variant]} ${
        href ? "transition-transform hover:opacity-90 cursor-pointer" : ""
      } ${className}`}
      onClick={href ? handleClick : undefined}
      role={href ? "link" : undefined}
      tabIndex={href ? 0 : undefined}
    >
      {image && (
        <div className="w-full h-48 relative mb-2">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover rounded-2xl"
          />
        </div>
      )}

      {variant === "stat" ? (
        <div className="flex flex-col items-center py-3">
          <span className="text-3xl font-bold text-neutral-900">{heading}</span>
          {subheading && <span className="text-neutral-500">{subheading}</span>}
        </div>
      ) : (
        <div className="flex flex-col">
          <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
            {heading}
          </h3>
          {subheading && (
            <p className="text-neutral-600 text-sm dark:text-neutral-400">
              {subheading}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
