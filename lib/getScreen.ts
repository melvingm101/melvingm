import "server-only";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { cache } from "react";
import type { ScreenType } from "@/types/screen";

type ScreenManifest = Record<string, string>; // route key -> filename in data/screens

const getManifest = cache(async (): Promise<ScreenManifest> => {
  const manifestPath = path.join(process.cwd(), "data", "routes.json");
  const raw = await readFile(manifestPath, "utf-8");
  return JSON.parse(raw) as ScreenManifest;
});

export const getScreen = cache(async (screenPath: string): Promise<ScreenType | null> => {
  const manifest = await getManifest();
  const fileName = Object.hasOwn(manifest, screenPath) ? manifest[screenPath] : undefined;
  if (!fileName) return null;

  try {
    const filePath = path.join(process.cwd(), "data", "screens", `${screenPath}.json`);
    const raw = await readFile(filePath, "utf-8");
    return JSON.parse(raw) as ScreenType;
  } catch {
    return null; // ENOENT → screen not found → notFound() upstream
  }
});