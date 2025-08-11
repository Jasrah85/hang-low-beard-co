// src/lib/data/scents.ts
import type { ScentKey } from "@/lib/types";

export type ScentMeta = {
  key: ScentKey;
  name: string;
  short: string; // 1-liner for cards/badges
  notes?: string[]; // bullet points for PDP
  icon?: string; // your icon component key, if you map by name
};

export const SCENTS: Record<ScentKey, ScentMeta> = {
  woodsman: {
    key: "woodsman",
    name: "Woodsman",
    short: "Cedar • Pine • Earthy",
    notes: ["Outdoorsy", "Warm wood base"],
    icon: "WoodsmanIcon",
  },
  wizardsBeard: {
    key: "wizardsBeard",
    name: "Wizard’s Beard",
    short: "Mystic resin • Smoke",
    notes: ["Smoky-resinous", "Subtle spice"],
    icon: "WizardsBeardIcon",
  },
  orangeSpice: {
    key: "orangeSpice",
    name: "Orange Spice",
    short: "Orange • Clove • Cinnamon",
    notes: ["Cozy", "Cold-weather favorite"],
    icon: "OrangeSpiceIcon",
  },
  lemon: {
    key: "lemon",
    name: "Lemon",
    short: "Bright • Clean • Crisp",
    notes: ["Light, everyday"],
    icon: "LemonIcon",
  },
  peppermint: {
    key: "peppermint",
    name: "Peppermint",
    short: "Cool • Fresh • Awake",
    notes: ["Cooling tingle"],
    icon: "PeppermintIcon",
  },
  cinnamon: {
    key: "cinnamon",
    name: "Cinnamon",
    short: "Warm • Spicy • Comfort",
    notes: ["Subtle sweetness"],
    icon: "CinnamonIcon",
  },
  freshNClean: {
    key: "freshNClean",
    name: "Fresh n’ Clean",
    short: "Our take on Aqua Di Gio",
    notes: ["Aquatic", "Office-friendly"],
    icon: "FreshNCleanIcon",
  },
  bayRum: {
    key: "bayRum",
    name: "Bay Rum",
    short: "Bay • Spice • Rum accord",
    notes: ["Barbershop classic"],
    icon: "BayRumIcon",
  },
  zestyMint: {
    key: "zestyMint",
    name: "Zesty Mint",
    short: "Citrus • Spearmint • Hint eucalyptus",
    notes: ["Bright & cooling"],
    icon: "ZestyMintIcon",
  },
};

export const ALL_SCENTS: ScentMeta[] = Object.values(SCENTS);
