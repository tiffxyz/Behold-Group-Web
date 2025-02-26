// import { title } from "@/components/primitives";
// import DefaultLayout from "@/layouts/default";

// export default function DocsPage() {
//   return (
//     <DefaultLayout>
//       <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
//         <div className="inline-block max-w-lg text-center justify-center">
//           <h1 className={title()}>Services</h1>
//         </div>
//       </section>
//     </DefaultLayout>
//   );
// }
import React from 'react';
import { Card, CardBody, CardHeader, Button } from "@heroui/react";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  ctaText?: string;
}

interface Service {
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title: serviceTitle,
  description,
  features,
  ctaText = "Learn More"
}) => (
  <Card className="p-4">
    <CardHeader>
      <h3 className="text-xl font-semibold mb-2">{serviceTitle}</h3>
    </CardHeader>
    <CardBody>
      <p className="text-default-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="h-6 w-6 text-primary mr-2 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-default-600">{feature}</span>
          </li>
        ))}
      </ul>
      <Button color="primary" className="w-full">
        {ctaText}
      </Button>
    </CardBody>
  </Card>
);

const ServicesPage: React.FC = () => {
  const services: Service[] = [
    {
      title: "Digital Transformation",
      description: "Modernize your business operations with cutting-edge digital solutions.",
      features: [
        "Business process automation",
        "Cloud infrastructure implementation",
        "Digital workflow optimization",
        "Legacy system modernization",
        "Data analytics integration"
      ]
    },
    {
      title: "Exit Planning",
      description: "Strategic planning and preparation for successful business exits.",
      features: [
        "Business valuation",
        "Exit strategy development",
        "Financial restructuring",
        "Succession planning",
        "Deal negotiation support"
      ]
    },
    {
      title: "Business Consulting",
      description: "Expert guidance to optimize your business operations and growth.",
      features: [
        "Operational efficiency",
        "Market analysis",
        "Growth strategy",
        "Risk management",
        "Performance optimization"
      ]
    },
    {
      title: "Technology Solutions",
      description: "Custom technology solutions to drive your business forward.",
      features: [
        "Custom software development",
        "Systems integration",
        "IT infrastructure",
        "Cybersecurity",
        "Tech stack optimization"
      ]
    }
  ];

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="w-full max-w-7xl">
          <h1 className={title({ color: "blue", className: "mb-4" })}>
            Our Services
          </h1>
          <p className={subtitle({ className: "mb-8" })}>
            Comprehensive solutions to transform your business and prepare for the future.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <Card className="mt-12 p-6 bg-primary/5">
            <CardBody>
              <h2 className={title({ size: "sm", className: "mb-4" })}>
                Need a Custom Solution?
              </h2>
              <p className="text-default-600 mb-4">
                We understand that every business is unique. Contact us to discuss
                your specific needs and how we can help you achieve your goals.
              </p>
              <Button color="primary" variant="shadow" size="lg">
                Schedule a Consultation
              </Button>
            </CardBody>
          </Card>
        </div>
      </section>
    </DefaultLayout>
  );
}

export default ServicesPage;
