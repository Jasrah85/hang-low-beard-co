import type { ScentKey } from "@/lib/types";
import { SCENTS } from "@/lib/data/scents";
import ScentCard from "@/components/scents/ScentCard";
import type { ComponentType } from "react";
import * as Icons from "@/components/scents/icons";

type IconMap = Record<string, ComponentType<{ className?: string }>>;
const ICONS = Icons as unknown as IconMap;

export default function ScentGrid({ keys }: { keys?: ScentKey[] }) {
  const items = keys ? keys.map((k) => SCENTS[k]) : Object.values(SCENTS);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((s) => {
        const Icon = ICONS[s.icon ?? "LeafIcon"];
        return (
          <ScentCard
            key={s.key}
            icon={Icon ? <Icon /> : undefined}
            name={s.name}
            short={s.short}
            notes={s.notes}
          />
        );
      })}
    </div>
  );
}
