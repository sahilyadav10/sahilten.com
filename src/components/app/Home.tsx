import Image from "next/image";

import Pill from "../generic/Pill";
import Card from "../generic/Card";
import moi from "../../../public/moi.png";

export default function Home() {
  return (
    <div className="p-4 my-4 flex flex-col gap-20">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:flex-1/2">
            <Image
              src={moi}
              alt="A picture of Sahil Yadav"
              className="rounded-xl"
            />
          </div>
          <div className="flex-1/2 flex items-start flex-col justify-center gap-6">
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
            <button className="bg-[#8C52FF] text-neutral-50 rounded-xl py-3 w-full cursor-pointer hover:opacity-90">
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
      <div className="flex gap-2 flex-col">
        <h2 className="text-neutral-900 dark:text-neutral-50 font-bold text-lg">
          Skills
        </h2>
        <div className="flex gap-2">
          <Pill>HTML5</Pill>
          <Pill>CSS3</Pill>
          <Pill>JavaScript (ES6+)</Pill>
          <Pill>React.js</Pill>
          <Pill>Next.js</Pill>
        </div>
        <div className="flex gap-2">
          <Pill>Node.js (Express)</Pill>
          <Pill>Python (Django)</Pill>
        </div>
        <div className="flex gap-2">
          <Pill>AWS EC2</Pill>
          <Pill>AWS CloudFront</Pill>
          <Pill>AWS S3</Pill>
          <Pill>AWS Lambda</Pill>
          <Pill>AWS API Gateway</Pill>
        </div>
      </div>
    </div>
  );
}
