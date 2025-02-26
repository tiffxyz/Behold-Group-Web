import { title, subtitle } from "@/components/primitives";
import { Card, CardBody, CardHeader} from "@heroui/react";


export const Partner = () => {
    return (


<section className="bg-gradient-to-r from-blue-100 to-teal-100 p-4 text-white w-screen">


    <div className="grid grid-cols-1 md:grid-cols-2 min-h-[700px]">


<div className="flex items-center justify-center">
        <div className="text-center text-3xl">
          <span className={title({ color: "yellow" })}>LONG-TERM<br />PARTNERSHIPS</span>

</div>
</div>

      <div className="flex items-center justify-center">


            <div className="flex items-center justify-center">
                    <div className="text-center">

                      <div className={subtitle({ class: "mt-4" })}>
                      <p>
                      Our equity-based partnership model aligns our interests with yours, ensuring we're fully committed to your success. We invest our expertise and resources alongside you for sustainable growth.
                            </p>
                      </div>
                    </div>
                  </div>
        {/* <div className="text-center">

          <div className={subtitle({ class: "mt-4" })}>
          <p>
                  We believe in building lasting relationships with small business owners, working together as true partners in growth and transformation. Our approach focuses on understanding your unique challenges and opportunities.
                </p>
          </div>
        </div> */}
      </div>
    </div>


          <div>
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
