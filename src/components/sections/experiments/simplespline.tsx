"use client";

import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

export default function Simple() {
  const {
    // rive,
    RiveComponent,
  } = useRive({
    src: "text_follow.riv",
    stateMachines: "State Machine 1",
    layout: new Layout({
      fit: Fit.Contain, // Change to: rive.Fit.Contain, or Cover
      alignment: Alignment.Center,
    }),
    autoplay: true,
  });

  return (
    <RiveComponent
    // onMouseEnter={() => rive && rive.play()}
    // onMouseLeave={() => rive && rive.pause()}
    />
  );
}
