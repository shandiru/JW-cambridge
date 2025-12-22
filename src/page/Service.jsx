import React from "react";

// Sections from components/HomePage
import WheelTyreHero from "../Service/Hero";
import WheelAlignmentServices from "../Service/Services";
import TyreServices from "../Service/TyreServices";

import EmergencyCTA from "../Service/EmergencyCTA";

export default function Service() {
  return (
    <div>
      {/* Hero */}
      <section >
       <WheelTyreHero />
      </section>
         <section >
       <WheelAlignmentServices />
      </section>
        <section >
       <TyreServices />
      </section>
        <section >
    
      </section>

       <section >
       <EmergencyCTA />
      </section>





   
    </div>
  );
}
