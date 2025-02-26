

import React from 'react';
import { Card, CardBody, CardHeader, Button, Image } from "@heroui/react";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";



const Journey: React.FC = () => {


  return (
    <DefaultLayout>

        {/* Partnership Process */}
        <section className="mb-12">
          <h2 className={title({ size: "sm", class: "mb-8" })}>Partnering with BEHOLD Group</h2>
          <div className="grid grid-cols-1 gap-6">
            <Card className="p-6">
              <CardHeader className="pb-4">
                <h3 className="text-2xl font-bold">The Partnership Journey</h3>
              </CardHeader>
              <CardBody>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2">1. Initial Consultation</h4>
                      <p className="text-default-600">We begin with a comprehensive discussion of your business goals, challenges, and vision for the future.</p>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2">2. Assessment & Planning</h4>
                      <p className="text-default-600">Our team conducts a thorough analysis and develops a customized transformation strategy.</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2">3. Partnership Agreement</h4>
                      <p className="text-default-600">We establish clear terms and expectations, ensuring alignment of interests and shared commitment to success.</p>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2">4. Implementation & Growth</h4>
                      <p className="text-default-600">Working together, we execute the transformation strategy and drive sustainable growth.</p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section>
          <h2 className={title({ size: "sm", class: "mb-8" })}>Benefits of Partnership</h2>
          <Card className="p-6">
            <CardBody>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Strategic Advantages</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-default-600">Access to expert business transformation strategies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-default-600">Digital transformation expertise and implementation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-default-600">Strategic planning and execution support</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Operational Support</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-default-600">Ongoing operational optimization and support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-default-600">Access to our network of industry experts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-default-600">Regular performance reviews and optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>



    </DefaultLayout>
  );
}

export default Journey;
