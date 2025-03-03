import TeamCard from "../Cards/team-card";
import { Card, CardHeader, CardBody } from "@heroui/react";
import { title } from "@/components/primitives";

export default function TeamSection() {
  return (
    <div className="mt-8">
      <Card className="p-8 min-h-[600px]">
        <CardHeader className="justify-center">
          <h2 className={title({ size: "sm", color: "yellow" })}>Our Team</h2>
        </CardHeader>
        <CardBody className="flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <TeamCard
              name="Ricky Bobby"
              title="Tech Whiz"
              image="https://heroui.com/images/card-example-6.jpeg"
              description="He's a tech whiz. A genius."
            />
            <TeamCard
              name="Olive Oil"
              title="The Money Maker"
              image="https://heroui.com/images/card-example-4.jpeg"
              description="Keeps us and you on the right side of the balance sheet."
            />
                      <TeamCard
              name="Ricky Bobby"
              title="Tech Whiz"
              image="https://heroui.com/images/card-example-6.jpeg"
              description="He's a tech whiz. A genius."
            />
                        <TeamCard
              name="Olive Oil"
              title="The Money Maker"
              image="https://heroui.com/images/card-example-4.jpeg"
              description="Keeps us and you on the right side of the balance sheet."
            />
                      <TeamCard
              name="Ricky Bobby"
              title="Tech Whiz"
              image="https://heroui.com/images/card-example-6.jpeg"
              description="He's a tech whiz. A genius."
            />
                        <TeamCard
              name="Olive Oil"
              title="The Money Maker"
              image="https://heroui.com/images/card-example-4.jpeg"
              description="Keeps us and you on the right side of the balance sheet."
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
