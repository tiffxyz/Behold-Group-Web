import React from 'react';
import { Card, CardBody,  Button} from "@heroui/react";
import { title, subtitle } from "@/components/primitives";
import ServiceCard from '../Cards/services-card';
import { Link } from "react-router-dom";


interface Service {
    title: string;
    description: string;
    image: string;

  }

const Services: React.FC = () => {
  const services: Service[] = [

    {
      title: "Digital Transformation",
      description: "Modernize your business operations with cutting-edge digital solutions.",
     image:"https://heroui.com/images/card-example-6.jpeg",
    //   features: [
    //     "Business process automation",
    //     "Cloud infrastructure implementation",
    //     "Digital workflow optimization",
    //     "Legacy system modernization",
    //     "Data analytics integration"
    //   ]
    },
    {
      title: "Business Consulting",
      description: "Expert guidance to optimize your business operations and growth.",
        image:"https://heroui.com/images/card-example-6.jpeg"
    //   features: [
    //     "Operational efficiency",
    //     "Market analysis",
    //     "Growth strategy",
    //     "Risk management",
    //     "Performance optimization"
    //   ]
    },
    {
      title: "Exit Planning",
      description: "Strategic planning and preparation for successful business exits.",
       image:"https://heroui.com/images/card-example-6.jpeg"
    //   features: [
    //     "Business valuation",
    //     "Exit strategy development",
    //     "Financial restructuring",
    //     "Succession planning",
    //     "Deal negotiation support"
    //   ]
    },
    // {
    //   title: "Technology Solutions",
    //   description: "Custom technology solutions to drive your business forward.",
    //     image:"https://heroui.com/images/card-example-6.jpeg"
    // //   features: [
    // //     "Custom software development",
    // //     "Systems integration",
    // //     "IT infrastructure",
    // //     "Cybersecurity",
    // //     "Tech stack optimization"
    // //   ]
    // }
  ];

  return (

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="w-full max-w-7xl">
          <h1 className={title({ color: "blue", className: "mb-4" })}>
            Our Services
          </h1>
          <p className={subtitle({ className: "mb-8" })}>
            Comprehensive solutions to transform your business and prepare for the future.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              <Button             as={Link}
                          color="primary"
                          href="/contact"
                          variant="flat"
                          className="text-sm"
                          >
                Schedule a Consultation
              </Button>
            </CardBody>
          </Card>
        </div>
      </section>


  );
}

export default Services;
