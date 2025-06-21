import React from "react";
import { Div } from "./Div";
import { DivWrapper } from "./DivWrapper";
import { Frame } from "./Frame";
import { FrameWrapper } from "./FrameWrapper";
import "./style.css";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <Frame />
      <FrameWrapper />
      <DivWrapper />
      <Div />
    </div>
  );
};
