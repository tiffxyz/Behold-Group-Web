import { title } from "@/components/primitives";
import { Card, CardBody, CardHeader} from "@heroui/react";


export const Partner = () => {
    return (
 <section className="mb-12">
            <div className="flex justify-center mb-6">
              <h1 className={title({ color: "violet", className: "mb-4" })}>
            Long-Term Partnerships Overview
          </h1>
              </div>

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

    );
  };
  export default Partner;
