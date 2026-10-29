"use client";

import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

export default function RiveFrame({
  src,
  stateMachine = "State Machine 1",
}: {
  src: string;
  stateMachine?: string;
}) {
  const { RiveComponent } = useRive({
    src,
    stateMachine,
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  return <RiveComponent style={{ width: "100%", height: "100%" }} />;
}
