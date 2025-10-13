import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tomas Leriche | About",
  description:
    "Tomas Leriche is a software engineer and motion designer currently based in Santa Monica, California.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
