import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getScreen } from "@/lib/getScreen";
import ScreenElement from "@/components/ScreenElement";

function resolveRouteKey(slug: string[] | undefined) {
  return slug?.join("/") ?? "home";
}

export async function generateMetadata(
  props: PageProps<'/[[...slug]]'>
): Promise<Metadata> {
  const { slug } = await props.params;
  const screen = await getScreen(resolveRouteKey(slug));
  return { title: screen?.title ?? screen?.name };
}

export default async function Page(props: PageProps<'/[[...slug]]'>) {
  const { slug } = await props.params;
  const screen = await getScreen(resolveRouteKey(slug));
  if (!screen) notFound();
  return (
    <ScreenElement currentScreen={screen} />
  )
}