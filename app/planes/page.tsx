"use client";
import React from "react";
import PricingPlans from "@/components/PricingPlans";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatWidget from "@/components/ChatWidget";

export default function PlanesPage() {
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
