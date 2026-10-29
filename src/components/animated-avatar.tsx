"use client";

import { useRive, Layout, Fit, Alignment } from "@rive-app/react-webgl2";
import { useEffect } from "react";

export default function AnimatedAvatar({ engaged = false }: { engaged?: boolean }) {
  const { rive, RiveComponent } = useRive({
    src: "/animatedavatarcomp.riv",
    stateMachine: "State Machine 1",
    artboard: "pfpchar",
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
    autoplay: true,
    autoBind: true,
  });

  useEffect(() => {
    if (!rive) return;
    const hover = rive
      .stateMachineInputs("State Machine 1")
      ?.find((input) => input.name === "isHover");
    if (hover) hover.value = engaged;
  }, [rive, engaged]);

  return (
    <div className="h-full w-full">
      <RiveComponent style={{ width: "100%", height: "100%" }} />
    </div>
  );
}
