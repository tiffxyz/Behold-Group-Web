import React from 'react';
import { Card, CardBody, CardHeader, Button, Image } from "@heroui/react";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

interface PartnershipType {
  title: string;
  description: string;
  benefits: string[];
  image?: string;
}

interface PartnershipTypeCardProps extends PartnershipType {
  onLearnMore?: () => void;
}

const PartnershipTypeCard: React.FC<PartnershipTypeCardProps> = ({
  title: partnershipTitle,
  description,
  benefits,
  image,
  onLearnMore
}) => (
  <Card className="p-4">
    <CardHeader className="flex gap-4">
      <Image
        alt={partnershipTitle}
        src={image || `/api/placeholder/150/150`}
        className="rounded-lg object-cover w-20 h-20"
      />
      <div>
        <h3 className="text-xl font-semibold">{partnershipTitle}</h3>
        <p className="text-default-500">{description}</p>
      </div>
    </CardHeader>
    <CardBody>
      <div className="mb-4">
        <h4 className="font-medium mb-2">Key Benefits:</h4>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
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
              <span className="text-default-600">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button
        color="primary"
        variant="flat"
        className="w-full"
        onClick={onLearnMore}
      >
        Learn More
      </Button>
    </CardBody>
  </Card>
);

const PartnershipsPage: React.FC = () => {
  const partnershipTypes: PartnershipType[] = [
    {
      title: "Technology Partners",
      description: "Join our ecosystem of technology providers",
      benefits: [
        "Access to our client network",
        "Co-marketing opportunities",
        "Technical integration support",
        "Joint solution development"
      ]
    },
    {
      title: "Consulting Partners",
      description: "Collaborate on client projects",
      benefits: [
        "Shared expertise and resources",
        "Revenue sharing opportunities",
        "Client referral program",
        "Joint service offerings"
      ]
    },
    {
      title: "Strategic Alliances",
      description: "Long-term strategic collaboration",
      benefits: [
        "Market expansion opportunities",
        "Shared research and development",
        "Industry influence",
        "Innovation partnerships"
      ]
    }
  ];

  const handleLearnMore = (partnershipType: string) => {
    console.log(`Learn more clicked for ${partnershipType}`);
    // Add navigation or modal logic here
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="w-full max-w-7xl">
          <h1 className={title({ color: "green", className: "mb-4" })}>
            Partnership Opportunities
          </h1>
          <p className={subtitle({ className: "mb-8" })}>
            Join forces with The Behold Group to create meaningful impact and drive mutual growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {partnershipTypes.map((type, index) => (
              <PartnershipTypeCard
                key={index}
                {...type}
                onLearnMore={() => handleLearnMore(type.title)}
              />
            ))}
          </div>

          <Card className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardBody>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h2 className={title({ size: "sm", className: "mb-4" })}>
                    Become a Partner
                  </h2>
                  <p className="text-default-600 mb-4">
                    Interested in exploring partnership opportunities? Let's discuss
                    how we can create value together.
                  </p>
                  <Button color="primary" variant="shadow" size="lg" href='/partnerships/apply'>
                    Start the Conversation
                  </Button>
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    alt="Partnership"
                    src="/api/placeholder/400/200"
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </div>


      <div className="flex flex-col gap-8 py-8 md:py-10">
        {/* Header Section */}
        <section className="flex flex-col items-center text-center mb-12">
          <h1 className={title({ size: "lg" })}>Partnerships</h1>
          <p className={subtitle({ class: "mt-4" })}>
            Join forces with BEHOLD Group to transform your business and achieve sustainable growth
          </p>
        </section>

        {/* Long-Term Partnerships Overview */}
        <section className="mb-12">
          <h2 className={title({ size: "sm", class: "mb-8" })}>Long-Term Partnerships Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-4">
              <CardHeader className="pb-2">
                <h3 className="text-xl font-bold">Our Partnership Philosophy</h3>
              </CardHeader>
              <CardBody>
                <p className="text-default-600">
                  We believe in building lasting relationships with small business owners, working together as true partners in growth and transformation. Our approach focuses on understanding your unique challenges and opportunities.
                </p>
              </CardBody>
            </Card>

            <Card className="p-4">
              <CardHeader className="pb-2">
                <h3 className="text-xl font-bold">Equity-Based Collaboration</h3>
              </CardHeader>
              <CardBody>
                <p className="text-default-600">
                  Our equity-based partnership model aligns our interests with yours, ensuring we're fully committed to your success. We invest our expertise and resources alongside you for sustainable growth.
                </p>
              </CardBody>
            </Card>

            <Card className="p-4">
              <CardHeader className="pb-2">
                <h3 className="text-xl font-bold">Success Stories</h3>
              </CardHeader>
              <CardBody>
                <p className="text-default-600">
                  Explore our track record of successful business transformations and exits. Our case studies demonstrate how we've helped partners achieve their goals through digital transformation and strategic growth.
                </p>
              </CardBody>
            </Card>
          </div>
        </section>


      </div>

      </section>
    </DefaultLayout>
  );
}

export default PartnershipsPage;
