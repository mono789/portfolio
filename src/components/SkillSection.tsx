"use client";

import React, { useMemo } from "react";
import Image from "next/image";

const Tab = ({
  name,
  active,
  onClick,
}: {
  name: string;
  active: boolean;
  onClick: (e: any) => void;
}) => {
  return (
    <div
      className="px-6 py-2 cursor-pointer lg:px-8 lg:py-4 trans hover:bg-slate-200/20 rounded-lg"
      style={{
        backgroundColor: active ? "var(--bg-hover)" : "",
      }}
      onClick={onClick}
    >
      {name}
    </div>
  );
};

function TagCircle({ tech }: { tech: { name: string; icon: string } }) {
  return (
    <div
      className="flex flex-col items-center hover:bg-[var(--bg-hover)] trans bg-slate-400/10 rounded-lg p-2"
      style={{
        width: 200,
        height: 200,
      }}
    >
      <div className="relative flex-none translate-y-1.5 -translate-x-0 fcenter h-3/5">
        <Image
          src={tech.icon}
          alt={tech.name}
          width={100}
          height={100}
        />
      </div>
      <div className="text-sm text-center">{tech.name}</div>
    </div>
  );
}

export function SkillsSection({ data }: { data: { name: string; icon: string, categories: { title: string, slug: string }[] }[] }) {
  const [tabs, tabsData] = useMemo(() => {
    let tabs = [{ title: "All", slug: "all" }];
    const slugSet = new Set<string>();

    data.forEach((skill) => {
      skill.categories.forEach((category) => {
        if (!slugSet.has(category.slug)) {
          slugSet.add(category.slug);
          tabs.push(category);
        }
      });
    });

    const tabsData: Record<string, typeof data> = {};

    // Aquí se asegura de que todas las habilidades se agregan al tab "all"
    tabsData["all"] = [...data];

    for (const tab of tabs) {
      if (tab.slug !== "all") {
        tabsData[tab.slug] = data.filter((skill) =>
          skill.categories.some((c) => c.slug === tab.slug)
        );
      }
    }

    return [tabs, tabsData];
  }, [data]);

  const [activeTab, setActiveTab] = React.useState({
    i: 0,
    slug: tabs[0].slug,
  });

  return (
    <div className="flex flex-col items-center w-full space-y-8">
      <div className="flex flex-wrap justify-center gap-1 md:gap-2">
        {tabs.map((tab, i) => (
          <Tab
            key={i}
            name={tab.title}
            active={i === activeTab.i}
            onClick={() => setActiveTab({ i, slug: tab.slug })}
          />
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-3 md:gap-6 max-w-[80%]">
        {tabsData[activeTab.slug].map((skill, i) => (
          <TagCircle tech={skill} key={i} />
        ))}
      </div>
    </div>
  );
}