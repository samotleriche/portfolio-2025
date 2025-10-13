import { JSX } from "react";

export const experimentData: Record<
  string,
  {
    title: string;
    description: string;
    category: string;
    date: string;
    href: string;
    technologies: string[];
    status: "completed" | "in-progress" | "coming-soon";
    component?: JSX.Element;
  }
> = {
  "rive-text-follow": {
    title: "Rive Text Follow Animation",
    description:
      "Interactive text animation using Rive's powerful animation engine. The text follows mouse movement with smooth, performant animations.",
    category: "animation",
    date: "2025-01-15",
    href: "/experiments#rive-text-follow",
    technologies: ["Rive", "React", "TypeScript"],
    status: "completed",
  },
  "data-binding-demo": {
    title: "Data Binding Visualization",
    description:
      "Dynamic data visualization showing real-time binding between different data sources with interactive controls and smooth transitions.",
    category: "visualization",
    date: "2025-01-10",
    href: "/experiments#data-binding",
    technologies: ["Rive", "GSAP", "React"],
    status: "completed",
  },
  "three-js-scene": {
    title: "Three.js Interactive Scene",
    description:
      "3D interactive environment built with Three.js featuring dynamic lighting, particle systems, and user-controlled camera movement.",
    category: "3d",
    date: "2025-01-05",
    href: "/experiments#three-js",
    technologies: ["Three.js", "WebGL", "React"],
    status: "in-progress",
  },
  "gsap-timeline": {
    title: "Advanced GSAP Timeline",
    description:
      "Complex animation sequences using GSAP's timeline feature with scroll-triggered animations and interactive elements.",
    category: "animation",
    date: "2024-12-28",
    href: "/experiments#gsap-timeline",
    technologies: ["GSAP", "ScrollTrigger", "React"],
    status: "completed",
  },
  "canvas-particles": {
    title: "Canvas Particle System",
    description:
      "Custom particle system built with HTML5 Canvas API featuring physics simulation and interactive mouse effects.",
    category: "canvas",
    date: "2024-12-20",
    href: "/experiments#canvas-particles",
    technologies: ["Canvas API", "JavaScript", "Physics"],
    status: "completed",
  },
};
