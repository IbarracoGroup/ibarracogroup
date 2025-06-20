// app/planes/page.tsx
"use client";
import { useEffect } from "react";
import PricingPlans from "@/components/PricingPlans";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatWidget from "@/components/ChatWidget";

export default function PlanesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <PricingPlans />
      <Footer />
      <WhatsAppButton />
      <ChatWidget />
    </>
  );
}
