import React from 'react';
import { Card, CardBody, CardHeader, Button, Tabs, Tab } from "@heroui/react";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

type ResourceType = 'guide' | 'template' | 'tool';

interface Resource {
  title: string;
  description: string;
  type: ResourceType;
  downloadUrl: string;
}

interface ResourceCardProps extends Resource {
  onDownload?: (resource: Resource) => void;
}

interface ResourceCollection {
  guides: Resource[];
  templates: Resource[];
  tools: Resource[];
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title: resourceTitle,
  description,
  type,
  downloadUrl,
  onDownload
}) => (
  <Card className="p-4">
    <CardHeader>
      <div className="flex items-center gap-2 mb-2">
        <svg
          className="h-6 w-6 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {type === 'guide' && (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          )}
          {type === 'template' && (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          )}
          {type === 'tool' && (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
          )}
        </svg> <br />
        {/* <span className="text-sm text-default-500 uppercase">{type}</span> */}
      </div>
      <h3 className="text-xl font-semibold">{resourceTitle}</h3>
    </CardHeader>
    <CardBody>
      <p className="text-default-600 mb-4">{description}</p>
      <Button
        color="primary"
        variant="flat"
        className="w-full"
        onClick={() => onDownload?.({ title: resourceTitle, description, type, downloadUrl })}
      >
        Download
      </Button>
    </CardBody>
  </Card>
);

const ResourcesPage: React.FC = () => {
  const [selectedKey, setSelectedKey] = React.useState<string>("guides");

  const resources: ResourceCollection = {
    guides: [
      {
        title: "Digital Transformation Playbook",
        description: "A comprehensive guide to modernizing your business operations",
        type: "guide",
        downloadUrl: "/resources/digital-transformation-playbook.pdf"
      },
      {
        title: "Exit Planning Guide",
        description: "Step-by-step guide to preparing your business for a successful exit",
        type: "guide",
        downloadUrl: "/resources/exit-planning-guide.pdf"
      }
    ],
    templates: [
      {
        title: "Business Valuation Template",
        description: "Excel template for estimating your business value",
        type: "template",
        downloadUrl: "/resources/business-valuation-template.xlsx"
      },
      {
        title: "Digital Assessment Worksheet",
        description: "Evaluate your current digital maturity and identify opportunities",
        type: "template",
        downloadUrl: "/resources/digital-assessment.xlsx"
      }
    ],
    tools: [
      {
        title: "ROI Calculator",
        description: "Calculate the potential return on your digital investments",
        type: "tool",
        downloadUrl: "/resources/roi-calculator.xlsx"
      },
      {
        title: "Readiness Assessment Tool",
        description: "Evaluate your business's exit readiness",
        type: "tool",
        downloadUrl: "/resources/readiness-assessment.xlsx"
      }
    ]
  };

  const handleDownload = (resource: Resource) => {
    console.log(`Downloading ${resource.title} from ${resource.downloadUrl}`);
    // Implement download logic here
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="w-full max-w-7xl">
          <h1 className={title({ color: "violet", className: "mb-4" })}>
            Resources
          </h1>
          <p className={subtitle({ className: "mb-8" })}>
            Access our collection of guides, templates, and tools to help your business succeed.
          </p>

          <Tabs
            selectedKey={selectedKey}
            onSelectionChange={(key) => setSelectedKey(key as string)}
            className="mb-8"
          >
            <Tab key="guides" title="Guides">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                {resources.guides.map((resource, index) => (
                  <ResourceCard
                    key={index}
                    {...resource}
                    onDownload={handleDownload}
                  />
                ))}
              </div>
            </Tab>
            <Tab key="templates" title="Templates">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                {resources.templates.map((resource, index) => (
                  <ResourceCard
                    key={index}
                    {...resource}
                    onDownload={handleDownload}
                  />
                ))}
              </div>
            </Tab>
            <Tab key="tools" title="Tools">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                {resources.tools.map((resource, index) => (
                  <ResourceCard
                    key={index}
                    {...resource}
                    onDownload={handleDownload}
                  />
                ))}
              </div>
            </Tab>
          </Tabs>
        </div>
      </section>
    </DefaultLayout>
  );
}

export default ResourcesPage;
