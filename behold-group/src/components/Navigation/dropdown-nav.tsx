// export default NavDropdown;
import React from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import { Link } from "@heroui/link";

interface DropdownItem {
  name: string;
  href: string;
  description: string;
}

interface NavDropdownProps {
  items: DropdownItem[];
  label: string;
  href: string;
}

const NavDropdown: React.FC<NavDropdownProps> = ({ items, label, href }) => {
  return (
    <div className="flex items-center gap-1">
      <Link
        className="text-foreground data-[active=true]:text-primary data-[active=true]:font-medium"
        href={href}
      >
        {label}
      </Link>
      <Dropdown>
        <DropdownTrigger>
          <Button
            variant="light"
            isIconOnly
            className="p-0 min-w-unit-6 w-6 h-6 bg-transparent data-[hover=true]:bg-transparent"
          >
            <svg
              className="h-4 w-4 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label={`${label} dropdown menu`}
          className="w-[340px]"
          itemClasses={{
            base: "gap-4",
          }}
        >
          {items.map((item) => (
            <DropdownItem
              key={item.href}
              description={item.description}
              className="py-2"
            >
              <Link
                className="w-full text-lg font-medium"
                color="foreground"
                href={item.href}
              >
                {item.name}
              </Link>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default NavDropdown;
