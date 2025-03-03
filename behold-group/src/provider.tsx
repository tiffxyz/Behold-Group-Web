// import type { NavigateOptions } from "react-router-dom";
// import { HeroUIProvider } from "@heroui/system";
// import { useHref, useNavigate } from "react-router-dom";

// declare module "@react-types/shared" {
//   interface RouterConfig {
//     routerOptions: NavigateOptions;
//   }
// }
// export function Provider({ children }: { children: React.ReactNode }) {
//   const navigate = useNavigate();

//   return (
//     <HeroUIProvider navigate={navigate} useHref={useHref}>
//       {children}
//     </HeroUIProvider>
//   );
// }
// src/provider.tsx
import { HeroUIProvider } from "@heroui/react";
// Import other providers as needed, but DO NOT import BrowserRouter here

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    // Add your other providers here, but NOT BrowserRouter
    <HeroUIProvider>
      {children}
    </HeroUIProvider>
  );
}
