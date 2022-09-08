import React from "react";

// Components
import Section from "../Components/Section";
import TechStack from "../Components/TechStack";
import Download from "../Components/Download";

import Copyright from "../Components/Copyright";
// Assets
import assets from "../assets";

const LandingPage = () => {
  return (
    <>
      {/* Hero Section  */}
      <Section
        primarySection
        button={true} // to display button ✅
        heading="Your own any time Food Delivery App."
        description="As quick as lightning, and as good as ever Install now to get your first free meal and get 50% off on your next Purple Pie order."
        image={assets.mockup_1}
        banner="backgroundPrimary"
      />

      {/* Info Section  */}
      <Section
        secondarySection
        button={false} // to not display button ❌
        heading="Just the best delivery service you could ever dream of."
        description="We provide the quickest food delivery possible. We bring good food to your doorstep. Get served like an emperor."
        image={assets.mockup_2}
        banner="none"
      />

      {/* Technologies Section  */}
      <TechStack banner="backgroundTertiary" />

      {/* Availability Section */}
      <Section
        secondarySection
        button={false} // to not display button ❌
        heading="Availability"
        description="Purple Pie is built using Expo. It is available on Android for use. Perhaps in the future on iOS. I'm excited about it."
        image={assets.mockup_3}
        banner="none"
      />

      {/* Features Section  */}
      <Section
        primarySection
        button={false} // to not display button ❌
        heading="Things Go Better with App features."
        description="The app contains many features that allows you to order variety of meals from comfort of your home."
        image={assets.mockup_4}
        banner="backgroundSecondary"
      />

      {/* Download Section  */}
      <Download />

      {/* Copyright Section  */}
      <Copyright banner="backgroundQuaternary" />
    </>
  );
};

export default LandingPage;
