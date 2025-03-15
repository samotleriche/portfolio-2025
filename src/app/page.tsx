import HomeHero from "@/components/sections/home-hero";

export default function Home() {
  return (
    <div className="items-center justify-items-center pt-[var(--h-navbar)] gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex w-section flex-col gap-8 row-start-2 items-start">
        <HomeHero />
        <HomeHero />
      </main>
      <footer className="bg-cyan-950 h-10 flex items-center justify-center">
        <p>&copy; Tomas Leriche - {new Date().getFullYear()} </p>
      </footer>
    </div>
  );
}
