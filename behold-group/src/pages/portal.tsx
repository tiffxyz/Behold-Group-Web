import { Card, CardBody, CardHeader } from '@heroui/react';
import { title, subtitle } from "@/components/primitives";
import { Button } from '@heroui/react';
import UserMenu from '@/components/Navigation/userMenu';
import { useApp } from '@/components/context/AppContext';

// Custom layout for the portal page
const PortalLayout: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <div className="min-h-screen bg-background flex flex-col">
    <header className="w-full border-b border-divider">
      <div className="container mx-auto flex justify-between items-center py-2">
        <div className="flex items-center">
          <a href="/" className="font-bold text-2xl text-primary">Behold Group</a>
        </div>
      </div>
    </header>
    <main className="flex-grow container mx-auto max-w-7xl pt-12 px-6">
      {children}
    </main>
  </div>
);

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
    className="aspect-square cursor-pointer hover:scale-105 transition-transform border border-default-200 bg-gradient-to-r from-blue-500 to-teal-500 p-3 text-white active:from-purple-500 active:to-blue-500"
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
  const { user } = useApp();

  // Protection happens in the ProtectedRoute component
  // This is just an extra check
  if (!user) {
    console.log("No user found in partner portal");
    return (
      <PortalLayout>
        <div className="text-center">
          <h2 className="text-2xl font-bold">Authentication Required</h2>
          <p>You need to log in to access the Partner Portal.</p>
          <Button
            color="primary"
            className="mt-4"
            href="/login"
          >
            Go to Login
          </Button>
        </div>
      </PortalLayout>
    );
  }

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

  return (
    <PortalLayout>
      {/* UserMenu will handle the sidebar toggle */}
      <UserMenu />

      {/* Outer Card Container */}
      <Card className="w-full max-w-7xl bg-gradient-to-r from-primary/15 to-secondary/15 p-6">
        <div className="flex flex-col items-center w-full py-8">
          <div className="text-center mb-8">
            <h1 className={title({ color: "violet" })}>Partner Portal</h1>
            <p className={subtitle()}>Welcome to your personalized dashboard</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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
    </PortalLayout>
  );
};

export default PartnerPortal;
