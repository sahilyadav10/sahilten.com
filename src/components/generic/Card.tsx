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
};

const variantStyles = {
  stat: "bg-gray-50 border border-gray-200",
  content: "bg-transparent",
};

export default function Card({
  heading,
  subheading,
  image,
  variant = "content",
  className = "",
}: CardProps) {
  return (
    <div
      className={`rounded-lg flex flex-col ${variantStyles[variant]} ${className}`}
    >
      {image && (
        <div className="w-full h-48 relative mb-4">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover rounded-lg"
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
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
            {heading}
          </h3>
          {subheading && (
            <p className="text-neutral-600 dark:text-neutral-400 mt-1">
              {subheading}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
