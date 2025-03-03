import React from 'react';
import { Card, CardBody, CardHeader, Button } from '@heroui/react';
import { Link } from 'react-router-dom';

export const AwaitingApprovalPage: React.FC = () => {
  return (
    <div className="w-full max-w-xl mx-auto py-12 px-4">
      <Card className="w-full">
        <CardHeader className="flex flex-col items-center">
          <div className="mb-4 text-success">
            {/* You can replace this with an actual checkmark icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
          </div>
          <h1 className="text-2xl font-bold">Thanks for Signing Up!</h1>
        </CardHeader>

        <CardBody className="text-center">
          <div className="space-y-4">
            <p>Your account has been created successfully.</p>
            <p className="font-medium">Your registration is now awaiting approval.</p>
            <p className="text-default-600">
              We'll review your information and notify you via email when your account is approved.
              This typically takes 1-2 business days.
            </p>

            <div className="pt-4">
              <Link to="/">
                <Button color="primary">
                  Return to Home
                </Button>
              </Link>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
