import React from "react";

import Hero from "../components/sections/Hero";
import LandingLayout from "../components/layouts/LandingLayout";


export default function Landing() {
  return (
    <LandingLayout>
      <Hero
        title="ODDITIES & RARITIES"
        subtitle="Midway's #1 buyer and seller of premium items!"
        image="deerman.jpeg"
        ctaText="Shop Now!"
        ctaLink="/shop"
      />
    </LandingLayout>
  );
}
