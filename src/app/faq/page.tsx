import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FAQ from "@/components/FAQ";
import {
  QuickAnswers,
  HailDamageFAQ,
  InsuranceFAQ,
  StillHaveQuestions,
  CTASection,
} from "./FAQContent";

export const metadata: Metadata = {
  title: "FAQ | Confidents Paintless Dent Removal",
  description:
    "Frequently asked questions about paintless dent removal, hail damage repair, insurance coverage, costs, repair time, warranties, and more.",
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        label="FAQ"
        title="Your Questions, Answered"
        description="Everything you need to know about paintless dent removal, hail damage repair, insurance coverage, and our process."
      />
      <QuickAnswers />
      <FAQ />
      <HailDamageFAQ />
      <InsuranceFAQ />
      <StillHaveQuestions />
      <CTASection />
    </>
  );
}
