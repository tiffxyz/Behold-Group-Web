import { title, subtitle } from "@/components/primitives";
import { Card, CardBody, CardHeader, CardFooter, Image} from "@heroui/react";
// import FoundersSection from "../Sections/foundersSection";
// import TeamSection from "../Sections/teamSection";
import { Button } from "@heroui/react";
import { Link } from "react-router-dom";

export const About = () => {
    return (
<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="w-full max-w-5xl">
          {/* <h1 className={title({ color: "violet", className: "mb-4" })}>
            About Us
          </h1>
          <p className={subtitle({ className: "mb-8" })}>
            We specialize in transforming small businesses through strategic digital solutions and expert exit planning.
          </p> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission */}
            {/* <Card className="p-4 radius-90"> */}
            <Card className="rounded-full w-60 h-[350px] overflow-hidden">
              <CardHeader className="mt-10 justify-center">
                <h2 className={title({ size: "sm", color: "blue" })}>Our Mission</h2>
              </CardHeader>
              <CardBody>
                <p className="text-default-600">
                  To empower small business owners with the tools, knowledge, and strategies
                  they need to thrive in the digital age and achieve their long-term goals.
                </p>
              </CardBody>
            </Card>

            {/* Vision */}

            <Card className="rounded-full w-60 h-[350px] overflow-hidden">
              <CardHeader className="mt-10 justify-center">
                <h2 className={title({ size: "sm", color: "green" })}>Our Vision</h2>
              </CardHeader>
              <CardBody>
                <p className="text-default-600">
                  To be the leading partner for small businesses seeking digital transformation
                  and successful exit strategies in an ever-evolving market.
                </p>
              </CardBody>
            </Card>

          </div>


{/* Our Founders */}

{/* <FoundersSection/> */}

{/* Our Team */}

{/* <TeamSection/> */}

      {/* </div> */}

{/*


        <div className="mt-8">
            <Card className="p-4">
              <CardHeader>
                <h2 className={title({ size: "sm", color: "yellow" })}>Our Approach</h2>
              </CardHeader>
              <CardBody>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Understand</h3>
                    <p className="text-default-600">
                      We start by deeply understanding your business, goals, and challenges.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Transform</h3>
                    <p className="text-default-600">
                      Implement tailored digital solutions that drive growth and efficiency.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Succeed</h3>
                    <p className="text-default-600">
                      Guide you toward sustainable success or a profitable exit strategy.
                    </p>
                  </div>
                </div>
              </CardBody>
              <CardFooter className="">
                    <div>
                    <Button
            as={Link}
            color="primary"
            href="/about"
            variant="flat"
            className="text-sm"
          >
            Learn more about us
          </Button>
                    </div>
                  </CardFooter>
            </Card>
          </div> */}
<br />
          <div className="flex justify-center">
                    <Button
            as={Link}
            color="primary"
            href="/about"
            variant="flat"
            className="text-sm"
          >
            Meet The Team
          </Button>
                    </div>
          </div>

      </section>
    );
  };
  export default About;
