import { title, subtitle } from "@/components/primitives";
import { Button, Image, link } from "@heroui/react";


const Hero2 = () => {
  return (

<section className="bg-gradient-to-r from-blue-100 to-teal-100 p-4 text-white w-screen">


    <div className="grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
      {/* <Image
        className="w-full h-screen object-cover"
        src='https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2019/10/business_with_esa/21093947-3-eng-GB/Business_with_ESA_pillars.jpg'
        alt="Business handshake"
        /> */}

<div className="flex items-center justify-center">
        <div className="text-center text-3xl">
          <span className={title({ color: "yellow" })}>TRANSFORM<br />YOUR BUSINESS<br />AND <br />YOUR LEGACY.</span>

</div>
</div>

      <div className="flex items-center justify-center">
        <div className="text-center">

          <div className={subtitle({ class: "mt-4" })}>
          <p>
                  We believe in building lasting relationships with small business owners, working together as true partners in growth and transformation. Our approach focuses on understanding your unique challenges and opportunities.
                </p>
          </div>
        </div>
      </div>
    </div>
        </section>

  );
};

export default Hero2;
