// // components/user-menu/user-menu.tsx
// import {
//   Dropdown,
//   DropdownTrigger,
//   DropdownMenu,
//   DropdownItem,
//   Button
// } from "@heroui/react";
// // import { Link } from "@heroui/link";

// const menuItems = [
//   { name: "Profile", href: "/profile" },
//   { name: "Dashboard", href: "/dashboard" },
//   { name: "Settings", href: "/settings" },
//   { name: "Help & Feedback", href: "/help" },
//   { name: "Log Out", href: "/logout" }
// ];

// export const UserMenu = () => {
//   return (
//     <Dropdown>
//       <DropdownTrigger>
//         <Button
//           variant="light"
//           isIconOnly
//           className="text-sm"
//         >
//           {/* ☰ */}

//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
// </svg>


//         </Button>
//       </DropdownTrigger>
//       <DropdownMenu aria-label="User actions">
//         {menuItems.map((item, index) => (
//           <DropdownItem
//             key={item.name}
//             className={index === menuItems.length - 1 ? "text-danger" : ""}
//             href={item.href}
//           >
//             {item.name}
//           </DropdownItem>
//         ))}
//       </DropdownMenu>
//     </Dropdown>
//   );
// };



// import {
//   Dropdown,
//   DropdownTrigger,
//   DropdownMenu,
//   DropdownItem,
//   // Button,
//   Avatar
// } from "@heroui/react";
// import { useAuth } from '../context/AuthContext';

// export default function UserMenu() {
//   const { user, logout } = useAuth();

//   if (!user) return null;

//   return (
//     <Dropdown placement="bottom-end">
//       <DropdownTrigger>
//         <Avatar
//           isBordered
//           as="button"
//           className="transition-transform"
//           color="primary"
//           name={user.username}
//           size="sm"
//         />
//       </DropdownTrigger>
//       <DropdownMenu aria-label="Profile Actions" variant="flat">
//         <DropdownItem key="profile" className="h-14 gap-2">
//           <p className="font-semibold">Signed in as</p>
//           <p className="font-semibold">{user.email}</p>
//         </DropdownItem>
//         <DropdownItem key="settings">My Settings</DropdownItem>
//         <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
//         <DropdownItem key="logout" color="danger" onPress={logout}>
//           Log Out
//         </DropdownItem>
//       </DropdownMenu>
//     </Dropdown>
//   );
// }


// src/components/userMenu.tsx
// import {
//   Dropdown,
//   DropdownTrigger,
//   DropdownMenu,
//   DropdownItem,
//   Avatar,
//   Button
// } from "@heroui/react";
// import { useAuth } from "../context/AuthContext";
// import { useDisclosure } from "@heroui/react";
// import LoginModal from '../Modals/login-modal';

// export default function UserMenu() {
//   const { user, logout, isLoading } = useAuth();
//   const { isOpen, onOpen, onOpenChange } = useDisclosure();

//   // If no user is logged in, show login button
//   if (!user) {
//     return (
//       <>
//         <Button
//           color="primary"
//           variant="flat"
//           onPress={onOpen}
//           size="sm"
//         >
//           Login
//         </Button>
//         <LoginModal isOpen={isOpen} onOpenChange={onOpenChange} />
//       </>
//     );
//   }

//   // If user is logged in, show user menu
//   return (
//     <Dropdown placement="bottom-end">
//       <DropdownTrigger>
//         <Avatar
//           isBordered
//           as="button"
//           className="transition-transform"
//           color="primary"
//           name={user.username}
//           size="sm"
//         />
//       </DropdownTrigger>
//       <DropdownMenu aria-label="Profile Actions" variant="flat">
//         <DropdownItem key="profile" className="h-14 gap-2">
//           <p className="font-semibold">Signed in as</p>
//           <p className="font-semibold">{user.email}</p>
//         </DropdownItem>
//         <DropdownItem key="settings">My Settings</DropdownItem>
//         <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
//         <DropdownItem
//           key="logout"
//           color="danger"
//           onPress={logout}
//           isDisabled={isLoading}
//         >
//           {isLoading ? 'Logging out...' : 'Log Out'}
//         </DropdownItem>
//       </DropdownMenu>
//     </Dropdown>
//   );
// }


// // src/components/userMenu.tsx
// import {
//   Dropdown,
//   DropdownTrigger,
//   DropdownMenu,
//   DropdownItem,
//   Avatar,
//   Button
// } from "@heroui/react";
// import { useAuth } from "../context/AuthContext";
// import { useDisclosure } from "@heroui/react";
// import LoginModal from '../Modals/login-modal';

// export default function UserMenu() {
//   const { user, logout, isLoading } = useAuth();
//   const { isOpen, onOpen, onOpenChange } = useDisclosure();

//   // If no user is logged in, show login button
//   if (!user) {
//     return (
//       <>
//         <Button
//           color="primary"
//           variant="flat"
//           onPress={onOpen}
//           size="sm"
//         >
//           Login
//         </Button>
//         <LoginModal isOpen={isOpen} onOpenChange={onOpenChange} />
//       </>
//     );
//   }

//   // If user is logged in, show user menu
//   return (
//     <Dropdown placement="bottom-end">
//       <DropdownTrigger>
//         <Avatar
//           isBordered
//           as="button"
//           className="transition-transform"
//           color="primary"
//           name={user.username}
//           size="sm"
//         />
//       </DropdownTrigger>
//       <DropdownMenu aria-label="Profile Actions" variant="flat">
//         <DropdownItem key="profile" className="h-14 gap-2">
//           <p className="font-semibold">Signed in as</p>
//           <p className="font-semibold">{user.email}</p>
//         </DropdownItem>
//         <DropdownItem key="settings">My Settings</DropdownItem>
//         <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
//         <DropdownItem
//           key="logout"
//           color="danger"
//           onPress={logout}
//           isDisabled={isLoading}
//         >
//           {isLoading ? 'Logging out...' : 'Log Out'}
//         </DropdownItem>
//       </DropdownMenu>
//     </Dropdown>
//   );
// }

// src/components/userMenu.tsx
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar
} from "@heroui/react";
import { useAuth } from "../context/AuthContext";

export default function UserMenu() {
  const { user, logout, isLoading } = useAuth();

  // If no user is logged in, return null (no button displayed)
  if (!user) {
    return null;
  }

  // If user is logged in, show user menu
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="primary"
          name={user.username}
          size="sm"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">{user.email}</p>
        </DropdownItem>
        <DropdownItem key="settings">My Settings</DropdownItem>
        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
        <DropdownItem
          key="logout"
          color="danger"
          onPress={logout}
          isDisabled={isLoading}
        >
          {isLoading ? 'Logging out...' : 'Log Out'}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
