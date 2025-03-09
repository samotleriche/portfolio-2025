import HomeHero from "@/components/sections/home-hero";

export default function Home() {
  return (
    <div className="items-center justify-items-center w-section h-[200vh] pt-[var(--h-navbar)] gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <HomeHero />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        footer
      </footer>
    </div>
  );
}
