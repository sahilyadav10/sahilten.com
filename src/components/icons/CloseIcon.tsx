"use client";

const CloseIcon = ({
  width = 24,
  height = 24,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      className="text-neutral-900 dark:text-neutral-50"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
      height={height}
      width={width}
    >
      <path d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
};

export default CloseIcon;
