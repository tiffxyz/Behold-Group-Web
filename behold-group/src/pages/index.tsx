import DefaultLayout from "@/layouts/default";
import Hero from "@/components/Hero/hero";
import Contact from "@/components/Hero/contact-hero";
import Services from "@/components/Hero/services-hero";
import Hero2 from "@/components/Hero/hero copy";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Hero />
        <Hero2/>
        <Services />
       {/* < Partner/> */}
        {/* <About /> */}

        <Contact/>
      </section>
    </DefaultLayout>



  );
}
