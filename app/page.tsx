import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Section from "@/components/layout/section";
import Button from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ServiceIcon from "@/components/ui/service-icon";
import {
  services,
  testimonials,
  companyStats,
  blogPosts,
  caseStudies,
} from "@/lib/constants";
import { formatDate } from "@/lib/utils";

export default function HomePage() {
  const featuredServices = services.filter((s) => s.featured).slice(0, 3);
  const featuredBlogPosts = blogPosts.filter((p) => p.featured).slice(0, 3);
  const featuredCaseStudies = caseStudies.filter((c) => c.featured).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <Section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Desktop product demo background"
          >
            <source src="/desktop-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white/10 dark:bg-gray-950/70" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid items-center gap-12 py-20 md:py-32">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white dark:text-white md:text-5xl lg:text-6xl">
                Transforming Ideas into
                <span className="block text-primary-600 dark:text-primary-400">
                  Intelligent Solutions
                </span>
              </h1>
              <p className="mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
                We help businesses leverage AI, cloud infrastructure, and modern
                development practices to achieve their digital transformation
                goals.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact">
                  <Button size="lg">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline">
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-primary-600 text-white dark:bg-primary-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {companyStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-2 text-4xl font-bold md:text-5xl">
                  {stat.prefix}
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-sm opacity-90 md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Services Overview */}
      <Section>
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
              Comprehensive technology solutions to help your business thrive in
              the digital age
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <Card key={service.id} hover className="flex flex-col">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                  <ServiceIcon iconName={service.icon} className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mb-4 flex-grow text-gray-600 dark:text-gray-300">
                  {service.shortDescription}
                </p>
                <Link href={`/services/${service.slug}`}>
                  <Button variant="ghost" size="sm" className="w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/services">
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* About Brief */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                About PiNodeAI
              </h2>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                We are a team of experienced technologists, designers, and
                strategists dedicated to helping businesses succeed in the
                digital world. With expertise in AI, cloud infrastructure, and
                modern development practices, we deliver solutions that drive
                real business value.
              </p>
              <p className="mb-8 text-gray-600 dark:text-gray-300">
                Our mission is to make advanced technology accessible and
                practical for businesses of all sizes, from startups to
                enterprises.
              </p>
              <Link href="/about">
                <Button>
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg md:h-96">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section>
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Success Stories
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
              See how we&apos;ve helped businesses achieve their goals
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredCaseStudies.map((study) => (
              <Card key={study.id} hover className="flex flex-col">
                <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {study.title}
                </h3>
                <p className="mb-4 flex-grow text-gray-600 dark:text-gray-300">
                  {study.description}
                </p>
                <Link href={`/portfolio/${study.slug}`}>
                  <Button variant="ghost" size="sm" className="w-full">
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/portfolio">
              <Button variant="outline" size="lg">
                View All Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
              Don&apos;t just take our word for it
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 6).map((testimonial) => (
              <Card key={testimonial.id} className="flex flex-col">
                <div className="mb-4 flex items-center space-x-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
                <p className="mb-4 flex-grow italic text-gray-700 dark:text-gray-300">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex text-yellow-400">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <CheckCircle2 key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Blog Preview */}
      <Section>
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Latest Insights
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
              Stay updated with the latest trends and insights
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredBlogPosts.map((post) => (
              <Card key={post.id} hover className="flex flex-col">
                <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  {formatDate(post.publishedAt)} · {post.readingTime} min read
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {post.title}
                </h3>
                <p className="mb-4 flex-grow text-gray-600 dark:text-gray-300">
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.slug}`}>
                  <Button variant="ghost" size="sm" className="w-full">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/blog">
              <Button variant="outline" size="lg">
                View All Posts
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white dark:from-primary-700 dark:to-secondary-700">
        <div className="container mx-auto px-4">
          <div className="py-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mb-8 mx-auto max-w-2xl text-lg opacity-90">
              Let&apos;s discuss how we can help you achieve your digital
              transformation goals
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

