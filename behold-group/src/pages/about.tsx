import FoundersSection from "@/components/Sections/foundersSection";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Card, CardBody, CardHeader, CardFooter, Image} from "@heroui/react";

export default function AboutPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="w-full max-w-5xl">
          <h1 className={title({ color: "violet", className: "mb-4" })}>
            About Us
          </h1>
          <p className={subtitle({ className: "mb-8" })}>
            We specialize in transforming small businesses through strategic digital solutions and expert exit planning.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission */}
            <Card className="p-4">
              <CardHeader>
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

            <Card className="p-4">
              <CardHeader>
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

<FoundersSection/>


{/* Our Team */}

          <div className="mt-8">
            <Card className="p-4">
              <CardHeader>
                <h2 className={title({ size: "sm", color: "yellow" })}>Our Team</h2>
              </CardHeader>
              <CardBody>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Team Card */}
                  <Card isFooterBlurred className="w-full h-[300px]  ">
                    <Image
                    removeWrapper
                    alt="Card example background"
                    className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                    src="https://heroui.com/images/card-example-6.jpeg"
                    />
                  <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                    <div>
                      <p className="text-black">Olive Oil</p>
                      <p className="text-black text-tiny">Tech Whiz</p>
                    </div>
                  </CardFooter>
                </Card>


                <Card isFooterBlurred className="w-full h-[300px]  ">
                    <Image
                    removeWrapper
                    alt="Card example background"
                    className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                    src="https://heroui.com/images/card-example-6.jpeg"
                    />
                  <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                    <div>
                      <p className="text-black">Olive Oil</p>
                      <p className="text-black text-tiny">Tech Whiz</p>
                    </div>
                  </CardFooter>
                </Card>

                <Card isFooterBlurred className="w-full h-[300px]  ">
                    <Image
                    removeWrapper
                    alt="Card example background"
                    className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                    src="https://heroui.com/images/card-example-6.jpeg"
                    />
                  <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                    <div>
                      <p className="text-black">Olive Oil</p>
                      <p className="text-black text-tiny">Tech Whiz</p>
                    </div>
                  </CardFooter>
                </Card>

                <Card isFooterBlurred className="w-full h-[300px]  ">
                    <Image
                    removeWrapper
                    alt="Card example background"
                    className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                    src="https://heroui.com/images/card-example-6.jpeg"
                    />
                  <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                    <div>
                      <p className="text-black">Peppa Pig</p>
                      <p className="text-black text-tiny">Tech Whiz</p>
                    </div>
                  </CardFooter>
                </Card>

                <Card isFooterBlurred className="w-full h-[300px]  ">
                    <Image
                    removeWrapper
                    alt="Card example background"
                    className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                    src="https://heroui.com/images/card-example-6.jpeg"
                    />
                  <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                    <div>
                      <p className="text-black">Minnie Mouse</p>
                      <p className="text-black text-tiny">Tech Whiz</p>
                    </div>
                  </CardFooter>
                </Card>

                <Card isFooterBlurred className="w-full h-[300px]  ">
                    <Image
                    removeWrapper
                    alt="Card example background"
                    className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                    src="https://heroui.com/images/card-example-6.jpeg"
                    />
                  <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                    <div>
                      <p className="text-black">Olive Oil</p>
                      <p className="text-black text-tiny">Tech Whiz</p>
                    </div>
                  </CardFooter>
                </Card>


          </div>

              </CardBody>
            </Card>
          </div>



      {/* </div> */}




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
            </Card>
          </div>
          </div>
      </section>
    </DefaultLayout>
  );
}
