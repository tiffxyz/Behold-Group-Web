
import { Card, CardBody, CardHeader } from '@heroui/react';
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Button } from '@heroui/react';
// import UserMenu from '@/components/Navigation/userMenu';

interface DashboardTileProps {
  tileTitle: string;
  description: string;
  onClick: () => void;
}

interface DashboardTile {
  tileTitle: string;
  description: string;
  action: string;
}

const DashboardTile: React.FC<DashboardTileProps> = ({ tileTitle, description, onClick }) => (
  <Card
    className="aspect-square cursor-pointer hover:scale-105 transition-transform border border-default-200 bg-gradient-to-r from-blue-500 to-teal-500 p-4 text-white  active:from-purple-500 active:to-blue-500"
    onPress={onClick}

  >
    <CardHeader className="pb-2">
      <h3 className="text-lg font-semibold">{tileTitle}</h3>
    </CardHeader>
    <CardBody>
      <p className="text-sm text-default-600">{description}</p>
    </CardBody>
  </Card>
);

const PartnerPortal: React.FC = () => {
  const handleTileClick = (action: string): void => {
    // Handle different actions based on tile clicked
    console.log(`Clicked: ${action}`);
  };

  const dashboardTiles: DashboardTile[] = [
    {
      tileTitle: "Business Analytics",
      description: "",
      action: "analytics"
    },
    {
      tileTitle: "Document Center",
      description: "",
      action: "documents"
    },
    {
      tileTitle: "Training Resources",
      description: "",
      action: "training"
    },
    {
      tileTitle: "Support Center",
      description: "",
      action: "support"
    },
    {
      tileTitle: "Marketing Hub",
      description: "",
      action: "marketing"
    },
    {
      tileTitle: "Partner Benefits",
      description: "",
      action: "benefits"
    },
    {
      tileTitle: "Communication Center",
      description: "",
      action: "communication"
    },
    {
      tileTitle: "Account Settings",
      description: "",
      action: "settings"
    }
  ];
  // const dashboardTiles: DashboardTile[] = [
  //   {
  //     tileTitle: "Business Analytics",
  //     description: "View your performance metrics, revenue tracking, and growth analytics",
  //     action: "analytics"
  //   },
  //   {
  //     tileTitle: "Document Center",
  //     description: "Access and manage your partnership agreements and documentation",
  //     action: "documents"
  //   },
  //   {
  //     tileTitle: "Training Resources",
  //     description: "Access training materials, webinars, and certification courses",
  //     action: "training"
  //   },
  //   {
  //     tileTitle: "Support Center",
  //     description: "Get help with technical issues and partner support requests",
  //     action: "support"
  //   },
  //   {
  //     tileTitle: "Marketing Hub",
  //     description: "Access marketing materials, campaign tools, and brand resources",
  //     action: "marketing"
  //   },
  //   {
  //     tileTitle: "Partner Benefits",
  //     description: "Explore your partner benefits, rewards, and incentive programs",
  //     action: "benefits"
  //   },
  //   {
  //     tileTitle: "Communication Center",
  //     description: "Connect with your partner manager and other team members",
  //     action: "communication"
  //   },
  //   {
  //     tileTitle: "Account Settings",
  //     description: "Manage your partner portal account and preferences",
  //     action: "settings"
  //   }
  // ];

  return (
    <DefaultLayout >
<div>
  {/* <UserMenu /> */}
</div>
        {/* Outer Card Container */}
        <Card className="w-full max-w-7xl bg-gradient-to-r from-primary/15 to-secondary/15 p-6">
      <div className="flex flex-col items-center w-full py-8">
        <div className="text-center mb-8">
          <h1 className={title({ color: "violet" })}>Partner Portal</h1>
          <p className={subtitle()}>Welcome to your personalized dashboard</p>
        </div>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {dashboardTiles.map((tile, index) => (
              <DashboardTile
                key={index}
                tileTitle={tile.tileTitle}
                description={tile.description}
                onClick={() => handleTileClick(tile.action)}
              />
            ))}
          </div>

          <div className="mt-8 flex gap-4 justify-center">
            <Button
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90"
              onPress={() => handleTileClick('quick-start')}
            >
              Quick Start Guide
            </Button>
            <Button
              className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary/90"
              onPress={() => handleTileClick('contact-support')}
            >
              Contact Support
            </Button>
          </div>
        </Card>

    </DefaultLayout>
  );
};

export default PartnerPortal;
