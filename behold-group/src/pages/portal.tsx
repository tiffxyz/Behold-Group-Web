
// // // // import { Card, CardBody, CardHeader } from '@heroui/react';
// // // // import { title, subtitle } from "@/components/primitives";
// // // // import DefaultLayout from "@/layouts/default";
// // // // import { Button } from '@heroui/react';
// // // // // import UserMenu from '@/components/Navigation/userMenu';

// // // // interface DashboardTileProps {
// // // //   tileTitle: string;
// // // //   description: string;
// // // //   onClick: () => void;
// // // // }

// // // // interface DashboardTile {
// // // //   tileTitle: string;
// // // //   description: string;
// // // //   action: string;
// // // // }

// // // // const DashboardTile: React.FC<DashboardTileProps> = ({ tileTitle, description, onClick }) => (
// // // //   <Card
// // // //     className="aspect-square cursor-pointer hover:scale-105 transition-transform border border-default-200 bg-gradient-to-r from-blue-500 to-teal-500 p-4 text-white  active:from-purple-500 active:to-blue-500"
// // // //     onPress={onClick}

// // // //   >
// // // //     <CardHeader className="pb-2">
// // // //       <h3 className="text-lg font-semibold">{tileTitle}</h3>
// // // //     </CardHeader>
// // // //     <CardBody>
// // // //       <p className="text-sm text-default-600">{description}</p>
// // // //     </CardBody>
// // // //   </Card>
// // // // );

// // // // const PartnerPortal: React.FC = () => {
// // // //   const handleTileClick = (action: string): void => {
// // // //     // Handle different actions based on tile clicked
// // // //     console.log(`Clicked: ${action}`);
// // // //   };

// // // //   const dashboardTiles: DashboardTile[] = [
// // // //     {
// // // //       tileTitle: "Business Analytics",
// // // //       description: "",
// // // //       action: "analytics"
// // // //     },
// // // //     {
// // // //       tileTitle: "Document Center",
// // // //       description: "",
// // // //       action: "documents"
// // // //     },
// // // //     {
// // // //       tileTitle: "Training Resources",
// // // //       description: "",
// // // //       action: "training"
// // // //     },
// // // //     {
// // // //       tileTitle: "Support Center",
// // // //       description: "",
// // // //       action: "support"
// // // //     },
// // // //     {
// // // //       tileTitle: "Marketing Hub",
// // // //       description: "",
// // // //       action: "marketing"
// // // //     },
// // // //     {
// // // //       tileTitle: "Partner Benefits",
// // // //       description: "",
// // // //       action: "benefits"
// // // //     },
// // // //     {
// // // //       tileTitle: "Communication Center",
// // // //       description: "",
// // // //       action: "communication"
// // // //     },
// // // //     {
// // // //       tileTitle: "Account Settings",
// // // //       description: "",
// // // //       action: "settings"
// // // //     }
// // // //   ];
// // // //   // const dashboardTiles: DashboardTile[] = [
// // // //   //   {
// // // //   //     tileTitle: "Business Analytics",
// // // //   //     description: "View your performance metrics, revenue tracking, and growth analytics",
// // // //   //     action: "analytics"
// // // //   //   },
// // // //   //   {
// // // //   //     tileTitle: "Document Center",
// // // //   //     description: "Access and manage your partnership agreements and documentation",
// // // //   //     action: "documents"
// // // //   //   },
// // // //   //   {
// // // //   //     tileTitle: "Training Resources",
// // // //   //     description: "Access training materials, webinars, and certification courses",
// // // //   //     action: "training"
// // // //   //   },
// // // //   //   {
// // // //   //     tileTitle: "Support Center",
// // // //   //     description: "Get help with technical issues and partner support requests",
// // // //   //     action: "support"
// // // //   //   },
// // // //   //   {
// // // //   //     tileTitle: "Marketing Hub",
// // // //   //     description: "Access marketing materials, campaign tools, and brand resources",
// // // //   //     action: "marketing"
// // // //   //   },
// // // //   //   {
// // // //   //     tileTitle: "Partner Benefits",
// // // //   //     description: "Explore your partner benefits, rewards, and incentive programs",
// // // //   //     action: "benefits"
// // // //   //   },
// // // //   //   {
// // // //   //     tileTitle: "Communication Center",
// // // //   //     description: "Connect with your partner manager and other team members",
// // // //   //     action: "communication"
// // // //   //   },
// // // //   //   {
// // // //   //     tileTitle: "Account Settings",
// // // //   //     description: "Manage your partner portal account and preferences",
// // // //   //     action: "settings"
// // // //   //   }
// // // //   // ];

// // // //   return (
// // // //     <DefaultLayout >
// // // // <div>
// // // //   {/* <UserMenu /> */}
// // // // </div>
// // // //         {/* Outer Card Container */}
// // // //         <Card className="w-full max-w-7xl bg-gradient-to-r from-primary/15 to-secondary/15 p-6">
// // // //       <div className="flex flex-col items-center w-full py-8">
// // // //         <div className="text-center mb-8">
// // // //           <h1 className={title({ color: "violet" })}>Partner Portal</h1>
// // // //           <p className={subtitle()}>Welcome to your personalized dashboard</p>
// // // //         </div>
// // // //         </div>
// // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
// // // //             {dashboardTiles.map((tile, index) => (
// // // //               <DashboardTile
// // // //                 key={index}
// // // //                 tileTitle={tile.tileTitle}
// // // //                 description={tile.description}
// // // //                 onClick={() => handleTileClick(tile.action)}
// // // //               />
// // // //             ))}
// // // //           </div>

// // // //           <div className="mt-8 flex gap-4 justify-center">
// // // //             <Button
// // // //               className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90"
// // // //               onPress={() => handleTileClick('quick-start')}
// // // //             >
// // // //               Quick Start Guide
// // // //             </Button>
// // // //             <Button
// // // //               className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary/90"
// // // //               onPress={() => handleTileClick('contact-support')}
// // // //             >
// // // //               Contact Support
// // // //             </Button>
// // // //           </div>
// // // //         </Card>

// // // //     </DefaultLayout>
// // // //   );
// // // // };

// // // // export default PartnerPortal;

// // // import { Card, CardBody, CardHeader } from '@heroui/react';
// // // import { title, subtitle } from "@/components/primitives";
// // // import DefaultLayout from "@/layouts/default";
// // // import { Button } from '@heroui/react';
// // // import UserMenu from '@/components/Navigation/userMenu';

// // // interface DashboardTileProps {
// // //   tileTitle: string;
// // //   description: string;
// // //   onClick: () => void;
// // // }

// // // interface DashboardTile {
// // //   tileTitle: string;
// // //   description: string;
// // //   action: string;
// // // }

// // // const DashboardTile: React.FC<DashboardTileProps> = ({ tileTitle, description, onClick }) => (
// // //   <Card
// // //     className="aspect-square cursor-pointer hover:scale-105 transition-transform border border-default-200 bg-gradient-to-r from-blue-500 to-teal-500 p-3 text-white active:from-purple-500 active:to-blue-500"
// // //     onPress={onClick}
// // //   >
// // //     <CardHeader className="pb-2">
// // //       <h3 className="text-lg font-semibold">{tileTitle}</h3>
// // //     </CardHeader>
// // //     <CardBody>
// // //       <p className="text-sm text-default-600">{description}</p>
// // //     </CardBody>
// // //   </Card>
// // // );

// // // const PartnerPortal: React.FC = () => {
// // //   const handleTileClick = (action: string): void => {
// // //     // Handle different actions based on tile clicked
// // //     console.log(`Clicked: ${action}`);
// // //   };

// // //   const dashboardTiles: DashboardTile[] = [
// // //     {
// // //       tileTitle: "Business Analytics",
// // //       description: "",
// // //       action: "analytics"
// // //     },
// // //     {
// // //       tileTitle: "Document Center",
// // //       description: "",
// // //       action: "documents"
// // //     },
// // //     {
// // //       tileTitle: "Training Resources",
// // //       description: "",
// // //       action: "training"
// // //     },
// // //     {
// // //       tileTitle: "Support Center",
// // //       description: "",
// // //       action: "support"
// // //     },
// // //     {
// // //       tileTitle: "Marketing Hub",
// // //       description: "",
// // //       action: "marketing"
// // //     },
// // //     {
// // //       tileTitle: "Partner Benefits",
// // //       description: "",
// // //       action: "benefits"
// // //     },
// // //     {
// // //       tileTitle: "Communication Center",
// // //       description: "",
// // //       action: "communication"
// // //     },
// // //     {
// // //       tileTitle: "Account Settings",
// // //       description: "",
// // //       action: "settings"
// // //     }
// // //   ];

// // //   return (
// // //     <DefaultLayout>
// // //       <div className="flex justify-end p-4">
// // //         <UserMenu />
// // //       </div>

// // //       {/* Outer Card Container */}
// // //       <Card className="w-full max-w-7xl bg-gradient-to-r from-primary/15 to-secondary/15 p-6">
// // //         <div className="flex flex-col items-center w-full py-8">
// // //           <div className="text-center mb-8">
// // //             <h1 className={title({ color: "violet" })}>Partner Portal</h1>
// // //             <p className={subtitle()}>Welcome to your personalized dashboard</p>
// // //           </div>
// // //         </div>
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
// // //           {dashboardTiles.map((tile, index) => (
// // //             <DashboardTile
// // //               key={index}
// // //               tileTitle={tile.tileTitle}
// // //               description={tile.description}
// // //               onClick={() => handleTileClick(tile.action)}
// // //             />
// // //           ))}
// // //         </div>

// // //         <div className="mt-8 flex gap-4 justify-center">
// // //           <Button
// // //             className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90"
// // //             onPress={() => handleTileClick('quick-start')}
// // //           >
// // //             Quick Start Guide
// // //           </Button>
// // //           <Button
// // //             className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary/90"
// // //             onPress={() => handleTileClick('contact-support')}
// // //           >
// // //             Contact Support
// // //           </Button>
// // //         </div>
// // //       </Card>
// // //     </DefaultLayout>
// // //   );
// // // };

// // // export default PartnerPortal;
// // import { Card, CardBody, CardHeader } from '@heroui/react';
// // import { title, subtitle } from "@/components/primitives";
// // import { Button } from '@heroui/react';
// // import UserMenu from '@/components/Navigation/userMenu';
// // import { useApp } from '@/components/context/AppContext';
// // import { useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // // Remove DefaultLayout and create our own layout without the main navigation
// // const PortalLayout: React.FC<{children: React.ReactNode}> = ({ children }) => (
// //   <div className="min-h-screen bg-background flex flex-col">
// //     <header className="w-full border-b border-divider">
// //       <div className="container mx-auto flex justify-between items-center py-2">
// //         <div className="flex items-center">
// //           <a href="/" className="font-bold text-2xl text-primary">Behold Group</a>
// //         </div>
// //       </div>
// //     </header>
// //     <main className="flex-grow container mx-auto max-w-7xl pt-12 px-6">
// //       {children}
// //     </main>
// //   </div>
// // );

// // interface DashboardTileProps {
// //   tileTitle: string;
// //   description: string;
// //   onClick: () => void;
// // }

// // interface DashboardTile {
// //   tileTitle: string;
// //   description: string;
// //   action: string;
// // }

// // const DashboardTile: React.FC<DashboardTileProps> = ({ tileTitle, description, onClick }) => (
// //   <Card
// //     className="aspect-square cursor-pointer hover:scale-105 transition-transform border border-default-200 bg-gradient-to-r from-blue-500 to-teal-500 p-3 text-white active:from-purple-500 active:to-blue-500"
// //     onPress={onClick}
// //   >
// //     <CardHeader className="pb-2">
// //       <h3 className="text-lg font-semibold">{tileTitle}</h3>
// //     </CardHeader>
// //     <CardBody>
// //       <p className="text-sm text-default-600">{description}</p>
// //     </CardBody>
// //   </Card>
// // );

// // const PartnerPortal: React.FC = () => {
// //   const { user } = useApp();
// //   const navigate = useNavigate();

// //   // Redirect to login if not authenticated
// //   useEffect(() => {
// //     if (!user) {
// //       navigate('/login', {
// //         state: {
// //           error: 'Authentication required. Please log in to access the Partner Portal.'
// //         }
// //       });
// //     }
// //   }, [user, navigate]);

// //   // Don't render anything if not authenticated
// //   if (!user) {
// //     return null;
// //   }

// //   const handleTileClick = (action: string): void => {
// //     // Handle different actions based on tile clicked
// //     console.log(`Clicked: ${action}`);
// //   };

// //   const dashboardTiles: DashboardTile[] = [
// //     {
// //       tileTitle: "Business Analytics",
// //       description: "",
// //       action: "analytics"
// //     },
// //     {
// //       tileTitle: "Document Center",
// //       description: "",
// //       action: "documents"
// //     },
// //     {
// //       tileTitle: "Training Resources",
// //       description: "",
// //       action: "training"
// //     },
// //     {
// //       tileTitle: "Support Center",
// //       description: "",
// //       action: "support"
// //     },
// //     {
// //       tileTitle: "Marketing Hub",
// //       description: "",
// //       action: "marketing"
// //     },
// //     {
// //       tileTitle: "Partner Benefits",
// //       description: "",
// //       action: "benefits"
// //     },
// //     {
// //       tileTitle: "Communication Center",
// //       description: "",
// //       action: "communication"
// //     },
// //     {
// //       tileTitle: "Account Settings",
// //       description: "",
// //       action: "settings"
// //     }
// //   ];

// //   return (
// //     <PortalLayout>
// //       {/* UserMenu will handle the sidebar toggle */}
// //       <UserMenu />

// //       {/* Outer Card Container */}
// //       <Card className="w-full max-w-7xl bg-gradient-to-r from-primary/15 to-secondary/15 p-6">
// //         <div className="flex flex-col items-center w-full py-8">
// //           <div className="text-center mb-8">
// //             <h1 className={title({ color: "violet" })}>Partner Portal</h1>
// //             <p className={subtitle()}>Welcome to your personalized dashboard</p>
// //           </div>
// //         </div>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
// //           {dashboardTiles.map((tile, index) => (
// //             <DashboardTile
// //               key={index}
// //               tileTitle={tile.tileTitle}
// //               description={tile.description}
// //               onClick={() => handleTileClick(tile.action)}
// //             />
// //           ))}
// //         </div>

// //         <div className="mt-8 flex gap-4 justify-center">
// //           <Button
// //             className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90"
// //             onPress={() => handleTileClick('quick-start')}
// //           >
// //             Quick Start Guide
// //           </Button>
// //           <Button
// //             className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary/90"
// //             onPress={() => handleTileClick('contact-support')}
// //           >
// //             Contact Support
// //           </Button>
// //         </div>
// //       </Card>
// //     </PortalLayout>
// //   );
// // };

// // export default PartnerPortal;


// import { Card, CardBody, CardHeader } from '@heroui/react';
// import { title, subtitle } from "@/components/primitives";
// import { Button } from '@heroui/react';
// import UserMenu from '@/components/Navigation/userMenu';
// import { useApp } from '@/components/context/AppContext';

// // Remove DefaultLayout and create our own layout without the main navigation
// const PortalLayout: React.FC<{children: React.ReactNode}> = ({ children }) => (
//   <div className="min-h-screen bg-background flex flex-col">
//     <header className="w-full border-b border-divider">
//       <div className="container mx-auto flex justify-between items-center py-2">
//         <div className="flex items-center">
//           <a href="/" className="font-bold text-2xl text-primary">Behold Group</a>
//         </div>
//       </div>
//     </header>
//     <main className="flex-grow container mx-auto max-w-7xl pt-12 px-6">
//       {children}
//     </main>
//   </div>
// );

// interface DashboardTileProps {
//   tileTitle: string;
//   description: string;
//   onClick: () => void;
// }

// interface DashboardTile {
//   tileTitle: string;
//   description: string;
//   action: string;
// }

// const DashboardTile: React.FC<DashboardTileProps> = ({ tileTitle, description, onClick }) => (
//   <Card
//     className="aspect-square cursor-pointer hover:scale-105 transition-transform border border-default-200 bg-gradient-to-r from-blue-500 to-teal-500 p-3 text-white active:from-purple-500 active:to-blue-500"
//     onPress={onClick}
//   >
//     <CardHeader className="pb-2">
//       <h3 className="text-lg font-semibold">{tileTitle}</h3>
//     </CardHeader>
//     <CardBody>
//       <p className="text-sm text-default-600">{description}</p>
//     </CardBody>
//   </Card>
// );

// const PartnerPortal: React.FC = () => {
//   const { user } = useApp();

//   // Don't render anything if not authenticated
//   // Note: The actual protection happens in the ProtectedRoute component
//   if (!user) {
//     return null;
//   }

//   const handleTileClick = (action: string): void => {
//     // Handle different actions based on tile clicked
//     console.log(`Clicked: ${action}`);
//   };

//   const dashboardTiles: DashboardTile[] = [
//     {
//       tileTitle: "Business Analytics",
//       description: "",
//       action: "analytics"
//     },
//     {
//       tileTitle: "Document Center",
//       description: "",
//       action: "documents"
//     },
//     {
//       tileTitle: "Training Resources",
//       description: "",
//       action: "training"
//     },
//     {
//       tileTitle: "Support Center",
//       description: "",
//       action: "support"
//     },
//     {
//       tileTitle: "Marketing Hub",
//       description: "",
//       action: "marketing"
//     },
//     {
//       tileTitle: "Partner Benefits",
//       description: "",
//       action: "benefits"
//     },
//     {
//       tileTitle: "Communication Center",
//       description: "",
//       action: "communication"
//     },
//     {
//       tileTitle: "Account Settings",
//       description: "",
//       action: "settings"
//     }
//   ];

//   return (
//     <PortalLayout>
//       {/* UserMenu will handle the sidebar toggle */}
//       <UserMenu />

//       {/* Outer Card Container */}
//       <Card className="w-full max-w-7xl bg-gradient-to-r from-primary/15 to-secondary/15 p-6">
//         <div className="flex flex-col items-center w-full py-8">
//           <div className="text-center mb-8">
//             <h1 className={title({ color: "violet" })}>Partner Portal</h1>
//             <p className={subtitle()}>Welcome to your personalized dashboard</p>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//           {dashboardTiles.map((tile, index) => (
//             <DashboardTile
//               key={index}
//               tileTitle={tile.tileTitle}
//               description={tile.description}
//               onClick={() => handleTileClick(tile.action)}
//             />
//           ))}
//         </div>

//         <div className="mt-8 flex gap-4 justify-center">
//           <Button
//             className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90"
//             onPress={() => handleTileClick('quick-start')}
//           >
//             Quick Start Guide
//           </Button>
//           <Button
//             className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary/90"
//             onPress={() => handleTileClick('contact-support')}
//           >
//             Contact Support
//           </Button>
//         </div>
//       </Card>
//     </PortalLayout>
//   );
// };

// export default PartnerPortal;


// src/pages/portal.tsx
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

  console.log("Partner Portal - Current user:", user);

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
      description: "View your performance metrics and growth analytics",
      action: "analytics"
    },
    {
      tileTitle: "Document Center",
      description: "Access and manage your partnership documents",
      action: "documents"
    },
    {
      tileTitle: "Training Resources",
      description: "Access training materials and certification courses",
      action: "training"
    },
    {
      tileTitle: "Support Center",
      description: "Get help with technical issues and support requests",
      action: "support"
    },
    {
      tileTitle: "Marketing Hub",
      description: "Access marketing materials and brand resources",
      action: "marketing"
    },
    {
      tileTitle: "Partner Benefits",
      description: "Explore your partner benefits and incentive programs",
      action: "benefits"
    },
    {
      tileTitle: "Communication Center",
      description: "Connect with your partner manager and team members",
      action: "communication"
    },
    {
      tileTitle: "Account Settings",
      description: "Manage your partner portal account and preferences",
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
            <p className={subtitle()}>Welcome, {user.firstName || user.username}! This is your personalized dashboard.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
            color="primary"
            onPress={() => handleTileClick('quick-start')}
          >
            Quick Start Guide
          </Button>
          <Button
            color="secondary"
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
