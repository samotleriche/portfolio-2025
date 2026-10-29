import HomeHero from "@/components/sections/home-hero";
import HomeRest from "@/components/sections/home-rest";
import { getPublishedPosts } from "@/lib/blog-server";

export default function Home() {
  const latest = getPublishedPosts()[0] ?? null;

  return (
    <>
      <HomeHero />
      <HomeRest latest={latest} />
    </>
  );
}
