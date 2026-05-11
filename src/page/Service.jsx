import React from "react";
import WheelTyreHero from "../Service/Hero";
import WheelAlignmentServices from "../Service/Services";
import TyreServices from "../Service/TyreServices";

export default function Service() {
  return (
    <div>
      <section >
        <WheelTyreHero />
      </section>
      <section >
        <WheelAlignmentServices />
      </section>
      <section >
        <TyreServices />
      </section>
    </div>
  );
}
