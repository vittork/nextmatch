"use client";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { signOutUser } from "../../actions/authActions";
type Props = {
  user: Session["user"];
};

export default function UserMenu({ user }: Props) {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          name={user?.name || "user avatar"}
          size="sm"
          src={user?.image || "/images/user.png"}
        />
      </DropdownTrigger>
      <DropdownMenu variant="flat" aria-label="User Actions Menu">
        <DropdownSection showDivider>
          <DropdownItem
            isReadOnly
            as="span"
            className="h-14 flex flex-row"
            aria-label="username">
            Sign in as {user?.name}
          </DropdownItem>
        </DropdownSection>
        <DropdownItem as={Link} href="members/edit">
          Edit Profile
        </DropdownItem>
        <DropdownItem color="danger" onClick={async () => signOutUser()}>
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
