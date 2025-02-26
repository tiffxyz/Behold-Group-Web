// // import { Button } from "@heroui/button";
// // import { Kbd } from "@heroui/kbd";
// import { Link } from "@heroui/link";
// import { Input } from "@heroui/input";
// import {
//   Navbar as HeroUINavbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   NavbarMenuToggle,
//   NavbarMenu,
//   NavbarMenuItem,
// } from "@heroui/navbar";
// import { link as linkStyles } from "@heroui/theme";
// import clsx from "clsx";

// import { siteConfig } from "@/config/site";
// import { ThemeSwitch } from "@/components/theme-switch";
// import {
//   // TwitterIcon,
//   // GithubIcon,
//   // DiscordIcon,
//   // HeartFilledIcon,
//   SearchIcon,
// } from "@/components/icons";
// // import { Logo } from "@/components/icons";
// import NavDropdown from "./dropdown-nav"



// export const Navbar = () => {
//   const searchInput = (
//     <Input
//       aria-label="Search"
//       classNames={{
//         inputWrapper: "bg-default-100",
//         input: "text-sm",
//       }}
//       // endContent={
//       //   <Kbd className="hidden lg:inline-block" keys={["command"]}>
//       //     K
//       //   </Kbd>
//       // }
//       labelPlacement="outside"
//       placeholder="Search..."
//       startContent={
//         <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
//       }
//       type="search"
//     />
//   );

//   return (
//     <HeroUINavbar maxWidth="xl" position="sticky">
//       <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
//         <NavbarBrand className="gap-3 max-w-fit">
//           <Link
//             className="flex justify-start items-center gap-1"
//             color="foreground"
//             href="/"
//           >
//             {/*/<Logo /> */}
//             <p className="font-bold text-inherit">The Behold Group</p>
//           </Link>
//         </NavbarBrand>
//         <div className="hidden lg:flex gap-4 justify-start ml-2">
//           {siteConfig.navItems.map((item) => (
//             <NavbarItem key={item.href}>
//               {/* <Link
//                 className={clsx(
//                   linkStyles({ color: "foreground" }),
//                   "data-[active=true]:text-primary data-[active=true]:font-medium"
//                 )}
//                 color="foreground"
//                 href={item.href}
//               >
//                 {item.label}
//               </Link> */}


//               {item.dropdownItems ? (
//                 <NavDropdown items={item.dropdownItems} label={item.label} href={item.href}/>
//               ) : (
//                 <Link
//                   className={clsx(
//                     linkStyles({ color: "foreground" }),
//                     "data-[active=true]:text-primary data-[active=true]:font-medium"
//                   )}
//                   color="foreground"
//                   href={item.href}
//                 >
//                   {item.label}
//                 </Link>
//               )}
//             </NavbarItem>
//           ))}
//         </div>
//       </NavbarContent>

//       <NavbarContent
//         className="hidden sm:flex basis-1/5 sm:basis-full"
//         justify="end"
//       >
//         <NavbarItem className="hidden sm:flex gap-2">
//           <Link isExternal href={siteConfig.links.twitter} title="Twitter">
//             {/* <TwitterIcon className="text-default-500" /> */}
//           </Link>
//           <Link isExternal href={siteConfig.links.discord} title="Discord">
//             {/* <DiscordIcon className="text-default-500" /> */}
//           </Link>
//           <Link isExternal href={siteConfig.links.github} title="GitHub">
//             {/* <GithubIcon className="text-default-500" /> */}
//           </Link>
//           <ThemeSwitch />
//         </NavbarItem>
//         <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
//         <NavbarItem className="hidden md:flex">
//           {/* <Button
//             isExternal
//             as={Link}
//             className="text-sm font-normal text-default-600 bg-default-100"
//             href={siteConfig.links.sponsor}
//             startContent={<HeartFilledIcon className="text-danger" />}
//             variant="flat"
//           >
//             Sponsor
//           </Button> */}
//         </NavbarItem>
//       </NavbarContent>

//       <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
//         <Link isExternal href={siteConfig.links.github}>
//           {/* <GithubIcon className="text-default-500" /> */}
//         </Link>
//         <ThemeSwitch />
//         <NavbarMenuToggle />
//       </NavbarContent>

//       <NavbarMenu>
//         {searchInput}
//         <div className="mx-4 mt-2 flex flex-col gap-2">
//           {siteConfig.navMenuItems.map((item, index) => (
//             <NavbarMenuItem key={`${item}-${index}`}>
//               <Link
//                 color={
//                   index === 2
//                     ? "primary"
//                     : index === siteConfig.navMenuItems.length - 1
//                       ? "danger"
//                       : "foreground"
//                 }
//                 href="#"
//                 size="lg"
//               >
//                 {item.label}
//               </Link>
//             </NavbarMenuItem>
//           ))}
//         </div>
//       </NavbarMenu>
//     </HeroUINavbar>
//   );
// };


// components/navbar.tsx
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
// import { Button } from "@heroui/react";
import clsx from "clsx";
import { link as linkStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { SearchIcon } from "@/components/icons";
import UserMenu from "./userMenu";
import NavDropdown from "./dropdown-nav";

import { useDisclosure} from "@heroui/react";
import LoginModal from "../Modals/login-modal";




export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // bg-[#022E40]
  return (
    <HeroUINavbar maxWidth="xl" position="sticky" className="">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <p className="font-bold text-inherit">Behold Group</p>
          </Link>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              {item.dropdownItems ? (
                <NavDropdown
                  items={item.dropdownItems}
                  label={item.label}
                  href={item.href}
                />
              ) : (
                <Link
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </Link>
              )}
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden lg:flex">
          {searchInput}
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link color="primary" onPress={onOpen}>Partner Portal</Link>
          <LoginModal isOpen={isOpen} onOpenChange={onOpenChange} />
        </NavbarItem>
        {/* <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="/contact"
            variant="flat"
            className="text-sm"
          >
            Get Started
          </Button>
        </NavbarItem> */}
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem>
          <UserMenu />
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
};

export default Navbar;
