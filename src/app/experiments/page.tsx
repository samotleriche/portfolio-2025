import type { Metadata } from "next";
import PageHeader from "@/components/site/page-header";
import RiveFrame from "@/components/rive-frame";

export const metadata: Metadata = {
  title: "Lab",
  description:
    "Rive experiments by Tomas Leriche — text on a path, and a data-binding study.",
};

const pieces = [
  {
    id: "text-follow",
    index: "01",
    title: "Text on a path",
    src: "/text_follow.riv",
    copy: "A line of type that follows a curve. It’s the kind of motion that looks simple and isn’t, which is most of why I like Rive.",
  },
  {
    id: "data-binding",
    index: "02",
    title: "Data binding",
    src: "/data_binding.riv",
    copy: "A study in binding values into a Rive file instead of redrawing the scene by hand. The file is the one sitting in this project.",
  },
];

export default function ExperimentsPage() {
  return (
    <div className="w-section py-16 md:py-24">
      <PageHeader eyebrow="Lab" title="Motion, without the case study.">
        Two Rive files that actually live in this repo. I don’t list experiments
        that aren’t on the page.
      </PageHeader>

      <div className="mt-8">
        {pieces.map((piece) => (
          <article
            key={piece.id}
            id={piece.id}
            className="grid items-center gap-8 border-t border-line py-14 lg:grid-cols-12 lg:gap-12"
          >
            <div className="lg:col-span-4">
              <p className="text-sm text-faint">{piece.index}</p>
              <h2 className="mt-3 font-serif text-4xl tracking-tight">
                {piece.title}
              </h2>
              <p className="mt-4 leading-relaxed text-muted">{piece.copy}</p>
            </div>
            <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-[#171513] lg:col-span-8">
              <RiveFrame src={piece.src} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
