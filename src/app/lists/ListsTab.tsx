"use client";
import { Tab, Tabs } from "@nextui-org/react";
import { Member } from "@prisma/client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { Key, useTransition } from "react";
import MemberCard from "../members/MemberCard";
import LoadingComponents from "../components/LoadingComponents";

type Props = {
  members: Member[];
  likeIds: string[];
};

export default function ListsTab({ members, likeIds }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const tabs = [
    { id: "source", label: "Member I have liked" },
    { id: "target", label: "Member that like me" },
    { id: "mutual", label: "Mutual likes" },
  ];
  function handleTabChange(key: Key) {
    startTransition(() => {
      const params = new URLSearchParams(searchParams);
      params.set("type", key.toString());
      router.replace(`${pathname}?${params.toString()}`);
    });
    const params = new URLSearchParams(searchParams);
    params.set("type", key.toString());
    router.replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div className="flex w-ful flex-col mt-10 gap-5">
      <Tabs
        aria-label="Like tabs"
        items={tabs}
        color="secondary"
        onSelectionChange={(key) => handleTabChange(key)}>
        {(item) => (
          <Tab key={item.id} title={item.label}>
            {isPending ? (
              <LoadingComponents />
            ) : (
              <>
                {members.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-8">
                    {members.map((member) => (
                      <MemberCard
                        key={member.id}
                        member={member}
                        likeIds={likeIds}
                      />
                    ))}
                  </div>
                ) : (
                  <div>No Member for this filter</div>
                )}
              </>
            )}
          </Tab>
        )}
      </Tabs>
    </div>
  );
}
