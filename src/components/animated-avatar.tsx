"use client";

import {
  useRive,
  useViewModel,
  Layout,
  Fit,
  Alignment,
} from "@rive-app/react-webgl2";
import { useEffect, useRef } from "react";

export default function AnimatedAvatar() {
  const { rive, RiveComponent } = useRive({
    src: "/animatedavatarcomp.riv",
    stateMachines: "State Machine 1",
    artboard: "pfpchar",
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
    autoplay: true,
    autoBind: true,
  });

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%", cursor: "pointer" }}
    >
      <RiveComponent style={{ width: "100%", height: "100%" }} />
    </div>
  );
}
