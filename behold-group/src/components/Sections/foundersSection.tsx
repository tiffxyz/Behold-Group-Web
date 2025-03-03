import { Card, CardHeader, CardBody } from "@heroui/react";
import { title } from "@/components/primitives";
import FlipCard from "@/components/Cards/flipcard";

export default function FoundersSection() {
  return (
    <div className="mt-8">
      <Card className="p-8 min-h-[600px]">
        <CardHeader className="justify-center">
          <h2 className={title({ size: "sm", color: "yellow" })}>Our Founders</h2>
        </CardHeader>
        <CardBody className="flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 px-8">
            <FlipCard
              name="Chris Baber"
              title=""
              image="https://ca.slack-edge.com/T0103FFRDFB-U07GLMYDF4G-907b40a69e28-1024"
              description="Chris Baber is the CEO of our company, leading the team with vision and expertise."
            />
            <FlipCard
              name="Pace Ellsworth"
              title=""
              image="https://ca.slack-edge.com/T0103FFRDFB-U0100PNGA5Q-32d7dc044c1e-192"
              // image="https://heroui.com/images/card-example-4.jpeg"
              description="Pace Ellsworth drives our operations, ensuring smooth execution and growth."
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
