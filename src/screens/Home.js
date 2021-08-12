import React from "react";

import BannerSection from "../components/BannerSection";
import FeatureSection from "../components/FeatureSection";
import TeamSection from "../components/TeamSection";

export default function Home() {
  return (
    <div>
      <BannerSection />
      <FeatureSection />
      <TeamSection />
    </div>
  );
}
