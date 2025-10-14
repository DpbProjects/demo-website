// src/app/page.tsx
"use client";

import { useQuery, useAction } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from "react";
import { Hero } from "@/components/sections/hero";
import { FeaturesGrid } from "@/components/sections/features-grid";
import { StatsSection } from "@/components/sections/stats";
import { CtaBanner } from "@/components/sections/cta-banner";
import { BellIcon, BotIcon, BubblesIcon } from "lucide-react";

export default function Page() {
  return (
    <main>
      <Hero
        heading="Welcome to SlickChat"
        subtitle="The easiest way to chat with your customers"
        primaryButtonText="Get Started"
        secondaryButtonText="Learn More"
        onPrimaryClick={() => {}}
        onSecondaryClick={() => {}}
      />
      <FeaturesGrid
        features={[
          {
            icon: <BubblesIcon />,
            title: "Real-time Chat",
            description: "Chat with your customers in real-time",
          },
          {
            icon: <BotIcon />,
            title: "AI-powered Chat",
            description: "Chat with your customers with AI-powered responses",
          },
          {
            icon: <BellIcon />,
            title: "Push Notifications",
            description: "Send push notifications to your customers",
          },
        ]}
      />
      <StatsSection
        stats={[
          { value: "100", label: "Customers" },
          { value: "100", label: "Messages" },
          { value: "100", label: "Messages" },
          { value: "100", label: "Messages" },
        ]}
      />
      <CtaBanner
        title="Ready to get started?"
        description="Get started with SlickChat today"
        buttonText="Get Started"
        onButtonClick={() => {}}
      />
    </main>
  );
}
