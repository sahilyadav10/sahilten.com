import Image from "next/image";

import Card from "@/components/generic/Card";
import moi from "../../../public/moi.png";

export default function Home() {
  return (
    <div className="p-4 my-10 flex flex-col gap-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:basis-1/2">
          <Image
            src={moi}
            alt="A picture of Sahil Yadav"
            className="rounded-2xl"
          />
        </div>
        <div className="basis-1/2 flex items-start flex-col justify-center gap-6">
          <div className="flex items-start flex-col justify-center gap-2">
            {" "}
            <h1 className="text-4xl font-extrabold text-neutral-900 dark:text-neutral-50">
              Hi, I&apos;m Sahil
            </h1>
            <p className="text-neutral-900 dark:text-neutral-50">
              Time&apos;s Person of the Year (2006). Engineer of exceptional
              digital experiences (since 2020)
            </p>
          </div>
          <button className="bg-primary text-neutral-50 rounded-2xl py-3 w-full cursor-pointer hover:opacity-90">
            View Resume
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <Card variant="stat" heading="5" subheading="Years of experience" />
          <Card variant="stat" heading="3" subheading="Companies worked" />
          <Card
            variant="stat"
            heading="0"
            subheading="Days since AI broke my build"
          />
        </div>
      </div>
    </div>
  );
}
