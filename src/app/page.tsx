import HomeHero from "@/components/sections/home-hero";

export default function Home() {
  return (
    <div className="items-center justify-items-center pt-[var(--h-navbar)] gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex w-section flex-col gap-8 row-start-2 items-start">
        <HomeHero />
      </main>
    </div>
  );
}
