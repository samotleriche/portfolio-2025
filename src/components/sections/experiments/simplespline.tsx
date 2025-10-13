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
      fit: Fit.Contain, // Changed to Contain for better scaling
      alignment: Alignment.Center,
    }),
    autoplay: true,
  });

  return (
    <RiveComponent
      style={{ width: "100%", height: "100%" }}
      // onMouseEnter={() => rive && rive.play()}
      // onMouseLeave={() => rive && rive.pause()}
    />
  );
}
