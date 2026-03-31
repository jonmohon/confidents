"use client";

import { useState } from "react";

const questions = [
  {
    q: "Can PDR fix every type of dent?",
    a: "Paintless dent removal works on the vast majority of dents where the paint surface is still intact. This includes hail damage, door dings, minor creases, and dents from shopping carts, baseballs, and other impacts. However, PDR has its limits. If the metal has been stretched beyond a certain point, if the dent is located on the very edge of a panel, or if the paint has cracked or chipped, traditional body work may be required. During your free inspection, we will be completely transparent about what PDR can achieve and whether your specific damage is a good candidate.",
  },
  {
    q: "How is PDR different from traditional body shop repair?",
    a: "Traditional body shop repair involves filling the dent with body filler (Bondo), sanding the area smooth, and then repainting the entire panel. This process takes days or weeks, costs significantly more, and replaces your factory paint with aftermarket paint that may not match perfectly over time. PDR preserves your original factory finish entirely. There is no filler, no sanding, and no repainting. The repair is invisible, faster, less expensive, and does not appear on your vehicle history report. Your car retains its full resale value because the original paint is untouched.",
  },
  {
    q: "What happens if you find more damage during the repair?",
    a: "It is common for our technicians to discover additional dents during the repair process that were not visible during the initial inspection. This happens because removing panels and using our LED lighting can reveal damage hidden by body lines, trim pieces, or panel curvature. If we find additional damage on an insurance repair, we file a supplement to your claim at no extra work on your part. We document the additional damage with photographs and measurements, submit everything to your adjuster, and wait for approval before proceeding. We never charge you for work that was not agreed upon in advance.",
  },
  {
    q: "Do you offer any kind of warranty on the repair?",
    a: "Every repair we perform comes with a lifetime warranty. This means that if the dent we repaired ever reappears or if you notice any imperfection in the repaired area at any point in the future, we will fix it at no charge. We stand behind our work without reservation. PDR is a permanent repair when done correctly. The metal is restored to its original shape, and there is no filler or paint that can crack, peel, or fade over time. Our warranty reflects our confidence in the durability and quality of our repairs.",
  },
];

export default function ProcessFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {questions.map((item, i) => (
        <div
          key={i}
          className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
          >
            <span className="text-white font-bold text-lg pr-4">
              {item.q}
            </span>
            <span
              className={`text-brand-orange text-2xl shrink-0 transition-transform duration-300 ${
                open === i ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          <div
            className={`grid transition-all duration-300 ${
              open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <p className="text-gray-400 leading-relaxed px-6 pb-6">
                {item.a}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
