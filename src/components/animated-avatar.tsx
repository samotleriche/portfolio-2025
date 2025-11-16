"use client";

import { useRive, Layout, Fit, Alignment } from "@rive-app/react-webgl2";

export default function AnimatedAvatar() {
  const { RiveComponent } = useRive({
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

  return (
    <div style={{ width: "100%", height: "100%", cursor: "pointer" }}>
      <RiveComponent style={{ width: "100%", height: "100%" }} />
    </div>
  );
}
