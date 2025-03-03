import React from "react";
import { Card, CardBody, Link } from "@heroui/react";
import { title, subtitle } from "@/components/primitives";

const ContactInfo: React.FC = () => {
  return (
    <div>
      <h1 className={title({ color: "blue", className: "mb-4" })}>Contact Us</h1>
      <p className={subtitle({ className: "mb-8" })}>
        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
      </p>

      <div className="space-y-6">
        <Card className="bg-primary/5">
          <CardBody>
            <h3 className="text-lg font-semibold mb-2">Office Location</h3>
            <p className="text-default-600">
              123 Business Ave, Suite 100<br />
              San Francisco, CA 94107
            </p>
          </CardBody>
        </Card>

        <Card className="bg-primary/5">
          <CardBody>
            <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
            <div className="space-y-2">
              <p className="text-default-600">
                <strong>Email: </strong>
                <Link href="mailto:contact@beholdgroup.com" color="primary">
                  contact@beholdgroup.com
                </Link>
              </p>
              <p className="text-default-600">
                <strong>Phone: </strong>
                <Link href="tel:+1234567890" color="primary">
                  (123) 456-7890
                </Link>
              </p>
            </div>
          </CardBody>
        </Card>

        <Card className="bg-primary/5">
          <CardBody>
            <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
            <p className="text-default-600">
              Monday - Friday: 9:00 AM - 6:00 PM PST<br />
              Saturday - Sunday: Closed
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ContactInfo;
