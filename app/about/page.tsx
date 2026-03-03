import { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { teamMembers, companyName } from "@/lib/constants";
import { Linkedin, Twitter, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about PiNodeAI, our mission, values, and the talented team behind our success.",
};

const values = [
  {
    title: "Innovation",
    description:
      "We stay at the forefront of technology, constantly exploring new solutions and approaches.",
  },
  {
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, from code quality to client relationships.",
  },
  {
    title: "Integrity",
    description:
      "We conduct business with honesty, transparency, and ethical practices.",
  },
  {
    title: "Collaboration",
    description:
      "We believe in the power of teamwork and work closely with our clients as partners.",
  },
];

const milestones = [
  {
    year: "2022",
    event: "Started with a small idea—delivering solutions for small-scale requirements and early client partnerships.",
  },
  {
    year: "2023",
    event: "Scaled to full-stack development; began offering end-to-end product engineering and digital transformation.",
  },
  {
    year: "2024",
    event: "Launched complete AI/ML solutions and data migration services alongside our full-stack offerings.",
  },
  {
    year: "Today",
    event: "Full-stack engineering (frontend, backend, cloud), production AI/ML pipelines and model deployment, ETL and legacy-to-cloud data migration, plus DevOps and platform automation—enabling scale and modernisation.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="py-12 text-center md:py-16">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              About {companyName}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              We are a team of passionate technologists dedicated to transforming
              businesses through innovative solutions.
            </p>
          </div>
        </div>
      </Section>

      {/* Company Story */}
      <Section>
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  We started in 2022 with a small idea: to give solutions to
                  small-scale requirements. Today {companyName} delivers
                  full-stack solutions alongside complete AI/ML and data
                  migration services—helping businesses of every size transform
                  and scale.
                </p>
                <p>
                  From early client partnerships to enterprise digital
                  transformation, we&apos;ve grown by staying close to real
                  needs—building products, migrating data, and embedding
                  AI/ML where it creates the most impact.
                </p>
                <p>
                  Our commitment to excellence, innovation, and client success
                  has made us a trusted partner for businesses seeking to
                  leverage technology for competitive advantage.
                </p>
              </div>
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg md:h-96">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                alt="Our team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Mission */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              To empower businesses with cutting-edge technology solutions that
              drive growth, efficiency, and innovation. We believe that every
              business, regardless of size, should have access to world-class
              technology expertise.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Our Values
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} hover className="text-center">
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Team */}
      {/* <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Our Team
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
              Meet the talented individuals who make it all possible
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <Card key={member.id} className="text-center">
                <div className="relative mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="mb-3 text-primary-600 dark:text-primary-400">
                  {member.role}
                </p>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                  {member.bio}
                </p>
                {member.social && (
                  <div className="flex justify-center space-x-4">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                        aria-label="Twitter"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                        aria-label="GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </Section> */}

      {/* Timeline */}
      <Section>
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Our Journey
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
              Key milestones in our company&apos;s history
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 bg-primary-200 dark:bg-primary-800 md:block" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  <div className="flex-1 text-right md:w-1/2">
                    {index % 2 === 0 && (
                      <Card>
                        <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                          {milestone.year}
                        </div>
                        <div className="mt-2 text-gray-900 dark:text-white">
                          {milestone.event}
                        </div>
                      </Card>
                    )}
                  </div>
                  <div className="hidden h-4 w-4 rounded-full bg-primary-600 dark:bg-primary-400 md:block" />
                  <div className="flex-1 text-left md:w-1/2">
                    {index % 2 !== 0 && (
                      <Card>
                        <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                          {milestone.year}
                        </div>
                        <div className="mt-2 text-gray-900 dark:text-white">
                          {milestone.event}
                        </div>
                      </Card>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

